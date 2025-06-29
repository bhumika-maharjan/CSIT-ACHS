const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    // cloud_name: 'dsuwxvvkq',
    // api_key: '679647691334928',
    // api_secret: 'Z1uD3_-b9nJTSOy8N6W5bozTTW4'

    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new multer.memoryStorage();

const upload = multer({ 
    storage: storage,
    // Add file size limit if needed
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
  });

async function imageUploadUtil(file) {
    
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'  
    
    });
    

    return result;
}

// const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };