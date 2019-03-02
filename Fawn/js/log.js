
window.onload = function(){
    log(); //管理登录
}

// 管理员登录
function log(){
    let button = document.querySelector('.adminlogin');
    button.onclick = function(){			
        let errNum = 0;
        // 获取输入的信息  并检查
        let username = document.querySelector('input[name="username"]'); //属性选择器
        let u_value  = username.value;
        if(u_value ==  ''){
            username.placeholder = '*必填';
            username.style.color='red !important';
            username.focus();
            errNum++;
        }else{
        	username.value='';
            username.placeholder = '*用户名错误';
        }

        let passwd = document.querySelector('input[name="passwd"]'); //属性选择器
        let p_value  = passwd.value;
        if(p_value ==  ''){
            passwd.placeholder = '*必填';
            passwd.focus();
            errNum++;
        }else{
        	passwd.value='';
            passwd.placeholder = '*密码错误';
        }

        // 把数据提交到服务器  前提：数据填写完整
        if(!errNum){
            //发起ajax请求
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/login/log');
            //设置请求头
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            //发送数据到服务器  ES6里面的字符串模板
            xhr.send(`username=${u_value}&passwd=${p_value}`);

            //状态事件监听并接收响应数据
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status==200){
                    let result = xhr.responseText;
                    //接收的是字符串类型，需要转成对象
                    result = JSON.parse(result); 
                    console.log(result);
                    if(result.r == 'username_not_exist'){
                    	username.value='';
                        username.placeholder = '*账号不存在';
                        username.style.color='red';
                        username.focus();
                    }else if(result.r == 'passwd_err'){
                    	passwd.value='';
                        username.type='text';                   	
                        passwd.placeholder = '*密码错误';
                        username.style.color='red';

                        passwd.focus();
                    }else if(result.r == 'ok'){
                        window.location.href = '/order_successin';
                    }else{
                        alert('未知错误，刷新后操作');
                    }
                }
            }
        }


    }
}