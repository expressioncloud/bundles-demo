exports.process = function(context, options) {

    let message = "Hello World";
    let user_message = require("/xpr/request").XprRequest.urlParams["message"]

    message = user_message ? user_message : message;

    return { 
        "message" : user_message
    };
}
