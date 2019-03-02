

const async = require('async');
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'SELECT * FROM order_success limte 1 ';
    mydb.query(sql,(err, results)=>{
        console.log(results);
        // 需要把传递的数据放到对象里面
        res.render('food/breakfast',{
        	//第一个results1是属性，results[0]是值
        	m:results	
        });
    }); 
});


module.exports = router;