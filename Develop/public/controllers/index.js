const express = require("express");
const router = express.Router();

const htmlRoutes = require("./htmlcontroller")
router.use(htmlRoutes)

const htmlRoutes = require("./dbController")
router.use(htmlRoutes)

module.exports = router;