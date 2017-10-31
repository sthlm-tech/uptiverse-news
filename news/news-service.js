var App = require("ms-core");
var News = require("./News");
var when = require('when');
function NewsService() {
	var self = this;

	self.getnews = function(){
		var deferred = when.defer();


		News.find({})
		.sort({published: 'descending'})
		.exec(function(err, news) {
			deferred.resolve(news);
		});

		return deferred.promise;
	};

	self.create = function(in_news_data, user){
		var deferred = when.defer();
		var news = new News();

		news.heading = in_news_data.heading;
		news.text = in_news_data.text;
		news.image = in_news_data.image;
		news.published = new Date();
		news.publisherId = user.username;
		news.publisher = user.name.firstname + " " + user.name.lastname;

		news.save(function(err, createdNews){
			deferred.resolve(createdNews);
			App.Communicator.sendMessage(
				"NEWS_CREATED",
				"DATA_CHANGED",
				{ "text": news.publisher + " posted: "+ "\n"  + news.heading + "\n" + news.text}
			);
		});

		return deferred.promise;
	}



}
module.exports = new NewsService();
