// import mongoose from 'mongoose';
// const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD);
// const adminUsername = encodeURIComponent(process.env.ADMIN_USER);
// // Connect to MongoDB
// mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@blockiotcluster0.kibk93w.mongodb.net/?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Create a schema for your data
// const EventSchema = new mongoose.Schema({

//     appletName: String,
//     appletDescription: String,
//     ownershipContractAddress: String,
//     actionValue: String,
//     triggerBlockchain: String,
//     triggerType: String,
//     service: String,
//     actionType: String,
// });

// // Create a model based on the schema
// export const EventModel = mongoose.model('EventModel', EventSchema);

import mongoose from 'mongoose';
const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD);
const adminUsername = encodeURIComponent(process.env.ADMIN_USER);
// const connectDB = async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@blockiotcluster0.kibk93w.mongodb.net/?retryWrites=true&w=majority`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//         process.exit(1);
//     }
// };

// export default connectDB;


export async function connectMongoose() {
    // if (mongoose.connection.readyState >= 1) {
    //     return mongoose.connection.asPromise();
    // }
    // return await mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@blockiotcluster0.kibk93w.mongodb.net/?retryWrites=true&w=majority`);
    try {
        await mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@blockiotcluster0.kibk93w.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}


export default connectMongoose;