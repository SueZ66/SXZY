// 指定图表的配置项和数据
var optionratenumber = {
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
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff6d33"
            },
            {
              offset: 1,
              color: "#ff3333"
            }
          ]),
          barBorderRadius: 12
        }
      },
      data: []
    },
    {
      name: "美国",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#fff133"
            },
            {
              offset: 1,
              color: "#ff6d33"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "英国",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#a6ff33"
            },
            {
              offset: 1,
              color: "#fff133"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "日本",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#33ff86"
            },
            {
              offset: 1,
              color: "#a6ff33"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "韩国",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#33ebff"
            },
            {
              offset: 1,
              color: "#33ff86"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "法国",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#334bff"
            },
            {
              offset: 1,
              color: "#33ebff"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "德国",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#c533ff"
            },
            {
              offset: 1,
              color: "#334bff"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "意大利",
      type: "bar",
      barWidth: "9%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff33e4"
            },
            {
              offset: 1,
              color: "#c533ff"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    }
  ]
};
