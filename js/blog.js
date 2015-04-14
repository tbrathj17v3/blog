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