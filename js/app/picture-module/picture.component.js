angular
    .module("picture")
    .component("pictureComponent",{
        templateUrl:"js/app/picture-module/picture.template.html",
        controller:["$scope","$http", function ($scope,$http) {
            var that = this;
            $http.get("js/active.json"
            ).then(function (response) {
                that.lists = response.data.g1;
            }, function (response) {
                console.log("error");
            });
        }]
    });
