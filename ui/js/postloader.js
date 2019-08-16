
var app = angular.module('postApp', ['ngStorage']);
app.controller('postCtrl', function($scope, $http, $localStorage) {
    console.log('Post controller executed');
    $scope.$storage = $localStorage;
    $scope.postsArr = [];
    if($scope.$storage.likeObject == undefined || $scope.$storage.likeObject == null) {
        $scope.$storage.likeObject = {};
    }
    $scope.getItems = function() {
            $http({
                method: 'GET',
                url: 'https://heroku-comserver.herokuapp.com/api/getAllPosts'
             }).then(function (response){
                $scope.postsArr = response.data;
                console.log('post data recieved ', $scope.postsArr)
             },function (error){
                console.log('error occurred in api call from ui to fronted', error)
             })
    };
    //$scope.getItems();
    // setInterval(function(){
    //     $scope.getItems();
    //   }, 5000)
    $scope.likeClick = function(postId){
        console.log('post id ', postId);
        $scope.$storage.likeObject[postId] = true;
        $http.post('https://heroku-comserver.herokuapp.com/api/liked',{'postId': postId}
         ).then(function (response){
             if(response.data && response.data.errorCode && response.data.errorCode == 1){
                 alert("you have already liked this picture");
             }
            console.log('post data recieved ', response);
         },function (error){
            console.log('error occurred in api call from ui to fronted liked click', error)
         })
    }

});

