const router = require("express").Router();
const locationRoutes = require("./locations");
const diveRoutes = require("./dives");
const diverRoutes = require("./divers");

router.use("/locations", locationRoutes);
router.use("/dives", diveRoutes);
router.use("/divers", diverRoutes);

module.exports = router;
