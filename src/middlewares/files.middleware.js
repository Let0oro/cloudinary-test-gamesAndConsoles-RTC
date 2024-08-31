const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const showImage = (req, res, next) => {
    console.log("middleware")
    console.log(req.body)
    console.log(req.file)
    next()
}

function saveCloudinaryStorage (folderName, formatsAllowedArr = ["jpg", "png", "jpeg", "gif"]) {
    if (!folderName || !formatsAllowedArr.length) throw new Error("Folder name or formats array is required");
    return new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folderName,
            allowedFormats: formatsAllowedArr,
        }
    });
}

const teamStorage = saveCloudinaryStorage("Teams");
const playerStorage = saveCloudinaryStorage("Players");

const teamUpload = multer({ storage: teamStorage });
const playerUpload = multer({ storage: playerStorage });

const deleteImgCloudinary = imgUrl => {
    const imgSplited = imgUrl.split('/');
    const nameSplited = imgSplited.at(-1).split(".");
    const folderSplited = imgSplited.at(-2);
    const public_id = `${folderSplited}/${nameSplited[0]}`;

    cloudinary.uploader.destroy(public_id, () => {
        console.log("Image delete in cloudinary");
    });
};

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        api_key: process.env.CLOUDINARY_API_KEY
    });
};

module.exports = { showImage, teamUpload, playerUpload, deleteImgCloudinary, configCloudinary };
