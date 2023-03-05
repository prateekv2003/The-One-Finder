const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');
const { User, Match } = require('../models');

const getUserById = async (id) => {
  return User.findById(id);
};

const getRecommendations = async (userId, who_to_date, what_to_find = 'R', is_habit_drink = 'N', is_habit_smoke = 'N') => {
  console.log(userId);
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  console.log(user);
  const rec = await User.find({
    gender: who_to_date,
    profile_score: { $gte: user.profile_score - 20, $lte: user.profile_score + 20 },
    $or: [
      { is_habit_drink: is_habit_drink },
      { is_habit_smoke: is_habit_smoke },
      // height: { $gte: prefs.minHeight },
      { what_to_find: what_to_find },
    ],
    _id: { $nin: [...user.liked, ...user.disliked, user.id] },
  });
  // const filtered = rec.filter((ele) => ele.gender === user.who_to_find);
  return rec;
};

const likeSwipe = async (userId1, userId2, isLiked) => {
  console.log(userId1, userId2);
  const user1 = await getUserById(userId1);
  if (!user1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User1 not found');
  }
  const user2 = await getUserById(userId2);
  if (!user2) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User2 not found');
  }
  if (isLiked) {
    user1.liked.push(userId2);
    user1.likes_done = user1.likes_done + 1;
    user2.likes_received = user2.likes_received + 1;
    user2.views = user2.views + 1;
  } else {
    user1.disliked.push(userId2);
    user1.dislikes_done = user1.dislikes_done + 1;
    user2.dislikes_recieved = user2.dislikes_recieved + 1;
    user2.views = user2.views + 1;
  }
  const match = await Match.findOne({ user1: userId2, user2: userId1 });
  if (!match) {
    // no existing match
    const w = await Match.findOne({ user1: userId1, user2: userId2 });
    if (!w) {
      const x = await Match.create({
        isMatch: false,
        user1: userId1,
        user2: userId2,
        action_one: isLiked ? 'like' : 'dislike',
      });
      await user1.save();
      await user2.save();
      await calculateScore(userId1);
      await calculateScore(userId2);
    }
  } else {
    if (!match.isMatch) {
      if (isLiked) {
        match.action_two = 'like';
      } else {
        match.action_two = 'dislike';
      }
      if (match.action_one === 'like' && match.action_two === 'like') {
        match.isMatch = true;
        user1.matches = user1.matches + 1;
        user2.matches = user2.matches + 1;
      }
      await user1.save();
      await user2.save();
      await match.save();
      await calculateScore(userId1);
      await calculateScore(userId2);
    }
  }
  return 'success';
};

const getScore = (verification, completeness, matches, subscription, ratio_done, ratio_received, views) => {
  const res =
    verification * 0.2 +
    subscription * 0.1 +
    0.2 * completeness +
    0.1 * matches +
    0.1 * ratio_done +
    0.1 * ratio_received +
    0.2 * views;
  return res;
};

const calculateScore = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const ratio_done = user.likes_done === 0 ? 0 : user.dislikes_done / user.likes_done;
  const ratio_recieved = user.likes_received === 0 ? 0 : user.dislikes_recieved / user.likes_received;
  const score = getScore(
    user.isVerified ? 1 : 0,
    user.completion_status,
    user.matches,
    user.isSubscribed ? 1 : 0,
    ratio_done,
    ratio_recieved,
    user.views
  );
  user.profile_score = 25 + score;
  console.log(score);
  console.log('received');
  await user.save();
};

module.exports = {
  getRecommendations,
  likeSwipe,
};
