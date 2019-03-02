
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('my');
});

router.get('/f', (req, res) => {
    res.render('fmy');
});




module.exports = router;