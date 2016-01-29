
Guitar = new Mongo.Collection("guitars");
Template.allbooks.helpers({
guitars: function(){
    var selection = [];
    var guitar = Guitars.find().fetch();

    for(var i in guitar){
        selection.push({
                    title: guitar[i].title,
                    picture: guitar[i].url,
                    createdBy: guitar[i].createdBy,
                    likes: guitar[i].likes,
                    _id: guitar[i]._id
                    });
                }
    return selection;
    }
});
