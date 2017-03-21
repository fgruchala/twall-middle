(function() {
    "use strict";

    const winston = require("winston");
    
    let converter = {};
    converter.fromTwitterToTwall = function(tweetsToConvert) { 
        winston.info("[tweet.converter] Converting %s tweet(s) from Twitter API to Twall ...", tweetsToConvert.length);
        
        let tweetsConverted = tweetsToConvert.map((tweetToConvert, idx) => {
            winston.debug("[tweet.converter] Tweet to convert", tweetToConvert);
        
            let tweetConverted = {};
            tweetConverted.created_at = tweetToConvert.created_at;
            tweetConverted.id = tweetToConvert.id;
            tweetConverted.text = tweetToConvert.text;
            tweetConverted.retweet_count = tweetToConvert.retweet_count;
            
            let user = {};
            user.screen_name = tweetToConvert.user.screen_name;
            tweetConverted.user = user;

            winston.debug("[tweet.converter] Tweet converted", tweetConverted);
            return tweetConverted;
        });

        winston.info("[tweet.converter] %s tweet(s) converted successfully.", tweetsConverted.length)
        return tweetsConverted;
    };

    module.exports = converter;
})();