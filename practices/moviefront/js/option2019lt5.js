var option2019lt5 = {
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
    data: ["片名"],
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
    data: [],
    axisLabel: {
      inside: true,
      textStyle: {
        color: "#fff",
        textAlign: "center"
      },
      rotate: 90
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10,
    name: "片名",
    nameTextStyle: "end"
  },

  yAxis: {
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white"
      }
    },
    name: "评分",
    nameTextStyle: "end",
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
      start: 30,
      end: 70,
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
      name: "片名",
      type: "bar",
      barWidth: "30%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#248ff7"
            },
            {
              offset: 1,
              color: "#6851f1"
            }
          ]),
          barBorderRadius: 11
        }
      },
      data: []
    }
  ]
};
