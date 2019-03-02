
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('vehicle/vehicle');
});


module.exports = router;