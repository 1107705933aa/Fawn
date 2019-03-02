
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
	//	console.log(req.query);
	//	let data={};
	//	food_name=req.query.food_name;
	//	let r111 = req.query.r11;
	//	let r222 = req.query.r22;
	//	let r333 = req.query.r33;
	//	let r444 = req.query.r44;
	//	data.food_name=food_name;
	//	let food_name = req.query.food_name;
	//到数据库里面获取原始信息
	let sql = 'SELECT * FROM order0 order by id desc;';
	mydb.query(sql, (err, result) => {
        //		console.log(result);
		//  	data.food_name=result.food_name;
		//  	data.food_img=result.food_img;
		//  	data.food_nums=result.nums;
		//  	data.food_price=result.food_price;
		//  	console.log(data);
		//        [{cid:2, cname:'H51810'}]  result[0] == {cid:2, cname:'H51810'}  
		//      res.render('order/order_success', result[0]);
		res.render('order/order_success', {
			r: result
		});
	});
});


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


router.get('/del', (req, res) => {
    let id = req.query.id;
    // let sql = 'DELETE FROM class WHERE cid = ?';
    console.log(id);
    let sql = 'DELETE FROM order0 WHERE id = ?';
    
    mydb.query(sql, id, (err, result)=>{
    	console.log(err);
        if(!err){
            res.json({r:'success'});
        }
    });
});

module.exports = router;