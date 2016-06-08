angular.module('desserts',[]).value('DessertValues', {
    pies:[
        {flavor: "cherry", score:6},
        {flavor: "apple", score:7.5},
        {flavor: "peach", score:4}
    ]
});

angular.module('desserts').factory('DessertManager', ['DessertValues', function (dessertValue) {
    return{
      pieFlavors: function () {
          return dessertValue.pies.map(function (pie) {
              return pie.flavor;
          });
      }
    };
}])