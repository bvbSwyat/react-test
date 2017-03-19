/**
 * Created by swyat on 3/19/17.
 */

window.React = require('react');
var ImagesData = require('./imagesData');
var ImagesAPI = require('./api/images');
var ImagesApp = require('./components/imagesController');


ImagesData.init();

ImagesAPI.getImagesData();

React.render(
<ImagesApp />,
    document.getElementById('react-test')
);