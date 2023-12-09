


// // Import the NFTStorage class and File constructor from the 'nft.storage' package
// import { NFTStorage, File } from 'nft.storage'

// // The 'mime' npm package helps us set the correct file type on our File objects
// import mime from 'mime'

// // // The 'fs' builtin module on Node.js provides access to the file system
// // import fs from 'fs'

// // // The 'path' module provides helpers for manipulating filesystem paths
// // import path from 'path'

// // Paste your NFT.Storage API key into the quotes:
// const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVERTEyNEYxN0YyZDg3MWIwNmZhMmUwODM5MDIwMzg3MTkzNzhlQzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3ODE2ODc1MTMwNywibmFtZSI6ImFkbWludCJ9.N3Z1N27CrSRkmmqBZsTdcdaBv_XkFzUxJC89DfZXTxU'
// //const storage = new NFTStorage({ token: NFT_STORAGE_KEY });
// // const fileFromPath = async (filePath) => {
// //     const content = await fs.promises.readFile(filePath)
// //     const type = mime.getType(filePath)
// //     return new File([content], path.basename(filePath), { type })
// // }
// const fileFromPath = async (filePath) => {
//     const response = await fetch(filePath);
//     const content = await response.blob();
//     const type = content.type;

//     return new File([content], "bhh", { type });
// };

// const storeNFT = async (image, name, description) => {
//     //     let metadata = await storage.store({
//     //         ...image,
//     //         image: image.image && new File([image.image], `${image.name}.jpg`, { type: 'image/jpg' }),
//     //         description: `${image.name}'s metadata`,
//     //     });
//     //     return metadata;
//     // const imageFile = await fileFromPath(image)
//     // console.log('ll', imageFile);
//     const blob = new Blob([image], { type: image.type });

//     // create a new NFTStorage client using our API key
//     const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

//     // call client.store, passing in the image & metadata
//     return await nftstorage.store({
//         blob,
//         name,
//         description,
//     })
// }

// export const mintNft = async (image, name, description) => {
//     const response = await storeNFT(image, name, description);
//     console.log("mint nft response", response)
// }

// Import required modules from nft.storage
import { NFTStorage, File } from 'nft.storage';
import * as React from "react";
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import applet_abi from "../../contracts/abi.js"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVERTEyNEYxN0YyZDg3MWIwNmZhMmUwODM5MDIwMzg3MTkzNzhlQzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3ODE2ODc1MTMwNywibmFtZSI6ImFkbWludCJ9.N3Z1N27CrSRkmmqBZsTdcdaBv_XkFzUxJC89DfZXTxU";

// Initialize the NFTStorage client
const storage = new NFTStorage({ token: API_KEY });

export const uploadToStorage = async (pet, name, description) => {


    let metadata = await storage.store({
        ...pet,
        image: pet && new File([pet], "image.jpg", { type: 'image/jpg' }),
        name: name, // Name for the NFT
        description: description,
    });
    console.log("metadata", metadata);
    // If all goes well, return the metadata.
    return metadata;
}
