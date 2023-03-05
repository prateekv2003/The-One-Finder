const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const recController = require('../../controllers/rec.controller');

const router = express.Router();

router.route('/rec').get(recController.getRecommendations);
router.route('/swipe').post(recController.swipeUser);

module.exports = router;