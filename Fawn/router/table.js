const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
	//到数据库里面获取原始信息
	let id = req.query.id;
	let sql = 'SELECT * FROM `table` ';
	mydb.query(sql, (err, results) => {
		//		console.log(err);
		// 需要把传递的数据放到对象里面
		res.render('table/table', {
			//第一个results1是属性，results[0]是值
			t: results,
			id: id
		});
	});
});

router.post('/update', (req, res) => {
	let id = req.body.id;
	// 保存到数据库
	let sql = 'UPDATE order0 SET user=?, order_table= ?, num= ?, order_time=? WHERE id = ?';
	//	console.log(req.body.id);
	mydb.query(sql, [req.body.user,req.body.zhuohao, req.body.renshu, req.body.riqi, req.body.id], (err, result) => {
		//      console.log(result);
		let sql = 'UPDATE order0 SET if_ding= "1"   WHERE id = ?';
		mydb.query(sql, req.body.id, (err, result) => {
			//      console.log(err);
			res.send('ok');
		});
	});
});

//router.post('/insert_ifding', (req, res) => {
//	let id = req.query.id;
//		console.log('----------'+id);
//	// 保存到数据库
//	
//});

//router.post('/updateifding', (req, res) => {
//	let id = req.body.id;
////	console.log(req.body)
//	// 保存到数据库
//	
//
//});

//router.post('/query_ding', (req, res) => {
//	let table_value = req.body.table_value;
//	let sql = 'SELECT * FROM order0 ';
//	mydb.query(sql, (err, result) => {
//
//		res.json(result.if_ding);
//		      console.log('========'+result);
//	});
//});

router.post('/bianse', (req, res) => {
	let arr = req.body.arr;
//	console.log("------------"+arr[5]);
		
		let sql = 'SELECT * FROM order_success WHERE order_table in(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
		mydb.query(sql, arr, (err, result) => {
			console.log(result);
			res.json(result);
		});

});

module.exports = router;