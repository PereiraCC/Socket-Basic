const { Router, response } = require('express');

const router = Router();

router.get('/', (req, res = response) => {
    res.json({
        msg: 'Get Prueba'
    });
});

module.exports = router;