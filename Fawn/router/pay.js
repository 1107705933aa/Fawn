
const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
	let id = req.query.id;
	//	console.log(id);
	let sql = 'SELECT * FROM order_success WHERE id = ? ';
	mydb.query(sql, id, (err, results) => {
		//      console.log(results[0].order_time);
		// 需要把传递的数据放到对象里面
		//      var time =new Date(results[0].order_time); 
		//      console.log(time)
		res.render('order/pay', {
			//第一个results1是属性，results[0]是值
			r: results
		});
	});
});

router.get('/update_zhe', (req, res) => {
	let id = req.query.id;
	let zong_price = req.query.zong_price;
	zong_price = zong_price * 0.9;
	console.log('====' + zong_price);
	let sql = 'UPDATE order_success SET zhe_price= ?   WHERE id = ?';
	mydb.query(sql, [zong_price, id], (err, result) => {
		console.log('====' + id);
		let sql = 'SELECT * FROM order_success WHERE id = ?;';
		mydb.query(sql, id, (err, result) => {
			console.log('====' + result[0].zhe_price);
			console.log('====' + result[0].zong_price);
			if(result[0].zhe_price != result[0].zong_price) {
				let sql = 'UPDATE order_success SET if_hui= "会 员"  WHERE id = ?';
				mydb.query(sql, id, (err, result) => {
					res.redirect('/order_successin');
				});
			}else{
				res.redirect('/order_successin');
			}

		});
	});
});

router.post('/pay', (req, res) => {
	let zhekou_value = req.body.zhekou_value;
	let user_value = req.body.user_value;
	let cid_value = req.body.cid_value;
	console.log(cid_value);

	let sql = 'SELECT * FROM log WHERE username = ? ';
	mydb.query(sql, user_value, (err, results) => {
		let zong_price = results[0].money;
		console.log(results[0].id);
		zong_price = zong_price - zhekou_value;
		console.log(zong_price);

		let sql2 = 'UPDATE log SET money=' + zong_price + 'WHERE id = ?';
		mydb.query(sql2, results[0].id, (err, result) => {
			//			console.log(result);
			let sql3 = 'UPDATE order_success SET if_fu="已付"  WHERE id = ?';
			mydb.query(sql3, req.body.cid_value, (err, result) => {
				console.log("---------------------");
				console.log(result);
				res.redirect('/order_successin');
				//				res.json({r:'ok'});
			});
		});
	});
});

module.exports = router;