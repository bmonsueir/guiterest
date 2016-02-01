Guitars = new Mongo.Collection("guitars");
Template.my.helpers({
    guitars:function(){
        var guitar = Guitars.find().fetch();
        var guitars = [];
        var user = Meteor.userId();
        for (var i in guitar){
            if(user == guitar[i].createdBy){
                guitars.push({
                    name: guitar[i].name,
                    url: guitar[i].url,
                    description: guitar[i].description
                });
            }
        }
        console.log(guitars);
        return guitars;
    }
});

Template.my.events({
    "submit .add": function(event, template){
        event.preventDefault();
        var user = Meteor.userId();
        var name = event.target.name.value;
        var url = event.target.url.value;
        var description = event.target.description.value;
        console.log(name, user);
        Guitars.insert({
            createdBy: user,
            name: name,
            url: url,
            description: description
        });
console.log(user, name, url, description);
    }
});
