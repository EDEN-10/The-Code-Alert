const router = require('express').Router();
const apiRoutes = require('./APIcontroller');
const homepageRoutes = require('./homepageRoutes');
router.use('/',homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router; 