const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: false,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    bio: String,
    college: String,
    createdAt: Number,
    dob: Number,
    gender: {
      type: String,
      enum: ['M', 'F', 'NB'],
      default: 'M',
    },
    height: Number,
    interests: [String],
    is_habit_drink: {
      type: String,
      enum: ['N', 'S', 'O', 'U'],
      default: 'N',
    },
    is_habit_smoke: {
      type: String,
      enum: ['N', 'S', 'O', 'U'],
      default: 'N',
    },
    is_verified: Boolean,
    mobile: Number,
    status: Boolean,
    what_to_find: {
      type: String,
      enum: ['C', 'R', 'NS', 'F', 'CON'],
      default: 'C',
    },
    who_to_date: {
      type: String,
      enum: ['F', 'M', 'A', 'NB'],
      default: 'F',
    },
    is_subscribed: Boolean,
    age: Number,
    likes_received: Number,
    dislikes_recieved: Number,
    dislikes_done: Number,
    likes_done: Number,
    views: Number,
    matches: Number,
    dislikes_by_likes_ratio_recieved: Number,
    dislikes_by_likes_ratio_done: Number,
    completion_status: Number,
    profile_score: Number,

    preference: {
      minAge: {
        type: Number,
        default: 16,
      },
      maxAge: {
        type: Number,
        default: 90,
      },
      minHeight: {
        type: Number,
        default: 0,
      },
      is_habit_drink: {
        type: String,
        enum: ['N', 'S', 'O', 'U'],
        default: 'N',
      },
      is_habit_smoke: {
        type: String,
        enum: ['N', 'S', 'O', 'U'],
        default: 'N',
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
