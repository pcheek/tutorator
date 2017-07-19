/*

Botkit Studio Skill module to enhance the "helpme" script

*/

var request = require('request');


module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('helpme', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: helpme');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Validate user input: body
    controller.studio.validate('helpme','body', function(convo, next) {

        var value = convo.extractResponse('body');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: body');

        // always call next!
        next();

    });

    // Validate user input: max_price
    controller.studio.validate('helpme','max_price', function(convo, next) {

        var value = convo.extractResponse('max_price');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: max_price');

        // always call next!
        next();

    });

    // Validate user input: type_language
    controller.studio.validate('helpme','type_language', function(convo, next) {

        var value = convo.extractResponse('type_language');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: type_language');

        // always call next!
        next();

    });

    // Validate user input: type
    controller.studio.validate('helpme','type', function(convo, next) {

        var value = convo.extractResponse('type');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: type');

        // always call next!
        next();

    });

    // Validate user input: email
    controller.studio.validate('helpme','email', function(convo, next) {

        var value = convo.extractResponse('email');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: email');

        // always call next!
        next();

    });

    // Validate user input: name
    controller.studio.validate('helpme','name', function(convo, next) {

        var value = convo.extractResponse('name');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: name');

        // always call next!
        next();

    });

    // Validate user input: question_1
    controller.studio.validate('helpme','question_1', function(convo, next) {

        var value = convo.extractResponse('question_1');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: question_1');

        // always call next!
        next();

    });

    // Validate user input: question_2
    controller.studio.validate('helpme','question_2', function(convo, next) {

        var value = convo.extractResponse('question_2');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: question_2');

        // always call next!
        next();

    });

    // Validate user input: question_3
    controller.studio.validate('helpme','question_3', function(convo, next) {

        var value = convo.extractResponse('question_3');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: helpme VARIABLE: question_3');

        // always call next!
        next();

    });

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('helpme','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the on_timeout thread starts, run this:
    controller.studio.beforeThread('helpme','on_timeout', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *on_timeout*');

        // always call next!
        next();
    });

    // Before the language thread starts, run this:
    controller.studio.beforeThread('helpme','language', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *language*');

        // always call next!
        next();
    });

    // Before the hobby thread starts, run this:
    controller.studio.beforeThread('helpme','hobby', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *hobby*');

        // always call next!
        next();
    });

    // Before the school thread starts, run this:
    controller.studio.beforeThread('helpme','school', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *school*');

        // always call next!
        next();
    });

    // Before the price thread starts, run this:
    controller.studio.beforeThread('helpme','price', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *price*');

        // always call next!
        next();
    });

    // Before the description thread starts, run this:
    controller.studio.beforeThread('helpme','description', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *description*');

        // always call next!
        next();
    });

    // Before the confirmation thread starts, run this:
    controller.studio.beforeThread('helpme','confirmation', function(convo, next) {

				console.log("convo", convo);
				console.log("convo.vars", convo.vars);

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *helpme*, about to start the thread *confirmation*');
				var myjar = request.jar();

				request.get({
					url:     'https://preply.com/',
  				jar: myjar,
  				method: 'GET',
  				followAllRedirects: true
				}, function(error, response, body) {

						var requestData = {
								"tutor_type": "skype",
								"address": "",
								"travel_districts": "",
								"prices": "ANY",
								"zip_code": "",
								"distance": "10",
								"name": convo.responses.name.text,
								"force_language": "en",
								"force_currency": "USD",
								"email": convo.responses.email.text,
								"phone_number": "",
								"subject": convo.responses.type.text,
								"body": convo.responses.body.text,
								"m_source": "referral",
								"m_source_landing": "\/",
								"m_source_details": "https:\/\/techcrunch.com\/2016\/06\/07\/preply-pulls-in-1-3m-to-expand-its-tutoring-marketplace-in-europe\/",
								"landing_page": "https:\/\/preply.com\/",
								"landing_page_last": "https:\/\/preply.com\/en\/form?utm_source=intercom&utm_medium=inapp&utm_content=content2&utm_campaign=en-visitor-a-85463107",
								"source_page": "https:\/\/techcrunch.com\/2016\/06\/07\/preply-pulls-in-1-3m-to-expand-its-tutoring-marketplace-in-europe\/",
								"source_page_utmz": "",
								"source_page_last": "",
								"source_page_last_utmz": "techcrunch(referral)",
								"visit_time": "2017-07-18T22:00:56.400Z",
								"device_type": "desktop",
								"client_id": "616522452.1500429657",
								"user_city": "skype",
								"country_alias": "skype",
								"city": "skype",
								"min_price": 1,
								"max_price": parseInt(convo.responses.max_price.text)
							};

						console.log("request data", requestData);
						console.log("myjar", myjar);

						request.post({
							headers: {
								'content-type' : 'application/json',
								'accept': 'application/json, text/javascript, */*; q=0.01',
								'accept-encoding': 'gzip, deflate, br',
								'accept-language': 'en-US,en;q=0.8',
								'origin': 'https://preply.com',
								'referrer': 'https://preply.com/',
								'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
								'x-requested-with': 'XMLHttpRequest'
							},
							url:     'https://preply.com/api/reverselead/',
							//form:    requestData,
							body: JSON.stringify(requestData),
							method: 'POST',
							followAllRedirects: true,
							jar: myjar
						}, function(error, response, body) {
							console.log(response.status);
							console.log("response body", body);
							next();
						});

				});


        // always call next!
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('helpme', function(convo, next) {

        console.log('AFTER: helpme');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
