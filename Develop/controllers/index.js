const express = require("express");
const router = express.Router();

const htmlRoutes = require("./htmlcontroller")
router.use(htmlRoutes)

const notesRoutes = require("./dbController")
router.use("/api/notes",notesRoutes)

module.exports = router;