/**
 * Created by swyat on 3/19/17.
 */

var ImagesActions = require('../actions/images');

module.exports = {

    getImagesData: function() {
        var data = JSON.parse(localStorage.getItem('images'));
        ImagesActions.receiveImages(data);
    }
};