const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log(`NOT LOGGGGGGGGGGGGGGEEEEEEEEDDDD IN`)
    res.redirect('/login');
  } else {
    console.log(`+++++++++++++++++++++++++++++++++++
    ++++++++
    +++
    ++  REDIRECT
    +++++++++++++++++++++++++++++++++++++++++++++`)
    next();
  }
};

module.exports = withAuth;
