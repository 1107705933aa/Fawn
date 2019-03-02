
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM dessert_food ';

    mydb.query(sql,(err, results)=>{
        console.log(results);
        // 需要把传递的数据放到对象里面
        res.render('home',{
        });
    }); 
});

router.get('/f', (req, res) => {
    let sql = 'SELECT * FROM dessert_food ';

    mydb.query(sql,(err, results)=>{
        console.log(results);
        // 需要把传递的数据放到对象里面
        res.render('fhome',{
        	//第一个results1是属性，results[0]是值
        	r:results	
        });
    }); 
});




module.exports = router;