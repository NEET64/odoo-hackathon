const { Router } = require("express");
const Crime = require("../model/CrimeReport");

const router = Router();

router.get("/", async (req, res) => {

    const { location = '', date = '', typeOfCrime = '' } = req.query;

    try {
        // Build query conditions based on provided parameters
        const query = {};

        if (location) {
            query.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive regex match
        }

        if (date) {
            // Assuming date is in a specific format and you have a date field in your schema
            query.time = { $gte: new Date(date), $lte: new Date(date + 'T23:59:59.999Z') }; // Match for the entire day
        }

        if (typeOfCrime) {
            query.typeOfCrime = { $regex: new RegExp(typeOfCrime, 'i') }; // Case-insensitive regex match
        }

        const crimes = await Crime.find(query);

        res.status(200).json(crimes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    const { typeOfCrime, location, coordinates, time, description, photourl } = req.body;

    try {
        const newCrime = new Crime({
            typeOfCrime,
            location,
            coordinates,
            time,
            description,
            photourl
        });

        const savedCrime = await newCrime.save();
        res.status(201).json(savedCrime);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {

        const crime = await Crime.findById(id);

        if (!crime) {
            res.status(200).json({ message: "No crimes with this id" });
        }

        res.status(200).json(crime);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.get("/")

module.exports = router;