const router = require('express').Router();
const userRoutes = require('./userroutes');
const techRoutes = require('./techroutes');

router.use('/users', userRoutes);
router.use('/tech', techRoutes);

module.exports = router;