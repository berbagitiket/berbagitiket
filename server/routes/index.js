var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});



router.get('/gettickets', function(req, res, next) {
    request('https://www.tiket.com/pesawat/cari?d=CGK&a=BPN&date=2017-02-22&adult=1&child=0&infant=0', function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var data = $("#tbody_depart tr")
            var arrID = []
            // res.send(data[0].attribs['data-airlines'])

            for (var i = 0; i < data.length; i++) {
              if(typeof(data[i].attribs.id)==="string"){
                arrID.push(data[i].attribs)
              }
            }
            res.send(arrID);
        }
    })
});

router.get('/getreservasi', function(req, res, next) {
    request('https://www.pegipegi.com/tiket-pesawat/sys/#/search-results/JKTA/BPN/16-02-2017/1/0/0', function(error, response, html) {
        if (!error && response.statusCode == 200) {
            res.send(html)
        }
    })
});



module.exports = router;
