const router = require('express').Router();

const res = require('express/lib/response');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('404 error');
});

module.exports = router;