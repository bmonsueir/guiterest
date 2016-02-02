Likes = new Mongo.Collection("likes");
Template.home.helpers({
guitars: function(){
    var guitar = Guitars.find().fetch();
    var guitars = [];
    var user = Meteor.userId();
    var iLike = "";
    for (var i in guitar){
        if(guitar[i].likes.indexOf(user) < 0){
            iLike = "";
        } else{
            iLike = " I Like it";
        }
        if(guitar[i].likes.length == 1) {
            isGTO = false;
        } else{
            isGTO = true;
        }
            guitars.push({
                name: guitar[i].name,
                url: guitar[i].url,
                description: guitar[i].description,
                _id: guitar[i]._id,
                likes: guitar[i].likes.length,
                iLike: iLike,
                isGTO: isGTO
            });
        }
    //console.log(guitars);
    return guitars;
    }
});
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
Template.home.events({
    "click .like": function(event){
        event.preventDefault();
        var user = Meteor.userId();
        var guitar = Guitars.findOne({_id:this._id});
        if(guitar.likes.indexOf(user) < 0){
        Guitars.update({_id:this._id}, {$push:{likes: user
        }});
    }
        //console.log(guitar.likes);
    }
});
$("img").error(function () {
  $(this._id).unbind("error").attr("src", "guitar_icon.png");
});
