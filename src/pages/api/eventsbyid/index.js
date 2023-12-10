import eventModel from "../../../lib/mongo/models/event/index.js"
import connectMongoose from "../../../lib/mongo/index"

// connectDB(); // Connect to the databases
export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { id } = req.query;
            await connectMongoose();

            // Create a new document using the model
            const documents = await eventModel.find({
                _id: id
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
