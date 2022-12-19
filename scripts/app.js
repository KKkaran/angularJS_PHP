let application = angular.module('angular_app', ['ngRoute']);

application.config( ($routeProvider)=> {
    $routeProvider
        .when("/", {
            templateUrl: "partials/login.html"
        })
        .when("/test", {
            templateUrl: "partials/test.html",
            controller: "test_controller"
        })
        .when("/paris", {
            templateUrl: "partials/paris.html",
            controller: "paris_controller"
        })
        .when("/london", {
            templateUrl: "partials/london.html",
            controller: "london_controller"
        })
        .otherwise({
            templateUrl : "partials/login.html"
        });
})
application.controller('test_controller',function($scope){
    $scope.msg = "This is Test Controller";
})
application.controller('london_controller',function($scope){
    $scope.msg = "This is London Controller";
})
application.controller('paris_controller',function($scope){
    $scope.msg = "This is Paris Controller";
})
application.controller('angular_controller', function($scope) {
    $scope.form = {
        email: '',
        password: '',
        rmrme: false
    }

    $scope.logout = () => {
        console.log("logging out");
    }
    $scope.login = () => {
        console.log("logging in out");
    }
    
})