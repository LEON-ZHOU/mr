angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];
	var sites= [
	{id:"1001", name:"VIA Shanghai"},
	{id:"1002", name:"Jinqiao Shanghai"},
	{id:"1003", name:"Chongqing China"},
	{id:"1004", name:"Beijing China"},
	{id:"1005", name:"Dalian China"},
	{id:"1006", name:"HongKong China"},
	{id:"1007", name:"Houston US"}
  ];
  
  var rooms = [
	{id:"D301", name:"CONF-D301", capacity:12, time:"15:30"},
	{id:"A301", name:"CONF-A301", capacity:6, time:"16:30"},
	{id:"C301", name:"CONF-C301", capacity:8, time:"14:15"},
	{id:"D201", name:"CONF-D201", capacity:10, time:"17:30"}
  ];

  return {
    all: function(type) {
      if(type=='site'){
    	  return sites;
      }else if(type='room'){
    	  return rooms;
      }else{
    	  return friends;
      }
    },
    get: function(id, type) {
      // Simple index lookup
    	if(type=='site'){
      	  return sites[id];
        }else if(type='room'){
      	  return rooms[id];
        }else{
      	  return friends[id];
        }
    }
  }
});
