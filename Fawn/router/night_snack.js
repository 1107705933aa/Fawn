
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM night_snack';

    mydb.query(sql,(err, results)=>{
        console.log(results);
        // 需要把传递的数据放到对象里面
        res.render('food/night_snack',{
        	//第一个results1是属性，results[0]是值
        	r:results
        });
    });
});

router.get('/query', (req ,res)=>{
    let id = req.query.id;
    //到数据库里面获取原始信息
    let sql = 'SELECT * FROM night_snack WHERE id = ?';
    mydb.query(sql, id, (err, result)=>{
        //[{cid:2, cname:'H51810'}]  result[0] == {cid:2, cname:'H51810'}  
        res.render('vehicle/vehicle', result[0]);
    });
});


module.exports = router;