
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
	
	let sql = 'SELECT * FROM order0 order by id desc;';
	mydb.query(sql, (err, result) => {
		res.render('order/yuding', {
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
//  console.log(id);
    let sql = 'DELETE FROM order0 WHERE id = ?';
    
    mydb.query(sql, id, (err, result)=>{
//  	console.log(err);
        if(!err){
            res.json({r:'success'});
        }
    });
});


router.post('/updatet', (req, res) => {
	let id = req.body.id;
//	console.log(req.body)
    // 保存到数据库
    let sql = 'UPDATE order0 SET nums= 1 WHERE id=?';
    mydb.query(sql, [req.body.id], (err, result)=>{
//      console.log(err);
        res.send('ok');
    });  
});

module.exports = router;