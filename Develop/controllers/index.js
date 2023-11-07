const express = require("express");
const router = express.Router();


const notesRoutes = require("./dbController")
router.use("/api/notes",notesRoutes)

const htmlRoutes = require("./htmlcontroller")
router.use(htmlRoutes)

module.exports = router;

