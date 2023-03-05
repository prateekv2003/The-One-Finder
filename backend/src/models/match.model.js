const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const matchSchema = mongoose.Schema(
  {
    isMatch: {
      type: Boolean,
      default: false,
    },
    user1: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    user2: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    action_one: {
      type: String,
      enum: ['like', 'dislike'],
    },
    action_two: {
      type: String,
      enum: ['like', 'dislike'],
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
matchSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
