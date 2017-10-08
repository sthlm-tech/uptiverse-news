module.exports = {
	enableSecurity: true,
	port: 5000,
	cacheEnabled: false,
	cacheDuration: 3600000,
	db_connectionString: 'mongodb://user-service-user:user-service-user@ds015636.mlab.com:15636/heroku_q9zz0x8s',
	pulse: {
		shouldRegister:true,
		serviceName: "uptiverse-news",
		path:"/api/pulse",
		communicatorUrl: process.env.COMMUNICATOR_URL || "",
		token: process.env.COMMUNICATOR_TOKEN || ""
	}
};
console.log("COMMUNICATOR_URL",process.env.COMMUNICATOR_URL)
console.log("COMMUNICATOR_TOKEN",process.env.COMMUNICATOR_TOKEN)
