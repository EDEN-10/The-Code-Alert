// const usersComments = require("../../models/usersComments");

const router = requier('express').Router();
const usersRoutes = requier('./usersRoutes');
const newsRoutes = requier9('./newsdata-routes');
const usercommentRoutes = requier('./userComment');

router.use('/users', userRoutes);
router.use('/news', newsData-routers);
router.use('/usersComment', usersComment);



module.exports = router;