import { ApplicationError } from "@/lib/errors/ApplicationError";
import { PINDOWN_CONTRACT } from "@/web3/contracts/pindown";
import { PublicClient } from "wagmi";
import { GetWalletClientResult, waitForTransaction } from "wagmi/actions";

export class PindownContractService {
  static async createChildren({
    walletClient,
    publicClient,
    contractUuid,
    certificateIpfsUrl,
    transferWallets,
    onWalletConfirmationComplete,
  }: {
    walletClient: GetWalletClientResult;
    publicClient: PublicClient;
    contractUuid: string;
    certificateIpfsUrl: string;
    transferWallets: string[];
    onWalletConfirmationComplete: () => void;
  }) {
    const hash = await walletClient!
      .writeContract({
        address: PINDOWN_CONTRACT.address,
        abi: PINDOWN_CONTRACT.abi,
        functionName: "createChildren",
        args: [
          contractUuid,
          certificateIpfsUrl,
          "Pindown Certificate",
          "PD",
          transferWallets,
        ],
      })
      .catch((e) => {
        throw new ApplicationError("Transaction confirmation failed");
      });

    onWalletConfirmationComplete();

    const transactionReciept = await waitForTransaction({
      chainId: walletClient!.chain.id,
      hash,
    });
    console.log("Transaction receipt", transactionReciept);

    const certificateContractAddress = (await publicClient.readContract({
      address: PINDOWN_CONTRACT.address,
      abi: PINDOWN_CONTRACT.abi,
      functionName: "creativeAddress",
      args: [contractUuid],
    })) as string;

    return certificateContractAddress;
  }
}
