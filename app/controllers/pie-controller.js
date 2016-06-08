angular.module('pie', [])
.controller('PieController', ['$scope', function ($scope) {

    //Listeners
    $scope.$on('pieHasBeenDepleted', function () {
        $scope.warning = 'RED ALERT';
        $scope.slices = 0;
    });
    //Watchers
    function compareAndWarn(newVal, oldVal){
        var props = [];
        if(newVal && oldVal){
            for (var key in newVal){
                if(newVal[key] > oldVal[key]){
                    props.push(key.charAt(0).toUpperCase() + key.slice(1))
                }
            }
        }
        return props;
    };

    //Watch
    $scope.$watch('nutritionalValue', function (newVal, oldVal) {
        var props = compareAndWarn(newVal, oldVal);
        if(props && props.length){
            $scope.warning = props.join(", ") + " have gone up!";
        }else{
            $scope.warning = null;
        }
    }, true);

    this.requestFlavour = function (flavour) {
        $scope.lastReqeustedFlavour = flavour;
    }

    $scope.eatSlice = function () {
        if($scope.slices){
            $scope.slices--;
        }
    }

    $scope.slices = 8;
    $scope.lastReqeustedFlavour;
    $scope.warning = null;
    $scope.nutritionalValue = {calories: 500, carbs: 250, fat:100};
}]);