const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const axios = require('axios');

const createChannel = catchAsync(async (user1, user2) => {
  const url = `https://api-${process.env.SENDBIRD_API_KEY}.sendbird.com/v3/group_channels`;
  console.log(url);
  const res = await axios.post(url, {
    body: {
      users: [user1, user2],
      is_distinct: true,
    },
  });
});

module.exports = {
  createChannel,
};
