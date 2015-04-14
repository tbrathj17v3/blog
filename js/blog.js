$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("RLIF6gHptIpn0yRbB53E4G7LQa3x2vmfAMjlNW98", "tGu47uqtsH1DVBzfX9YUOOZSGM6DbPLvaIQrQwex");
    var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({model: Blog});

	// new instance of Blogs collection
	var blogs = new Blogs();

	blogs.fetch({
	    success: function(blogs) {
	        console.log(blogs);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});
 
});
