const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient();

router.post('/', function(req, res, next) {
  let userID = req.body.userID;
  let name = req.body.fullName;
  let email = req.body.email;
  let picture = req.body.picture;

  client.on('connect', () => {
	    console.log('Redis client connected');
	});

  client.on('error', err => {
    console.log('Something went wrong ' + err);
	});
  client.exists('ID:' + userID, (err,response) => {
  	if (response) {
  		client.hmget('ID:' + userID, 'name','email','picture', (err,response) => {
		    let resName = response[0];
		    let resEmail = response[1];
		    let resPicture = response[2];

		    res.json([{
		      userID: userID,
		      name: resName,
		      email: resEmail,
		      picture: resPicture
		    }]);
		  })		
  	}
  	else {
		  client.hmset('ID:' + userID, 'name', name, 'email', email, 'picture', picture);
			res.json([{
	      userID: userID,
	      name: name,
	      email: email,
	      picture: picture
	    }]);		    		
  	}
  })
  
});

module.exports = router;
