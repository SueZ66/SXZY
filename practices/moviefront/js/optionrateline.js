// 指定图表的配置项和数据
var optionrateline = {
  backgroundColor: "#323a5e",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: "2%",
    right: "6%",
    bottom: "14%",
    top: "16%",
    containLabel: true
  },
  legend: {
    data: ["中国", "美国", "英国", "日本", "韩国", "法国", "德国", "意大利"],
    right: 10,
    top: 12,
    textStyle: {
      color: "#fff"
    },
    itemWidth: 12,
    itemHeight: 10
    // itemGap: 35
  },
  xAxis: {
    type: "category",
    data: ["0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"],
    axisLine: {
      lineStyle: {
        color: "white"
      }
    },
    name: "评分",
    nameTextStyle: "end",
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: "Microsoft YaHei"
      }
    }
  },

  yAxis: {
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white"
      }
    },
    name: "数量",
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.3)"
      }
    },
    axisLabel: {}
  },
  dataZoom: [
    {
      show: true,
      height: 12,
      xAxisIndex: [0],
      bottom: "8%",
      start: 10,
      end: 90,
      handleIcon:
        "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
      handleSize: "110%",
      handleStyle: {
        color: "#d3dee5"
      },
      textStyle: {
        color: "#fff"
      },
      borderColor: "#90979c"
    },
    {
      type: "inside",
      show: true,
      height: 15,
      start: 1,
      end: 35
    }
  ],
  series: [
    {
      name: "中国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#ff3333"
        }
      },
      data: []
    },
    {
      name: "美国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#ff6d33"
        }
      },
      data: []
    },
    {
      name: "英国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#fff133"
        }
      },
      data: []
    },
    {
      name: "日本",
      type: "line",
      itemStyle: {
        normal: {
          color: "#a6ff33"
        }
      },
      data: []
    },
    {
      name: "韩国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#33ff86"
        }
      },
      data: []
    },
    {
      name: "法国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#33ebff"
        }
      },
      data: []
    },
    {
      name: "德国",
      type: "line",
      itemStyle: {
        normal: {
          color: "#334bff"
        }
      },
      data: []
    },
    {
      name: "意大利",
      type: "line",
      itemStyle: {
        normal: {
          color: "#c533ff"
        }
      },
      data: []
    }
  ]
};
