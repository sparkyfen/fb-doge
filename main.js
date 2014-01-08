var scraper = require('./scraper.js');
setInterval(function () {
	scraper.start();
}, 3000);