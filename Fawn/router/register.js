
const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('log/register_three');
});

router.post('/addlog', (req, res) => {
//	console.log(req.body.name);
//	console.log(req.body.pwd);
    // 保存到数据库
    let sql = 'INSERT INTO log(username, pwd,if_hui) VALUES (?,?,?)';
    mydb.query(sql, [req.body.name,req.body.pwd,req.body.banli_value],(err, result)=>{   	
        res.send('ok');
    });    
});


module.exports = router;