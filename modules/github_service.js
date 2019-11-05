var request = require('request');
var streamifier = require('streamifier')
var mime = require('mime-types')
var uuidv4 = require('uuid/v4')
var Octokit = require("@octokit/rest");
const dotenv = require('dotenv');
dotenv.config();

const githubKey = process.env.GITHUB_TOKEN;
const githubOwner = process.env.GITHUB_OWNER; //Example "NodeTempFiles"
const githubRepo = process.env.GITHUB_REPO; //Example "Files"
const githubDirName = process.env.GITHUB_DIR; //Example "contents"
const githubRawUrl = process.env.GITHUB_RAW_URL; //Example "https://raw.githubusercontent.com/NodeTempFiles/Files/master/contents"
const siteDomain = process.env.SITE_DOMAIN

const githubClient = new Octokit({
    auth: "token " + githubKey
});

const getFileName = () => uuidv4().replace(/-/g, "")

const getRawGithubUrl = (filename) => `${githubRawUrl}/${filename}`

const uploadFile = async function(req) {
    const file = req.files.myfile;
    const uploadFileName  = getFileName();
    var data = JSON.stringify([file.name, file.data.toString('base64')])
    await githubClient.repos.createOrUpdateFile({
        owner: githubOwner,
        repo: githubRepo,
        path: `${githubDirName}/${uploadFileName}`,
        message: `+${file.name}@${Date.now()}`,
        content: Buffer.from(data).toString('base64'),
    })
    return `${siteDomain}/d/${uploadFileName}`;
}

const downloadFile = function(res, filename, failure_html) {
    request({url: getRawGithubUrl(filename), json: true}, function(error, response, body) {
        console.log(error)
        if(response.statusCode != 200){
            console.log("inside error");
            res.send(failure_html)
            return
        }
        res.setHeader('Content-disposition', `attachment; filename=${body[0]}`);
        const mimeType = mime.lookup(filename);
        if(mimeType) res.setHeader('Content-type', mimeType);
        streamifier.createReadStream(Buffer.from(body[1], 'base64')).pipe(res)
    });
}

exports.uploadFile = uploadFile;
exports.downloadFile = downloadFile