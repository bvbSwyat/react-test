/**
 * Created by swyat on 3/19/17.
 */

var React = require('react');
var ImagesStore = require('../stores/images');
var ImagesList = require('./imagesView');

function getImagesState() {
    return {
        imagesItems: ImagesStore.getImagesItems(),
        imagesCount: ImagesStore.getImagesCount(),
    };
}

var ImagesApp = React.createClass({

    getInitialState: function() {
        return getImagesState();
    },

    componentDidMount: function() {
        ImagesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ImagesStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="images-list">
                <ImagesList images={this.state.imagesItems} count={this.state.imagesCount}/>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getImagesState());
    }

});

module.exports = ImagesApp;