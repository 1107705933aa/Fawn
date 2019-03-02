const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('my/help');
});

module.exports = router;