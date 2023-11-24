const router = require('express').Router();
const videoController = require('../controllers/video.controller');
const { videoUpload } = require('../middlewares/videoUpload');

router
    .post('/upload', videoUpload.single('video'), videoController.saveVideo)
    .get('/videos', videoController.getVideos)

module.exports = router;