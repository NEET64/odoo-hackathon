const { Router } = require("express");
const router = Router();

const userRoutes = require("./user.js"); // Import user routes
const crimeRoutes = require("./crime.js");

router.use('/user', userRoutes); // api/user/...
router.use('/crime', crimeRoutes);

module.exports = router;