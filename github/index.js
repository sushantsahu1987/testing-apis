const newman = require('newman'); 
const GithubCollection = require("./Github.postman_collection.json");

newman.run({
    collection: GithubCollection,
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
