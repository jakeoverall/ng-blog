'use strict';


app.controller('postsCtrl', function($scope, Post) {
    $scope.posts = Post.all;

    $scope.post = { url: 'http://' };
    
    $scope.deletePost = function(postId) {
        Post.delete(postId);
    };
});