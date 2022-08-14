const router = require('express').Router();

router.use('/api', require('./api'));
router.use('/', require('./homeroutes.js'));

module.exports = router;