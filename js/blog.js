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
	    var blogsView = new BlogsView({ collection: blogs });
	    blogsView.render();
	    $('.main-container').html(blogsView.el);
		},
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});

	var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    	}
	});
 
});
