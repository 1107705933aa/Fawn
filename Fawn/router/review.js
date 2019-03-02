
const async = require('async');
const router = express.Router();


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM review order by id desc ';

    mydb.query(sql,(err, results)=>{
 
        // 需要把传递的数据放到对象里面
        res.render('review/review',{
        	review:results
        });
    }); 
});

router.get('/del', (req, res) => {
    let id = req.query.id;
    // let sql = 'DELETE FROM class WHERE cid = ?';
    console.log(id);
    let sql = 'DELETE FROM review WHERE id = ?';
    
    mydb.query(sql, id, (err, result)=>{
    	console.log(err);
        if(!err){
            res.json({r:'success'});
        }
    });
});



module.exports = router;