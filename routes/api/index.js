const router = require('express').Router();

router.use('/', require('./apiRoutes.js'));

module.exports = router;