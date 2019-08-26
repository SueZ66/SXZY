var express = require("express");
var router = express.Router();

const https = require("https");
const cheerio = require("cheerio");

function getMovieData() {
  https.get(
    "https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=0",
    function(res) {
      let data;
      res.setEncoding("utf-8");
      res.on("data", function(chunk) {
        data = chunk;
      });
      res.on("end", function() {
        let dataObj = JSON.parse(data);
        let dataCon = dataObj.data;
        dataCon.map(item => {
          https.get(item.url, function(res) {
            let itemdata;
            res.setEncoding("utf-8");
            res.on("data", function(chunk) {
              itemdata += chunk;
            });
            res.on("end", function() {
              let $ = cheerio.load(itemdata);
              console.log(
                $("#info .pl")
                  .eq(4)
                  .text()
              );
            });
          });
        });
      });
    }
  );
}
getMovieData();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "dataVisible" });
});

module.exports = router;
