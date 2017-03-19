/**
 * Created by swyat on 3/19/17.
 */

var Dispatcher = require('flux').Dispatcher;


var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

module.exports = AppDispatcher;