var fs = require('fs-promise');
var request = require('request-promise');
var cheerio = require('cheerio');
var iconv  = require('iconv');

var url = "http://valoda.ailab.lv/latval/vispareji/tautasdz/";


request({
    uri: url + "t00.htm",
    method: 'GET',
    encoding: 'utf8'
})
    .then(function (html) {
        var $ = cheerio.load(html);
        var links = [];

        $('table[colspec="L20"] a').filter(function () {
            var data = $(this);
            links.push(data.attr('href'))
        });

        return links;
    }).then(function (links) {
    var promises = [];

    links.forEach(function (link) {
        promises.push(request({
            uri: url + link,
            method: 'GET',
            encoding: 'binary'
        }))
    });

    return Promise.all(promises);
}).then(function (results) {
    results.forEach(function (body, idx) {
        body = new Buffer(body, 'binary');
        var conv = new iconv.Iconv('windows-1257', 'utf8');
        body = conv.convert(body).toString();
        fs.writeFile('data/sample.' +  idx, body, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        })
    });
    return output;
}).catch(function (err) {
    console.error(err);
});