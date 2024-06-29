const { Router } = require("express");
const router = Router();

const userRoutes = require("./user.js"); // Import user routes

router.use('/user', userRoutes); // api/user/...

module.exports = router;