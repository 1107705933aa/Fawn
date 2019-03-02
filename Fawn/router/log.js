const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('log/log');
});

router.get('/register', (req, res) => {
	res.render('log/register');
});

router.get('/forget', (req, res) => {
	res.render('log/forget');
});

// 登录数据验证
router.post('/log', (req, res) => {
	let data = req.body;
	let sql = 'SELECT * FROM log WHERE username = ?';
	// 只有一个占位符的时候，可以不用数组
	mydb.query(sql, [data.username], (err, result) => {
		if(err) {
			console.log(err);
			res.send('err');
			return;
		}
		console.log(result);
		console.log(result == []);
		// 判断账号是否存在
		if(!result.length) {
			res.json({
				r: 'username_not_exist'
			});
			return;
		}
		// 判断密码是否正确
		if(result[0].pwd != data.passwd) {
			res.json({
				r: 'passwd_err'
			});
			return;
		}
		res.json({
			r: 'ok'
		});
	});
});

module.exports = router;