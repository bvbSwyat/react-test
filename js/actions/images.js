/**
 * Created by swyat on 3/19/17.
 */

var AppDispatcher = require('../dispatcher/appDispatcher');
var ImagesConstants = require('../constants/images');

var ImagesActions = {

    receiveImages: function(data) {
        AppDispatcher.handleAction({
            actionType: ImagesConstants.RECEIVE_DATA,
            data: data
        })
    },
    addImage: function(id, update) {
        AppDispatcher.handleAction({
            actionType: ImagesConstants.IMAGE_ADD,
            id: id,
            update: update
        })
    },
    removeImage: function(id) {
        AppDispatcher.handleAction({
            actionType: ImagesConstants.IMAGE_REMOVE,
            id: id
        })
    }
};

module.exports = ImagesActions;