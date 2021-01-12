const router = require('express').Router();
const providerController = require('../../controllers/providerController');

//matches with "api/customers"
router.route("/")
    .get(providerController.findAll)
    .post(providerController.create);

//Matches with "api/customers/:id"    
router
    .route("/:id")
    .get(providerController.findById)
    .put(providerController.update)
    .delete(providerController.remove);

module.exports = router;