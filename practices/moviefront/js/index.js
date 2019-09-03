window.onload = function() {
  // 基于准备好的dom，初始化echarts实例
  // 使用刚指定的配置项和数据显示图表。
  getratenumber();

  $(".main #title1").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[0]).show();
    if ($(this).attr("loaded") == 0) {
      getratenumber();
    }
  });
  $(".main #title2").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[1]).show();
    if ($(this).attr("loaded") == 0) {
      getrateline();
    }
  });
  $(".main #title3").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[2]).show();
    if ($(this).attr("loaded") == 0) {
      gettype();
    }
  });
  $(".main #title4").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[3]).show();
    if ($(this).attr("loaded") == 0) {
      getnumber2019();
    }
  });
  $(".main #title5").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[4]).show();
    if ($(this).attr("loaded") == 0) {
      getchinarate();
    }
  });
  $(".main #title6").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[5]).show();
    if ($(this).attr("loaded") == 0) {
      getchinayear();
    }
  });
  $(".main #title7").on("click", function() {
    removecss();
    $(this).addClass("hover");
    $($(".grabox").children()[6]).show();
    if ($(this).attr("loaded") == 0) {
      get2019lt5();
    }
  });
};

removecss = () => {
  for (let i = 0; i < 7; i++) {
    let children = $($(".grabox").children()[i]);
    let button = $($(".title")[i]);
    children.hide();
    button.removeClass("hover");
  }
};

getratenumber = () => {
  var myChart1 = echarts.init(document.getElementById("grawrapperratenumber"));
  myChart1.showLoading();
  $.get("http://localhost:5400/api/rate").done(function(data) {
    myChart1.hideLoading();
    optionratenumber.series[0].data = data.china;
    optionratenumber.series[1].data = data.america;
    optionratenumber.series[2].data = data.britain;
    optionratenumber.series[3].data = data.japan;
    optionratenumber.series[4].data = data.korea;
    optionratenumber.series[5].data = data.france;
    optionratenumber.series[6].data = data.germany;
    optionratenumber.series[7].data = data.italia;
    myChart1.setOption(optionratenumber);
  });
  $("#title1").attr("loaded", 1);
};

getrateline = () => {
  var myChart2 = echarts.init(document.getElementById("grawrapperrateline"));

  myChart2.showLoading();
  $.get("http://localhost:5400/api/rate").done(function(data) {
    myChart2.hideLoading();
    optionrateline.series[0].data = data.china;
    optionrateline.series[1].data = data.america;
    optionrateline.series[2].data = data.britain;
    optionrateline.series[3].data = data.japan;
    optionrateline.series[4].data = data.korea;
    optionrateline.series[5].data = data.france;
    optionrateline.series[6].data = data.germany;
    optionrateline.series[7].data = data.italia;
    myChart2.setOption(optionrateline);
    $("#title2").attr("loaded", 1);
  });
};

gettype = () => {
  var myChart3 = echarts.init(document.getElementById("grawrappertype"));
  myChart3.showLoading();
  $.get("http://localhost:5400/api/type").done(function(data) {
    myChart3.hideLoading();
    optiontype.series[0].data = data.xj;
    optiontype.series[1].data = data.dz;
    optiontype.series[2].data = data.kh;
    optiontype.series[3].data = data.dh;
    optiontype.series[4].data = data.xy;
    optiontype.series[5].data = data.wx;
    optiontype.series[6].data = data.zz;
    optiontype.series[7].data = data.yy;
    optiontype.series[8].data = data.aq;
    optiontype.series[9].data = data.ls;
    myChart3.setOption(optiontype);
    $("#title3").attr("loaded", 1);
  });
};

getnumber2019 = () => {
  var myChart4 = echarts.init(document.getElementById("grawrapper2019"));
  myChart4.showLoading();
  $.get("http://localhost:5400/api/number2019").done(function(data) {
    myChart4.hideLoading();
    option2019.series[0].data = data.map(item => item.count);
    option2019.xAxis.data = data.map(item => item.country);
    myChart4.setOption(option2019);
    $("#title4").attr("loaded", 1);
  });
};

getchinarate = () => {
  var myChart5 = echarts.init(document.getElementById("grawrapperratechina"));
  myChart5.showLoading();
  $.get("http://localhost:5400/api/chinarate").done(function(data) {
    myChart5.hideLoading();
    data.map((item, index) => {
      optionchinarate.series[2].data[index].value = parseInt(item);
    });
    myChart5.setOption(optionchinarate);
    $("#title5").attr("loaded", 1);
  });
};

getchinayear = () => {
  var myChart6 = echarts.init(document.getElementById("grawrappernumberchina"));
  myChart6.showLoading();
  $.get("http://localhost:5400/api/chinayear").done(function(data) {
    myChart6.hideLoading();
    data.map(item => {
      optionchinayear.series[0].data.push(parseInt(item));
      optionchinayear.series[1].data.push(parseInt(item));
    });
    myChart6.setOption(optionchinayear);
    $("#title6").attr("loaded", 1);
  });
};

get2019lt5 = () => {
  var myChart7 = echarts.init(document.getElementById("grawrapperlt5"));
  myChart7.showLoading();
  $.get("http://localhost:5400/api/2019lt5").done(function(data) {
    myChart7.hideLoading();
    data.map(item => {
      option2019lt5.xAxis.data.push(item.title);
      option2019lt5.series[0].data.push(parseFloat(item.rate));
    });
    myChart7.setOption(option2019lt5);
    $("#title7").attr("loaded", 1);
  });
};
