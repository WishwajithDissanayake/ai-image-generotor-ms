const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    BlobSASPermissions,
    generatedBlobSASQueryParameters,
} = require("@azure/storage-blob");

const accountName = process.env.AccountName;
const accountKey = process.env.AccountKey;
const containerName = 'images';

const sharedKeyCredential = new StorageSharedKeyCredential(
    accountName,
    accountKey
)