var optiontype = {
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
    data: [
      "喜剧",
      "动作",
      "科幻",
      "动画",
      "悬疑",
      "武侠",
      "战争",
      "音乐",
      "爱情",
      "历史"
    ],
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
    data: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ],
    axisLine: {
      lineStyle: {
        color: "white"
      }
    },
    name: "年份",
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
      name: "喜剧",
      type: "bar",
      barWidth: "7%",
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
      name: "动作",
      type: "bar",
      barWidth: "7%",
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
      name: "科幻",
      type: "bar",
      barWidth: "7%",
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
      name: "动画",
      type: "bar",
      barWidth: "7%",
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
      name: "悬疑",
      type: "bar",
      barWidth: "7%",
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
      name: "武侠",
      type: "bar",
      barWidth: "7%",
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
      name: "战争",
      type: "bar",
      barWidth: "7%",
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
      name: "音乐",
      type: "bar",
      barWidth: "7%",
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
    },
    {
      name: "爱情",
      type: "bar",
      barWidth: "7%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff3394"
            },
            {
              offset: 1,
              color: "#f3cddf"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    },
    {
      name: "历史",
      type: "bar",
      barWidth: "7%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#33ff37"
            },
            {
              offset: 1,
              color: "#feff33"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    }
  ]
};
