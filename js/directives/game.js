/**
 * Created by edgilmore on 6/16/2015.
 */
app.directive('game', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/html/game.html'
    };
});