const router = require('express').Router();

// path con retorno directo
router.get('/', (req, res) => 
{ 
    res.json(
        { 
            humidity: Number(req.query.hum) + (Math.random()>.5?1:-1)*Math.random(),
            light: Number(req.query.light) + (Math.random()>.5?1:-1)*0.1*req.query.light*Math.random()
        }
    ); 
}
)

module.exports = router;