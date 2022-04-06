const { PhotoInvalidError } = require("../errors/user.js");

function uploadImage(req, res, next) {
    if (!req.file) {
        next([new PhotoInvalidError()]);
    } else {
        const photoUrl = req.protocol + "://" + req.hostname + "/" + req.file.path;
        res.status(200).json({
            photoUrl: photoUrl,
        });
    }
}

module.exports = {
    uploadImage,
};
