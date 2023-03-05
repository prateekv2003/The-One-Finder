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
  const maleImages = new Array(
    'https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1597810743069-cf40e2452aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1571868200937-54dd464381cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1474293507615-951863a0f942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1621353269062-6aa0165576f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1549045337-967927d923c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTd8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjF8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60'
  );

  const femaleImage = new Array(
    'https://images.unsplash.com/photo-1622496030981-e8377ce1ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1622495966027-e0173192c728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1622495966087-4b72dd849db7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3x6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1578078911787-368f3ec8545f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3x6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1483381616603-8dde934da56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjN8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1533638842865-579068d17afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjV8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60'
  );
  // users.forEach((ele) => {
  //   if (ele.gender === 'M') {
  //     ele.userImage = maleImages[ele.userId % 7];
  //   } else {
  //     ele.userImage = femaleImage[ele.userId % 7];
  //   }
  // };
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
