$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("RLIF6gHptIpn0yRbB53E4G7LQa3x2vmfAMjlNW98", "tGu47uqtsH1DVBzfX9YUOOZSGM6DbPLvaIQrQwex");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});