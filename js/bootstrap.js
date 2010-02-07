system.use("com.joyent.Sammy");

GET("/", function() {
  return template("index.html");
});

GET(/^\/contact\/?/, function() {
  return template("contact.html");
});

GET("/jimpick.manifest", function() {
  this.response.mime = "text/cache-manifest";
  return template("jimpick.manifest");
});

