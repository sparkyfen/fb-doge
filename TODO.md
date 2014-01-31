Tipping
-------

* Add tips via PM

Mentions
--------

* Finish logic for when a mention is found and we need to reply to the status if it's a tip. __scraper.js:~502__

Security
--------

* Store encrypted message id (needs to be able to be decrypted to send messages). 

Messages
--------

* Find out how to mark a message as read.
* Formulate more sophisticated and "Doge-like" messages back to users.
    * Info message could use a better message reply.
* Reply to public statuses, waiting on [bug fix](https://developers.facebook.com/x/bugs/1378024742458739/).
* Reply to non-public statuses, this can be done by setting up authentication requests to the Facebook application and reading user statuses.

API
---
* All requests to user data (mentions in particular) should eventually have ```&since=' + (Date.now() - 120000) + '``` added to it where 120000 is the space between each request in the main.js timeout.