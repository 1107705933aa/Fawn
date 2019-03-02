const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
	let sql = 'SELECT * FROM order_success ;';
	mydb.query(sql, (err, result) => {
//		console.log(result[0].user)
		let sql = 'SELECT * FROM log WHERE username=?';
		mydb.query(sql, result[0].user, (err, results) => {
			res.render('my/member', {
				r: result,
				d:results
			});
		});
	});
});

router.post('/banli', (req, res) => {
	let user_value = req.body.user_value;
	console.log('-------'+user_value)
	//	console.log(id);
	// 保存到数据库
	let sql = 'UPDATE log SET if_hui= "会 员" WHERE username = ?';
	mydb.query(sql, user_value, (err, result) => {
		res.redirect(`/memberin/fuqian?user_value=${user_value}`);
	});
});

router.get('/fuqian', (req, res) => {
	let user_value = req.query.user_value;
	console.log(user_value);

	let sql = 'SELECT * FROM log WHERE username = ? ';
	mydb.query(sql, user_value, (err, results) => {
		let zong_price = results[0].money;
		console.log(results[0].id);
		zong_price = zong_price - 30;
		console.log(zong_price);
		let sql2 = 'UPDATE log SET money='+zong_price+'WHERE username = ? ';
		mydb.query(sql2, user_value, (err, result) => {
			res.send('ok');
		});
	});
});

module.exports = router;