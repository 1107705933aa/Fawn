
const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('my/back');
});

router.post('/insert_view', (req, res) => {
	console.log(req.body.view);
	console.log(req.body.phone);
    // 保存到数据库
    let sql = 'INSERT INTO backi(view, phone) VALUES (?,?)';
    mydb.query(sql, [req.body.view,req.body.phone],(err, result)=>{   	
        res.send('ok');
    });    
});


module.exports = router;