angular.module('directives', []).directive('nsStateFull', function () {
   return{
       restrict: 'A',
       scope:false,
       link: function (scope, element, attrs) {
           if(!attrs.nsStateFull){
               throw "You must provide a class name in order to use nsStateFull directive";
           }
           element.bind('click', function (e) {
              scope.$apply(function () {
                 if(!element.hasClass(attrs.nsStateFull)){
                     element.addClass(attrs.nsStateFull);
                 } else {
                     element.removeClass(attrs.nsStateFull);
                 }
              });
           });
       }
   }
});