Template.home.helpers({
guitars: function(){
    var guitar = Guitars.find().fetch();
    var guitars = [];
    var user = Meteor.userId();
    for (var i in guitar){

            guitars.push({
                name: guitar[i].name,
                url: guitar[i].url,
                description: guitar[i].description
            });

    }
    return guitars;
}

});
