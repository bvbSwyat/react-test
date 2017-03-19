/**
 * Created by swyat on 3/19/17.
 */

var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var ImagesConstants = require('../constants/images');
var _ = require('underscore');
var _s = require('underscore.string');

var _images = {};

function loadImagesData(data) {
    _images = data;
}

function add(image) {
    var newImage = _.extend({}, image);
    newImage.name = _s.strLeft(image.name,'.');
    _images.push(newImage);
}

function removeItem(id) {
    delete _images[id];
}

var ImagesStore = _.extend({}, EventEmitter.prototype, {

    getImagesItems: function() {
        return _images;
    },

    getImagesCount: function() {
        return Object.keys(_images).length;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {

        case ImagesConstants.RECEIVE_DATA:
            loadImagesData(action.data);
            break;

        case ImagesConstants.IMAGE_ADD:
            add(action.id, action.update);
            break;

        case ImagesConstants.IMAGE_REMOVE:
            removeItem(action.id);
            break;

        default:
            return true;
    }

    ImagesStore.emitChange();

    return true;

});

module.exports = ImagesStore;