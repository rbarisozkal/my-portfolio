const router = require('express').Router();
module.exports = router;

//when route is hit the resume is downloaded
//aka /api/resume
router.get('/', (req, res, next) => {
  try {
    const file = `${__dirname}/resume/Baris Ozkal CV.pdf`;
    res.download(file);
    console.log('here');
  } catch (err) {
    console.log(err);
  }
});