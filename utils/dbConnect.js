const mongoose = require('mongoose');

exports.dbConnection = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('DB connection established!')
        })
        .catch((error) => {
            console.log(error);
        })
}