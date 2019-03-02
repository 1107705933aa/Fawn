
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM special  ';

    mydb.query(sql,(err, results)=>{
 
        // 需要把传递的数据放到对象里面
        res.render('special/special',{
        	review:results
        });
    }); 
});




module.exports = router;