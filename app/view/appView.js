AppView = Backbone.View.extend({
	template: _.template($('#tmpl_friend').html()),
  templateInfos: _.template($('#tmpl_infos').html()),

	events:{
    	'keyup #champRechercheNom': 'searchName',
    	'click #triDate': 'triDate',
    	'click #triVille': 'triCity',
      'click #triCouple': 'triCouple',
      'click #triNbAmis': 'triNbAmis',
      'click #triNbAmisCommun': 'triNbAmisCommun',
      'click #triDeuxLangues': 'triPlusDeDeuxLangues',
      'click #triNbLivre': 'triNbLivres',
      'click #triActivitee': 'triActivitee',
      'click #groupBySchool': 'groupBySchool',
      'click #triByLickes': 'triByLikes'

  },

	initialize: function(){
		this.listenTo(this.collection, 'reset', this.render.bind(this));
	},

	searchName: function(e){
    this.collection.filterByName(e.target.value);
  },

  triDate: function(e){
    this.collection.sortByDate();
  },

  triCity: function(e){
    this.collection.sortByCity();
  },

  triCouple: function(e){
    this.collection.filterByCouple();
  },

  triNbAmis: function(e){
    this.collection.sortByNbAmis();
  },

  triNbAmisCommun: function(e){
    this.collection.sortByNbAmisCommun();
  },

  triPlusDeDeuxLangues: function(e){
    this.collection.filterByPlusDeDeuxLangues();
  },

  triNbLivres: function(e){
    this.collection.sortByNbLivres();
  },

  triActivitee: function(e){
    this.collection.sortByActivitee();
  },

  groupBySchool: function() {
     this.collection.groupBySchool();
  },

  triByLikes: function() {
     this.collection.sortByLikes();
  },



	render: function(friends){
		var $trombinoscope = this.$el.find('#trombinoscope');
    var $infosGeneral = this.$el.find('#infosGeneral');
    $infosGeneral.empty();
		$trombinoscope.empty();
    var hommes = 0;
    var femmes = 0;
    var likes = 0;
    var nbAmisAffiche = 0;

		friends.forEach(function(friendModel, i){
      if(friendModel.get('sex') === "female")femmes += 1;
      if(friendModel.get('sex') === "male")hommes += 1;
      if( !isNaN(parseInt(friendModel.get('likes_count'),10)) ) likes += parseInt(friendModel.get('likes_count'),10);
      nbAmisAffiche = (hommes + femmes);

      $trombinoscope.append(this.template({
        pic: friendModel.get('pic'),
        last_name: friendModel.get('last_name'),
        first_name: friendModel.get('first_name'),
        sex: friendModel.get('sex'),
        birthday_date: friendModel.get('birthday_date'),
        couple: ((friendModel.get('relationship_status')) || 'Single'),
        city: ((friendModel.get('current_location') || {}).city || 'Unknown'),
        nbAmis: friendModel.get('friend_count'),
        nbAmisCommun: friendModel.get('mutual_friend_count'),
        nbLangues : friendModel.get('languages').length,
        nbLivres : friendModel.get('books').split(",").length,
        nbLikes : parseInt(friendModel.get('likes_count'),10),
        ecole : ((friendModel.get('education')[0] || {}).school || {}).name || "Unknown",
        x: parseFloat( (friendModel.get('current_location') || {}).latitude,10) || 0.0,
        y: parseFloat( (friendModel.get('current_location') || {}).longitude,10) || 0.0
            
      }));
		},this);

    $infosGeneral.append(this.templateInfos({
      nbHommes: hommes,
      nbFemmes: femmes,
      nbLikesTotal: likes,
      nbAmisAffiche: nbAmisAffiche

    }));
	}
});