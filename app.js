var Octokit = require("@octokit/rest");
var express = require('express');
var fileupload = require("express-fileupload");
var https = require('https');
var fs = require('fs');
var request = require('request');
var streamifier = require('streamifier');
var mime = require('mime-types');
var path = require('path');
var githubService = require('./modules/github_service')

var app = express();

const static_dir_path = path.join(__dirname, './temp-files-client/dist/temp-files-client');
const index_path = path.join(static_dir_path, "index.html")

var index_html = fs.readFileSync(index_path).toString();
var success_html = index_html.replace("{{ERROR_MSG}}", "false")
var failure_html = index_html.replace("{{ERROR_MSG}}", "true")

const PORT = process.env.PORT || 5000;

app.use(fileupload());

app.get('/', function (req, res) {
    res.send(success_html)
});

app.post('/file-upload', function (req, res) {
    githubService.uploadFile(req).then(
        function (filename) {
            console.log(filename)
            res.send(`${filename}`) 
        }
    ).catch(
        (error) => {
            res.send("error");
            console.log(error);
        }
    )
});

app.get('/d/:filename', function (req, res){
    const filename = req.params.filename;
    githubService.downloadFile(res, filename, failure_html);
});

app.use(express.static(static_dir_path));

var server = app.listen(PORT, function () {
    console.log('Node server is running..');
});
