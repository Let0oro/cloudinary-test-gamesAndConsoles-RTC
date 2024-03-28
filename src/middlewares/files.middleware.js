const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const gameStorage = new CloudinaryStorage({
    cloudinary,
    folder: "Games",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
});

const consoleStorage = new CloudinaryStorage({
    cloudinary,
    folder: "Consoles",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
});


const gameUpload = multer({gameStorage});
const consoleUpload = multer({consoleStorage});

const deleteImgCloudinary = imgUrl => {
    const imgSplited = imgUrl.split('/');
    const nameSplited = imgSplited.at(-1).split(".");
    const folderSplited = imgSplited.at(-2);
    const public_id = `${folderSplited}/${nameSplited[0]}`;

    cloudinary.uploader.destroy(public_id, () => {
        console.log("Image delete in cloudinary");
    })
};

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        api_key: process.env.CLOUDINARY_API_KEY
    })
}

module.exports = { gameUpload, consoleUpload, deleteImgCloudinary, configCloudinary }
