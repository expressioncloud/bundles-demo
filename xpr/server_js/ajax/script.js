exports.process = function(context, options) {
    let message = "Hello World";
    let rq = require("/xpr/request").XprRequest;

    return { 
        "request" : rq,
        "message" : "hello world"
    };
}
