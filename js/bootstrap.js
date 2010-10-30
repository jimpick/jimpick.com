system.use("com.joyent.Sammy");

GET("/", function() {
  return template("index.html");
});

GET(/^\/contact\/?/, function() {
  return template("contact.html");
});

GET(/^\/joyent\/?/, function() {
  return template("joyent.html");
});

GET("/jimpick.manifest", function() {
  this.response.mime = "text/cache-manifest";
  return template("jimpick.manifest");
});

GET("/apple-touch-icon-precomposed.png", function() {
  this.response.mime = "image/png";
  return system.filesystem.get(
    "public/images/jpick-57x57.png");
});

