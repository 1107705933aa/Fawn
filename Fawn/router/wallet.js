const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {

	let sql = 'SELECT user FROM order_success limit 1';
	mydb.query(sql, (err, results) => {
//		console.log(results[0].user);
		let sql = 'SELECT * FROM log WHERE username=? ';
		mydb.query(sql,results[0].user,(err, results) => {
			// 需要把传递的数据放到对象里面
//			console.log(results[0].money);
			res.render('my/wallet', {
				//第一个results1是属性，results[0]是值
				r: results
			});
		});
	});

});

module.exports = router;