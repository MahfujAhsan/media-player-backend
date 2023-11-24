const Video = require('../models/videoModel');

exports.saveVideo = async (req, res, next) => {
    const {title, description} = req.body;
    const videoPath = req.file.path;
    const video = new Video({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    });
    try {
        await video.save()
        res.status(200).json({
            message: 'Video Uploaded Successfully!',
            video
        })
    } catch (error) {
        res.status(400).json({
            message: 'Video Upload Failed!',
            error
        })
    }
};

exports.getVideos = async (req, res, next) => {
    try {
        const videos = await Video.find({});
        res.status(200).json({
            videos
        })
    } catch (error) {
        res.status(400).json({
            message: 'No Video Found!',
            error
        })
    }
}