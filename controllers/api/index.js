const router = require('express').Router();
const userRoutes = require('./userroutes');
const techRoutes = require('./techroutes');

router.use('/users', userroutes);
router.use('/tech', techroutes);

module.exports = router;