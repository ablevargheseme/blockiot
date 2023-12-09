import eventModel from "../../../lib/mongo/models/event/index.js"
import connectMongoose from "../../../lib/mongo/index"

// connectDB(); // Connect to the databases
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Extract data from the request body
            const {
                address,
                appletName,
                appletDescription,
                ownershipContractAddress,
                actionValue,
                periodOfActivity,
                triggerBlockchain,
                triggerType,
                service,
                actionType,
            } = req.body;
            console.log("kk", req.body)

            await connectMongoose();

            // Create a new document using the model
            const newDocument = await eventModel.create({
                address,
                appletName,
                appletDescription,
                ownershipContractAddress,
                actionValue,
                triggerBlockchain: triggerBlockchain[0],
                triggerType: triggerType[0],
                service: service[0],
                actionType: actionType[0]
            });

            // Save the new document to the database
            // await newDocument.create();
            console.log("documentid", newDocument._id);
            // Respond with success message
            res.status(201).json({ documentid: newDocument._id });
        } catch (error) {
            // Handle any errors
            console.log("error", error)
            res.status(500).json({ error: "Failed to create document" });
        }
    }
    else if (req.method === "GET") {
        try {
            const { address } = req.query;
            await connectMongoose();

            // Create a new document using the model
            const documents = await eventModel.find({

            });

            // Save the new document to the database
            // await newDocument.create();

            // Respond with success message
            res.status(201).json({ documents: documents });
        } catch (error) {
            // Handle any errors
            console.log("error", error)
            res.status(500).json({ error: "Failed to create document" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
