(function() {

 angular.module('angularExample', []);

 window.PhoneListCtrl = function($scope) {
   return $scope.phones = [
     {
       name: "Nexus S",
       snippet: "Fast just got faster with Nexus S."
     }, {
       name: "Motorola XOOM™ with Wi-Fi",
       snippet: "The Next, Next Generation tablet."
     }
   ];
 };

 angular.bootstrap(document, ['angularExample']);

}).call(this);