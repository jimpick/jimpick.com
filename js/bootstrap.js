system.use("com.joyent.Sammy");

GET("/", function() {
  return template("index.html");
});

GET(/^\/contact\/?/, function() {
  return template("contact.html");
});

