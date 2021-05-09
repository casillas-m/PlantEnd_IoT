const router = require('express').Router();

// path con retorno directo
router.get('/', (req, res) => 
{ 
    res.json(
        { 
            author: "MMM y Martin"
        }
        ); 
}
)

module.exports = router;