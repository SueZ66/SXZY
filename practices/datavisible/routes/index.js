var express = require("express");
var router = express.Router();

const fs = require("fs");
const https = require("https");
const cheerio = require("cheerio");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movie");

var moviedb = mongoose.connection;
moviedb.on("error", console.error.bind(console, "connection error:"));
moviedb.once("open", function() {
  // we're connected!
});

var Schema = mongoose.Schema;
var movieitems = new Schema({
  title: String,
  rate: String,
  region: String,
  types: Array,
  id: String,
  year: String
});
mongoose.model("movieinfonew", movieitems);

// saveData = data => {
//   let movieItem = mongoose.model("movieinfonew");
//   data.map(item => {
//     let movieitem = new movieItem();
//     movieitem.id = item.subject.id;
//     movieitem.title = item.subject.title;
//     movieitem.region = item.subject.region;
//     movieitem.rate = item.subject.rate;
//     movieitem.types = item.subject.types;
//     movieitem.year = item.subject.release_year;
//     movieitem.save(err => {});
//   });
// };

// var idArray_global = [];
// var startIndex = 0;

function getMovieData() {
  // 爬取ID
  // promiseMovieId = () => {
  //   new Promise((resolve, reject) => {
  //     console.log("index=" + startIndex);
  //     https.get(
  //       `https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=${startIndex *
  //         20}&year_range=1970,1979`,
  //       function(res) {
  //         let datajson;
  //         res.setEncoding("utf-8");
  //         res.on("data", function(chunk) {
  //           datajson = chunk;
  //         });
  //         res.on("error", err => {
  //           reject(err.stack);
  //         });
  //         res.on("end", () => {
  //           setTimeout(() => {
  //             let data = JSON.parse(datajson);
  //             let idArray = data.data.map(item => {
  //               return { id: item.id };
  //             });
  //             resolve(idArray);
  //           }, 200);
  //         });
  //       }
  //     );
  //   })
  //     .then(array => {
  //       console.log(array, startIndex);
  //       idArray_global = idArray_global.concat(array);
  //       if (array.length < 20) {
  //         let [...insaveArray] = idArray_global;
  //         idArray_global = [];
  //         saveData(insaveArray);
  //         console.log("spider over!");
  //       } else {
  //         if (startIndex % 20 == 0) {
  //           let [...insaveArray] = idArray_global;
  //           idArray_global = [];
  //           saveData(insaveArray);
  //         }
  //         startIndex++;
  //         promiseMovieId();
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // promiseMovieId();
  //
  //  读取数据
  // let movieinfo = moviedb.model("movieinfos");
  // movieinfo
  //   .find((err, data) => {
  //     console.log(data);
  //   })
  //   .gt("rate", 9.0);
  // movieinfo
  //   .find((err, data) => {
  //     console.log(data);
  //     mongoose.disconnect;
  //   })
  //   .gt("rate", 7.0);
  //
  // 读取JSON
  // fs.readFile(
  //   "C:/Users/ZSY/WebstormProjects/sxzs/practices/datavisible/movieInfo.json",
  //   "utf-8",
  //   (err, data) => {
  //     let useData = JSON.parse(data);
  //     console.log(useData);
  //     saveData(useData);
  //   }
  // );
}

getMovieData();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "dataVisible" });
});

module.exports = router;
