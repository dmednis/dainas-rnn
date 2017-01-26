var fs = require('fs-promise');

var promises = [];

for (var i = 0; i < 72; i++) {
    promises.push(fs.readFile('data/sample.' + i, {encoding: 'utf8'}));
}

Promise.all(promises)
    .then(function (results) {
        var output = "";
        results.forEach(function (body, idx) {
            var html = body;
            html = html.split(' WIDTH=85%>\n<TR><TD>')[1];

            html = html.split('</TD></TR>\n</TABLE>')[0];
            html = html.replace(/<P>/g, "\n\n");
            html = html.replace(/<p>/g, "\n\n");
            html = html.replace(/<br>\n/g, "\n");
            html = html.replace(/<br>/g, "\n");
            html = html.replace(/<BR>\n/g, "\n");
            html = html.replace(/<BR>/g, "\n");

            html = html.replace(/ {2,}/g, " ");
            html = html.replace(/\n /g, "\n");
            html = html.replace(/\n{2,}/g, "\n\n");
            html = html.trim();
            output += html;
            output += "\n";
        });
        return output;
    }, function (err) {
        console.error(err)
    }).then(function (out) {
    //console.log(out);
    fs.writeFile('out.txt', out, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    })
});