//服务器
const async = require('async');
const router = express.Router();

//数据接收：文本和文件的数据流
// let upload = multer({ dest: 'uploads/' });
let storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads');
	},
	filename: function(req, file, cb) {
		cb(null,
			Date.now() + '_' +
			Math.random().toString().substr(2, 6) + '.' +
			file.originalname.split('.').pop()
		)
	}
})

let upload = multer({
	storage: storage
})

router.get('/', (req, res) => {
	let sql = 'SELECT * FROM review ;';
	mydb.query(sql, (err, results) => {
		// console.log(results)
		// 需要把传递的数据放到对象里面
		res.render('review/freview', {
			review: results
		});
	});
});

router.post('/add', (req, res) => {
	console.log('----6666')
	let d = req.body;
	//	console.log(d)
//	let r = d.myhead.replace("/fakepath","../../uploads");

	let sql = 'INSERT INTO review(head, name, content,branch) VALUES (?,?,?,?)';
	mydb.query(sql, [d.myhead, d.wangname,d.view, d.star ], (err, result) => {
		console.log(d.myhead);
		console.log(err);
		res.json({
			r: 'ok'
		});
	});
});

//在图片路径的前面加上域名
let host = 'http://localhost:8888/';
router.post('/uploads', upload.single('head'), (req, res) => {
	//接收上传上来的文件
	//	console.log(req.file);
	console.log(req.file.path + '------');
	let path = req.file.path;

	console.log(host + req.file.destination + '/' + req.file.filename);
	//  res.send(host + req.file.destination + '/' +  req.file.filename);
	res.json({
		r: "ok",
		path: path
	})
});

module.exports = router;