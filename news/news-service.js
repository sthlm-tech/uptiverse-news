var config = require("./../config");
var mongoose = require('mongoose');
var News = require("./News");
var when = require('when');
function NewsService() {
	var self = this;

	mongoose.connect(config.db_connectionString);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	});

	self.getnews = function(){
		var deferred = when.defer();

		News.find(function(err, news) {
			deferred.resolve(news);
	  });

		return deferred.promise;
	};

	self.create = function(in_news_data){
		var deferred = when.defer();
		var news = new News();

		news.heading = in_news_data.heading;
		news.text = in_news_data.text;
		news.image = in_news_data.image;
		news.published = in_news_data.published;

		news.save(function(err, createdNews){
			deferred.resolve(createdNews);
		});

		return deferred.promise;
	}



}
module.exports = new NewsService();
