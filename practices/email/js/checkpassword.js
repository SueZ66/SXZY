//验证邮箱和密码信息
var oLoginbutton = document.getElementById('loginbutton');
oLoginbutton.onclick = function () {   //将按钮绑定点击事件
    var oaccountName = document.getElementById("accountName").value; //获取用户名标签的值
    var opassword = document.getElementById("password").value;
    if (oaccountName == "") {
        alert("请输入用户名");
    } else if (opassword == "") {
        alert("请输入密码");
    } else if (!checkname(oaccountName)) {
        alert("用户名错误");

    } else if (checkpassword(oaccountName, opassword)) {
        alert("密码错误")
    }
    else {
        alert("登录成功")
    }
}
//数组验证用户名和密码
var user = new Array()
user[0] = "fang"
user[1] = "ke"
user[2] = "qin";

var password = new Array()
password[0] = "fang"
password[1] = "ke"
password[2] = "qin";


function checkname(name) {
    for (var i = 0; i < user.length - 1; i++) {
        if (name == user[i]) {
            return true;
        }
    }
    return false;

}

function checkpassword(name, password) {
    for (var i = 0; i < user.length - 1; i++) {
        if (name == user[i] && password == password[i]) {
            return true;
        }
    }
    return false;
}
