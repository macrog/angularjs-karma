describe("PieController", function () {
    var $rootScope,
        $scope,
        dessertManager,
        controller;

    beforeEach(function () {
        module('pie');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController", {$scope: $scope});
        });

        $scope.$digest();
    });
    
    describe("Listeners", function () {
       describe("pieHasBeenDepleted", function () {
           it("Should set warning to RED ALERT", function () {
                $rootScope.$broadcast("pieHasBeenDepleted");
               $scope.$digest();
               expect($scope.warning).toEqual("RED ALERT");
           });
           it("Should set slices to 0", function () {
               $rootScope.$broadcast("pieHasBeenDepleted");
               $scope.$digest();
               expect($scope.slices).toEqual(0);
           });
       });
    });

    describe("Action Handler", function () {
        describe("eatSlice", function () {
            it("Should decrement number of slices", function () {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });
            it("Should do nothing when slices is 0", function () {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });
        describe("requestFlavour", function () {
            it("Should set lastRequestedFlavour to the passed in argument", function () {
                controller.requestFlavour('cherry');
                expect($scope.lastReqeustedFlavour).toBe('cherry');
            });
        });
    });
    
    describe("Iniatialization", function () {
        it("Should instantiate slices as 8", function () {
            expect($scope.slices).toEqual(8);
        });
        it("Should instantiate lastRequestedFlavour", function () {
            expect($scope.lastReqeustedFlavour).toBeUndefined();
        });
        it("Should instantiate nutritionalValue to its defaul", function () {
            expect($scope.nutritionalValue).toEqual({calories: 500, carbs: 250, fat:100});
        });
        it("Should instantiate warning to null", function () {
            expect($scope.warning).toBeNull();
        });
    });
    describe("Watchers", function () {
       describe("nutritionalValue", function () {
            it("Should set the warning that carbs have gone up, when only carbs go up", function () {
                $scope.nutritionalValue.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Carbs have gone up!");
            });
            it("Should set the warning that fat have gone up, when only fat go up", function () {
                $scope.nutritionalValue.fat++;
                $scope.$digest();
                expect($scope.warning).toEqual("Fat have gone up!");
            });
            it("Should set teh warning that calories have gone up, only when calories go up", function () {
                $scope.nutritionalValue.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories have gone up!");
            });
            it("Should set the warning that a combination has gone up", function () {
                $scope.nutritionalValue.carbs++;
                $scope.nutritionalValue.fat++;
                $scope.nutritionalValue.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories, Carbs, Fat have gone up!");
            });
            it("Should set the warning to null if nothing goes up", function () {
                expect($scope.warning).toBeNull();
            });
            it("Should set the warning to null if nothing has gone up, even if some things has go down", function () {
                $scope.nutritionalValue.carbs--;
                $scope.nutritionalValue.fat--;
                $scope.nutritionalValue.calories--;
                $scope.$digest();
                expect($scope.warning).toBeNull();
            });
        });
    });
});