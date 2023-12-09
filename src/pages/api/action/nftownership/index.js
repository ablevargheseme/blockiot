import axios from "axios";
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { body } = req;

        const { walletAddress } = body;
        try {
            const BASE_URL = "https://api.1inch.dev/nft/v1/byaddress";

            const address = walletAddress;
            const limit = req.query.limit || 50;
            const offset = req.query.offset || 0;
            const chainIds = req.query.chainIds || 1;
            const constructedUrl = `${BASE_URL}?address=${address}&chainIds=${chainIds}&limit=${limit}&offset=${offset}`;

            const response = await axios.get(constructedUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.ONE_INCH_API_KEY}`,
                },
            });
            const datas = response.data.assets;
            // Address to check if present in the array
            const addressToCheck = "0x6f9d95ccb897fb9d74a78a5a53c7a70911b5e354"; // Replace this with the address you want to check

            // Check if the address is present in the array
            const isAddressPresent = datas.some(
                (data) => data.asset_contract.address === addressToCheck
            );

            if (isAddressPresent) {
                console.log(`The address ${addressToCheck} is present in the array.`);
            } else {
                console.log(
                    `The address ${addressToCheck} is not present in the array.`
                );
            }

            res.json(datas);
        } catch (error) {
            console.error("Axios Error: ", error);
            res.status(500).json({ error: "Failed to fetch NFTs" });
        }
    } else if (req.method === "GET") {
        res.status(200).json({ received: true });
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
