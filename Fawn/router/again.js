
const async = require('async');
const router = express.Router();

router.get('/queryy', (req, res) => {
	let food_name = req.query.food_name;
	console.log(food_name);
	//到数据库里面获取原始信息
	let sql = 'SELECT * FROM breakfast_food  union SELECT * FROM dessert_food union SELECT * FROM dinner_food union SELECT * FROM drink union SELECT * FROM fruits union SELECT * FROM lunch_food union SELECT * FROM night_snack union SELECT * FROM snack WHERE food_name = ?';
	mydb.query(sql, food_name, (err, result) => {
//		console.log(err);
		for(let i = 0; i < result.length; i++) {
			if(result[i].food_name == food_name) {
				res.render('vehicle/vehicle', result[i]);
			}
		}
	});
});

module.exports = router;