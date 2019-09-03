var express = require("express");
var router = express.Router();
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movie");

const countrys = [
  { en: "china", cn: "中国" },
  { en: "america", cn: "美国" },
  { en: "britain", cn: "英国" },
  { en: "japan", cn: "日本" },
  { en: "france", cn: "法国" },
  { en: "korea", cn: "韩国" },
  { en: "germany", cn: "德国" },
  { en: "italia", cn: "意大利" },
  { en: "canada", cn: "加拿大" },
  { en: "australia", cn: "澳大利亚" },
  { en: "spain", cn: "西班牙" },
  { en: "switzerland", cn: "瑞士" },
  { en: "brazil", cn: "巴西" },
  { en: "thailand", cn: "泰国" },
  { en: "india", cn: "印度" },
  { en: "danmark", cn: "丹麦" },
  { en: "poland", cn: "波兰" },
  { en: "russia", cn: "俄罗斯" }
];
const types = [
  { en: "xj", cn: "喜剧" },
  { en: "dz", cn: "动作" },
  { en: "kh", cn: "科幻" },
  { en: "dh", cn: "动画" },
  { en: "xy", cn: "悬疑" },
  { en: "wx", cn: "武侠" },
  { en: "zz", cn: "战争" },
  { en: "yy", cn: "音乐" },
  { en: "aq", cn: "爱情" },
  { en: "ls", cn: "历史" }
];

var moviedb = mongoose.connection;
moviedb.on("error", console.error.bind(console, "connection error:"));
moviedb.once("open", function() {
  // we're connected!
});

// schema类型
var Schema = mongoose.Schema;
var movieitems = new Schema({
  title: String,
  rate: String,
  region: String,
  types: Array,
  id: String,
  year: String
});
router.use(cors());
/* GET users listing. */

router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/rate", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  var sendData = {
    china: [],
    america: [],
    britain: [],
    japan: [],
    france: [],
    korea: [],
    germany: [],
    italia: []
  };
  var j = 0;
  findRate = () => {
    new Promise(function(resolve, reject) {
      let i = 0;
      getascountry = () => {
        movieinfo.count(
          {
            rate: { $gt: i, $lt: i + 1 },
            region: { $regex: `^${countrys[j].cn}` }
          },
          (err, data) => {
            if (i !== 9) {
              i++;
              sendData[countrys[j].en].push(parseInt(data));
              getascountry();
            } else {
              sendData[countrys[j].en].push(parseInt(data));
              resolve();
            }
          }
        );
      };
      getascountry();
    }).then(() => {
      if (j !== 7) {
        j++;
        findRate();
      } else {
        res.send(sendData);
      }
    });
  };
  findRate();
});

router.get("/type", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  var sendData = {
    xj: [],
    dz: [],
    kh: [],
    dh: [],
    xy: [],
    wx: [],
    zz: [],
    yy: [],
    aq: [],
    ls: []
  };
  var j = 0;
  findType = () => {
    new Promise(function(resolve, reject) {
      let i = 0;
      getasyear = () => {
        movieinfo.count(
          {
            year: 2010 + i,
            types: { $in: [`${types[j].cn}`] }
          },
          (err, data) => {
            if (i !== 9) {
              i++;
              sendData[types[j].en].push(parseInt(data));
              getasyear();
            } else {
              sendData[types[j].en].push(parseInt(data));
              resolve();
            }
          }
        );
      };
      getasyear();
    }).then(() => {
      if (j !== 9) {
        j++;
        findType();
      } else {
        res.send(sendData);
      }
    });
  };
  findType();
});

router.get("/number2019", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  find2019 = () => {
    new Promise(function(resolve, reject) {
      let i = 0;
      var resdata = [];
      getascountry = () => {
        movieinfo.count(
          {
            region: { $regex: `^${countrys[i].cn}` }
          },
          (err, data) => {
            if (i !== countrys.length - 1) {
              let country = countrys[i].cn;
              resdata.push({ country: country, count: data });
              getascountry();
              i++;
            } else {
              let country = countrys[i].cn;
              resdata.push({ country: country, count: data });
              resolve(resdata);
            }
          }
        );
      };
      getascountry();
    }).then(data => {
      res.send(data);
    });
  };
  find2019();
});

router.get("/chinarate", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  findChina = () => {
    new Promise(function(resolve, reject) {
      let i = 0;
      var sendData = [];
      getaschina = () => {
        movieinfo.count(
          {
            rate: { $gt: i, $lte: i + 1 },
            region: { $regex: "中国" }
          },
          (err, data) => {
            if (i !== 9) {
              i++;
              sendData.push(parseInt(data));
              getaschina();
            } else {
              sendData.push(parseInt(data));
              resolve(sendData);
            }
          }
        );
      };
      getaschina();
    }).then(data => {
      res.send(data);
    });
  };
  findChina();
});

router.get("/chinayear", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  findChinayear = () => {
    new Promise(function(resolve, reject) {
      let i = 0;
      var sendData = [];
      getaschinayear = () => {
        movieinfo.count(
          {
            year: 2010 + i,
            region: { $regex: "中国" }
          },
          (err, data) => {
            if (i !== 9) {
              i++;
              sendData.push(parseInt(data));
              getaschinayear();
            } else {
              sendData.push(parseInt(data));
              resolve(sendData);
            }
          }
        );
      };
      getaschinayear();
    }).then(data => {
      res.send(data);
    });
  };
  findChinayear();
});

router.get("/2019lt5", (req, res) => {
  let movieinfo = moviedb.model("movieinfonew");
  find2019lt5 = () => {
    new Promise(function(resolve, reject) {
      getlt5 = () => {
        movieinfo.find(
          {
            year: 2019,
            rate: { $lt: 5 }
          },
          (err, data) => {
            resolve(data);
          }
        );
      };
      getlt5();
    }).then(data => {
      res.send(data);
    });
  };
  find2019lt5();
});

module.exports = router;
