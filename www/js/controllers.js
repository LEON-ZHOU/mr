angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('QuickReservationController',function($scope, Friends){
	$scope.rooms = [
	{id:"D301", name:"CONF-D301", capacity:12, time:"15:30"},
	{id:"A301", name:"CONF-A301", capacity:6, time:"16:30"},
	{id:"C301", name:"CONF-C301", capacity:8, time:"14:15"},
	{id:"D201", name:"CONF-D201", capacity:10, time:"17:30"}
	];
})

.controller('AdvanceReservationController',function($scope, Friends){
	$scope.rooms = [
	{id:"D301", name:"CONF-D301", capacity:12, time:"15:30"},
	{id:"A301", name:"CONF-A301", capacity:6, time:"16:30"},
	{id:"C301", name:"CONF-C301", capacity:8, time:"14:15"},
	{id:"D201", name:"CONF-D201", capacity:10, time:"17:30"}
	];
})
.controller('BookMeetingController',function($scope, $stateParams, Friends){
	
});

