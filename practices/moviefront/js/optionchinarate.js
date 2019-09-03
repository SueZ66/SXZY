optionchinarate = {
  backgroundColor: "#323a5e",
  color: [
    "#EAEA26",
    "#906BF9",
    "#FE5656",
    "#01E17E",
    "#3DD1F9",
    "#FFAD05",
    "#3fbddd",
    "#333cff",
    "#f033ff",
    "#f5ff33"
  ],
  grid: {
    left: -100,
    top: 50,
    bottom: 10,
    right: 10,
    containLabel: true
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  legend: {
    type: "scroll",
    orient: "vartical",
    // x: "right",
    top: "center",
    right: "15",
    // bottom: "0%",
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 16,
    textStyle: {
      color: "#A3E2F4",
      fontSize: 12,
      fontWeight: 0
    },
    data: [
      "0~1.0",
      "1.0~2.0",
      "2.0~3.0",
      "3.0~4.0",
      "4.0~5.0",
      "5.0~6.0",
      "6.0~7.0",
      "7.0~8.0",
      "8.0~9.0",
      "9.0~10.0"
    ]
  },
  polar: {},
  angleAxis: {
    interval: 1,
    type: "category",
    data: [],
    z: 10,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#0B4A6B",
        width: 1,
        type: "solid"
      }
    },
    axisLabel: {
      interval: 0,
      show: true,
      color: "#0B4A6B",
      margin: 8,
      fontSize: 16
    }
  },
  radiusAxis: {
    min: 40,
    max: 120,
    interval: 20,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#0B3E5E",
        width: 1,
        type: "solid"
      }
    },
    axisLabel: {
      formatter: "{value} %",
      show: false,
      padding: [0, 0, 20, 0],
      color: "#0B3E5E",
      fontSize: 16
    },
    splitLine: {
      lineStyle: {
        color: "#0B3E5E",
        width: 2,
        type: "solid"
      }
    }
  },
  calculable: true,
  series: [
    {
      type: "pie",
      radius: ["5%", "10%"],
      hoverAnimation: false,
      labelLine: {
        normal: {
          show: false,
          length: 30,
          length2: 55
        },
        emphasis: {
          show: false
        }
      },
      data: [
        {
          name: "",
          value: 0,
          itemStyle: {
            normal: {
              color: "#0B4A6B"
            }
          }
        }
      ]
    },
    {
      type: "pie",
      radius: ["90%", "95%"],
      hoverAnimation: false,
      labelLine: {
        normal: {
          show: false,
          length: 30,
          length2: 55
        },
        emphasis: {
          show: false
        }
      },
      name: "",
      data: [
        {
          name: "",
          value: 0,
          itemStyle: {
            normal: {
              color: "#0B4A6B"
            }
          }
        }
      ]
    },
    {
      stack: "a",
      type: "pie",
      radius: ["20%", "80%"],
      roseType: "radius",
      zlevel: 10,
      minShowLabelAngle: 0,
      label: {
        normal: {
          show: true,
          formatter: "{b} : {c} ({d}%)",
          textStyle: {
            fontSize: 12
          },
          position: "outside"
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          length: 20,
          length2: 55
        },
        emphasis: {
          show: false
        }
      },
      data: [
        {
          value: 0,
          name: "0~1.0"
        },
        {
          value: 0,
          name: "1.0~2.0"
        },
        {
          value: 0,
          name: "2.0~3.0"
        },
        {
          value: 0,
          name: "3.0~4.0"
        },
        {
          value: 0,
          name: "4.0~5.0"
        },
        {
          value: 0,
          name: "5.0~6.0"
        },
        {
          value: 0,
          name: "6.0~7.0"
        },
        {
          value: 0,
          name: "7.0~8.0"
        },
        {
          value: 0,
          name: "8.0~9.0"
        },
        {
          value: 0,
          name: "9.0~10.0"
        }
      ]
    }
  ]
};
