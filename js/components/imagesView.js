/**
 * Created by swyat on 3/19/17.
 */

var React = require('react');
var ImagesActions = require('../actions/images');

var ImagesView = React.createClass({

    addImage: function(e){
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = () => {
            file.image = reader.result;
            ImagesActions.addImage(file);
        }
        reader.readAsDataURL(file);
    },

    removeImage: function(id){
        ImagesActions.removeImage(id);
    },

    render: function() {

        var self = this, images = this.props.images;
        return (
            <div>
                <div className="asd">
                    <ul>
                        {Object.keys(images).map(function(index){
                            return (
                                <li key={index}>
                                <h1 className="name">{images[index].name}</h1>
                                <img src={images[index].image} alt={images[index].name}/>
                                <button type="button" className="remove-item" onClick={self.removeImage.bind(self, index)}>Remove</button>
                            </li>
                            )
                        })}
                    </ul>
                    <span className="count">Count: {this.props.count}</span>
                </div>

                <div className="fileUpload">
                    <button>Add New</button>
                    <input className="upload" type="file" onChange={(e)=>this.addImage(e)} />
                </div>
            </div>
        );
    },

});

module.exports = ImagesView;