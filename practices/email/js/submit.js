//校验注册信息
var oemailAddressInput2 = document.getElementById("emailAddressInput2");
var oregisterPassword2 = document.getElementById("registerPassword2");
var osubmitPassword2 = document.getElementById("submitPassword2");
var ophoneNumber2 = document.getElementById("phoneNumber2");
var myform =document.getElementById("myform");
var oagree = document.getElementById("agree");


//校验邮箱
function checkEmailAddress(Address){
    var str=Address;
//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
    var Expression=/^[A-Za-z]{1}([A-Za-z0-9]|[._]){5,17}$/;
    var objExp=new RegExp(Expression); //创建正则表达式对象
    if(objExp.test(str)==true){ //通过正则表达式验证
        return true;
    }else{
        return false;
    }
}
oemailAddressInput2.addEventListener("blur",function(e){
    // console.log(e.target.value);
    if(checkEmailAddress(e.target.value)){
        console.log("yes")
    }else{
        console.log("no")
    }

});
// oemailAddressInput2.oninput(function (e) {
//
//     //
// })
//校验初始密码
    function checkeRegisterpassword(password) {
    var str=password;
//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
    var Expression=/^(\w){5,15}$/;
    var objExp=new RegExp(Expression); //创建正则表达式对象
    if(objExp.test(str)==true){ //通过正则表达式验证
        return true;
    }else{
        return false;
    }
}
oregisterPassword2.addEventListener("blur",function(e){
        if(checkeRegisterpassword(e.target.value)){
            console.log("yes")
        }else{
            console.log("no")
        }
});

//校验手机密码
function checkePhoneNumber(number) {
    var str=number;
//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
    var Expression=/^(\w){7,12}$/;
    var objExp=new RegExp(Expression); //创建正则表达式对象
    if(objExp.test(str)==true){ //通过正则表达式验证
        return true;
    }else{
        return false;
    }
}
ophoneNumber2.addEventListener("blur",function(e){
    if(checkePhoneNumber(e.target.value)){
        console.log("yes")
    }else{
        console.log("no")
    }
});

//将输入信息存入json文件
// myform.onclick=function submit(){
//     var information= new Array();
//     for(i=0;i<100;i++){
//         information[i]={
//             user[i]
//             password[i];
//         }
//     }
// }

var oregisterNow2 = document.getElementById("registerNow2");  //

oregisterNow2.onclick = function (){   //注册按钮绑定点击事件
    if(oemailAddressInput2.value==""){
        alert("请输入用户名!");oemailAddressInput2.focus();return;
    }
    if(!checkEmailAddress(oemailAddressInput2.value)){
        alert("您输入的用户名不合法!");oemailAddressInput2.focus();return;
    }
    if(oregisterPassword2.value==""){
        alert("请输入密码!");oregisterPassword2.focus();return;
    }
    if(!checkeRegisterpassword(oregisterPassword2.value)){
        alert("您输入的密码不合法!");oregisterPassword2.focus();return;
    }
    if(osubmitPassword2.value==""){
        alert("请再次输入密码!");osubmitPassword2.focus();return;
    }
    if(osubmitPassword2.value!=oregisterPassword2.value){
        alert("您两次输入的密码不一致，请重新输入!");osubmitPassword2.focus();return;
    }
    if(ophoneNumber2.value==""){
        alert("请输入手机号码!");ophoneNumber2.focus();return;
    }
    if(!checkePhoneNumber(ophoneNumber2.value)){
        alert("您输入的手机号码不合法!");ophoneNumber2.focus();return;
    }
    if(!oagree.checked){
        alert("请勾选同意服务条款！");oagree.focus();return;
    }
    // submit();   //输入信息正确后提交数据到json文件
}