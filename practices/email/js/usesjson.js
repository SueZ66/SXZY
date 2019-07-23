var userNum;
var ologinButton=document.getElementById("loginbutton");
var oaccountName = document.getElementById("accountName");
var opassword = document.getElementById("password");
var LNoBother = document.getElementsByClassName("miandenglu");

var jsonData;
function ajax(url,succ) {
    var aj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")
    aj.open("get", url, true)
    aj.send();
    aj.onreadystatechange = function() {
        if(aj.readyState == 4&&aj.status==200&&succ) {
            succ(aj.responseText)
        }
    }
}
ajax("./json/userinfo.json", function (res) {
    jsonData = eval("(" + res + ")");
});

function ifAccountExist(user) {
    var str=user;
    for(var i=0;i<jsonData.length;i++)
    {
        if(jsonData[i].user==str) {
            userNum = i;
            return true;
        }
    }
    return false;
}
function passwordValidate(pwd) {
    if(jsonData[userNum].password==pwd){
        return true;
    }
    else
        return false;
}

ologinButton.addEventListener("click",function(e){
    if (oaccountName.value == "") {
        alert("请输入账号！");
        return;
    }
    else if (opassword.value == "") {
        alert("请输入密码！");
        return;
    }
    if(ifAccountExist(oaccountName.value));
    else
    {
        alert("账户不存在！");
        return;
    }
    if(passwordValidate(opassword.value));
    else
    {
        alert("密码错误！");
        return;
    }
    alert("登录成功!");

});



//
// ologinButton.onclick=function () {
//     if (oaccountName.value == "") {
//         alert("请输入账号！");
//         return;
//     }
//     else if (opassword.value == "") {
//         alert("请输入密码！");
//         return;
//     }
//     if(ifAccountExist());
//     else
//     {
//         alert("账户不存在！");
//         return;
//     }
//     if(passwordValidate());
//     else
//     {
//         alert("密码错误！");
//         return;
//     }
//     alert("登录成功!");
//
// };
