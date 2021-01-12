const router = require('express').Router();
const reviewController = require('../../controllers/reviewController');

//matches with "api/customers"
router.route("/")
    .get(reviewController.findAll)
    .post(reviewController.create);

//Matches with "api/customers/:id"    
router
    .route("/:id")
    .get(reviewController.findById)
    .put(reviewController.update)
    .delete(reviewController.remove);

module.exports = router;