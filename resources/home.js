// Create endpoints for route '/'

exports.GET = function(req, res)
{
  	res.send("Hello world!");
};

exports.POST = function(req, res)
{
	res.json(req.body);
};

exports.PUT = function(req, res)
{
	res.send("Not implemented");
};

exports.DELETE = function(req, res)
{
	res.send("Not implemented");
};