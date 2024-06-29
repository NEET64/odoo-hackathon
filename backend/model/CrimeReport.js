const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    typeOfCrime: { type: String, require: true },
    location: { type: String, require: true },
    coordinates: { latitude: { type: Number, require: true }, longitude: { type: Number, require: true } },
    date: { type: Date, require: true },
    description: { type: String, require: true },
    photourl: { type: String, require: true }
}, { timestamps: true });

const Crime = mongoose.model('Crime', reportSchema);

module.exports = Crime;