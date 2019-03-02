
const async = require('async');
const router = express.Router();

router.post('/adddingdan', (req, res) => {
	let food_img = req.body.food_img;
	let name = req.body.name;
	let nums = req.body.nums;
	let price = req.body.price;

	let sql = 'INSERT INTO order0(food_img,food_name, nums,food_price) VALUES (?,?,?,?)';
	mydb.query(sql, [req.body.food_img, req.body.name, req.body.nums, req.body.price], (err, result) => {
		res.send('ok');
	});
});

router.get('/insert_name', (req, res) => {
	let id = req.query.id;
	//	console.log(id);
	// 保存到数据库
	let sql = 'UPDATE order0 SET order_name= "订单"   WHERE id = ?';
	mydb.query(sql, req.query.id, (err, result) => {
		res.redirect(`/order_successin/zongjia?id=${id}`);
	});

});

router.get('/zongjia', (req, res) => {
	//	console.log('0000000000000000000000');
	let id = req.query.id;
	let sql = 'select SUM(food_price) as sum from order0';

	mydb.query(sql, (err, result) => {
		//		console.log(id)
		//		console.log(result[0].sum)
		let id = req.query.id;
		let sql1 = 'UPDATE order0 SET zong_price = ?  WHERE id = ?';

		mydb.query(sql1, [result[0].sum, id], (err, result1) => {
			console.log(result1)
			res.redirect('/order_successin/update_fu');
		});
	});
});

router.get('/update_fu', (req, res) => {
	let sql = 'UPDATE order0 SET if_fu="未付"  WHERE order_name ="订单"';
	mydb.query(sql, req.body.cid_value, (err, result) => {
		//			console.log(result);
		res.redirect('/order_successin/insert_biao');
	});
});

router.get('/insert_biao', (req, res) => {
	let sql = 'insert into order_success(user,order_name,food_img,food_name,nums,food_price,order_table,num,order_time,zong_price,if_ding,if_fu) select user,order_name,food_img,food_name,nums,food_price,order_table,num,order_time,zong_price,if_ding,if_fu from order0';
	mydb.query(sql, (err, result) => {
				res.redirect('/order_successin/del_order0');
//		res.redirect('/order_successin/update_fu');
	});
});

router.get('/del_order0', (req, res) => {
	let sql = 'truncate table order0';
	mydb.query(sql, (err, result) => {
		res.redirect('/order_successin');
	});
});

router.get('/del', (req, res) => {
	let id = req.query.id;
	let sql = 'DELETE FROM order0 WHERE id = ?';

	mydb.query(sql, id, (err, result) => {
		//  	console.log(err);
		if(!err) {
			res.json({
				r: 'success'
			});
		}
	});
});

//---------------------------关于order_success上的操作---------------------
router.get('/', (req, res) => {
	console.log('hahahah');
	let sql = 'SELECT * FROM order_success ;';
	mydb.query(sql, (err, result) => {
		res.render('order/order_success', {
			r: result
		});
	});
});

module.exports = router;