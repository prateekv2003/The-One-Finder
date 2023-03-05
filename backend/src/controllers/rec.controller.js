const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { recService } = require('../services');

const getRecommendations = catchAsync(async (req, res) => {
  // console.log(req.query.userId);
  const users = await recService.getRecommendations(
    req.query.userId,
    req.query.who_to_date,
    req.query.what_to_find,
    req.query.is_habit_drink,
    req.query.is_habit_smoke
  );
  res.send(users);
});

const swipeUser = catchAsync(async (req, res) => {
  // console.log(req.query.userId);
  const { userId1, userId2, isLiked } = req.body;
  const x = await recService.likeSwipe(userId1, userId2, isLiked);
  res.send(x);
});
module.exports = {
  getRecommendations,
  swipeUser,
};
