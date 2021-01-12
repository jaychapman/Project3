const router = require("express").Router();
const customerRoutes = require("./customers");
const providerRoutes = require("./providers");
const reviewRoutes = require("./reviews");

// Customer routes
router.use("/customers", customerRoutes);
// Provider routes
router.use("/providers", providerRoutes);
// Review routes
router.use("/reviews", reviewRoutes)

module.exports = router;