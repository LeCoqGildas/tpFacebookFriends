FriendCollection = Backbone.Collection.extend({
	model: FriendModel, //fais une instance de firendModel, et non de backbone

  	initialize: function(){
  	},

  
    filterByName: function(name){
      name = name.toLowerCase();
      var friendsName = this.filter(function(friend){
          return friend.firstNameContains(name);
      });
      // simulate a collection reset
      this.trigger('reset', new FriendCollection(friendsName));
    },
    
  	sortByCity: function(){
    	var friendsSortedByCity = this.sortBy(function(model){
    		return model.getCurrentCity();
    	})
    	this.trigger('reset', new FriendCollection(friendsSortedByCity));
  	},

    sortByDate: function(){
      var friendsSortedByDate = collection.sortBy(function(model){
        return model.getCurrentBirthday(); 
      })
      this.trigger('reset', new FriendCollection(friendsSortedByDate));
    },

    filterByCouple: function(){
      var friendsSortedByCouple = this.filter(function(model){
        return model.getCouple();
      })
      this.trigger('reset', new FriendCollection(friendsSortedByCouple));
    },

    sortByNbAmis: function(){
      var friendsSortedByNbAmis = collection.sortBy(function(model){
        return model.getNbAmis();      
      }).reverse()
      this.trigger('reset', new FriendCollection(friendsSortedByNbAmis));
    },


    sortByNbAmisCommun: function(){
      var friendsSortedByNbAmisCommun = collection.sortBy(function(model){
        return model.getNbAmisCommun();      
      }).reverse()
      this.trigger('reset', new FriendCollection(friendsSortedByNbAmisCommun));
    },

    filterByPlusDeDeuxLangues: function(){
      var friendsSortedByPlusDeDeuxLangues = this.filter(function(model){

        return model.getPlusDeDeuxLangues();
      })
      this.trigger('reset', new FriendCollection(friendsSortedByPlusDeDeuxLangues));
    },

    sortByNbLivres: function(){
      var friendsSortedByNbLivres = collection.sortBy(function(model){
        return model.getNbLivres();      
      }).reverse()
      this.trigger('reset', new FriendCollection(friendsSortedByNbLivres));
    },

    sortByActivitee: function(){
      var friendsSortedByActivitee = collection.sortBy(function(model){
        return (model.getNbPost() + model.getNbAmis());      
      }).reverse()
      this.trigger('reset', new FriendCollection(friendsSortedByActivitee));
    },

    groupBySchool : function() {
      var schools = this.map(function(model) {
        return model.get('education');
      });
      schools = _.flatten(schools);
      schools = schools.map(function(object) {
        return object.school.name;
      });
      console.log(schools);
    },

    sortByLikes: function(){
      var friendsSortedByLikes = collection.sortBy(function(model){
        return (model.getNbPost());      
      }).reverse()
      this.trigger('reset', new FriendCollection(friendsSortedByLikes));
    },

    

  	


});