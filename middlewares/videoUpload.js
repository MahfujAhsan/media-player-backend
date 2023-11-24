const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// destination dir
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'video') {
            const rootDir = path.dirname(require.main.filename);
            cb(null, path.join(rootDir, 'public/').concat('videos'))
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1]
        const id = uuidv4();
        cb(null, "video_" + id + '.' + videoExt)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true)
    } else {
        cb(null, true)
    }
}

exports.videoUpload = multer({ storage, fileFilter })
