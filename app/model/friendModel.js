FriendModel = Backbone.Model.extend({
	firstNameContains: function(name){
   		return this.get('first_name').toLowerCase().indexOf(name) !== -1;
 	},

	getCurrentCity: function(){
    	return (this.get('current_location') || {}).city;
    },

    getCurrentBirthday: function(){
    	if(this.get('birthday_date') != null){
			if(this.get('birthday_date').length = 10)return (this.get('birthday_date')).substring(6,10);
    		else return this.get('birthday_date').substring(2,5);	
    	}
    },

    getCouple:function(){
        if(this.get('relationship_status') === "Married" || this.get('relationship_status') === "In a relationship")return this;

    },

    getNbAmis: function(){
        return parseInt(this.get('friend_count'),10);
    },

    getNbAmisCommun: function(){
        return parseInt(this.get('mutual_friend_count'),10);
    },

    getPlusDeDeuxLangues: function(){
        if(this.get('languages').length > 2)return this;
    },

    getNbLivres: function(){
        return this.get('books').split(",").length;  
    },

    getNbPost: function(){
        return parseInt(this.get('likes_count'),10);
    }
});