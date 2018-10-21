import React, {PureComponent} from 'react';
import PropTypes  from 'prop-types';

import './media.css';
class Media extends PureComponent{
    constructor(props){
        super(props);
        // Las propiedades this.props son inmutables
        this.state = {
            author: props.author
        }
        //1. Enlazar el evento del click con la clase Media para que pueda usar this.props (ES6)
        //this.handleClick = this.handleClick.bind(this);
    }

    /*handleClick(event){
        console.log(event)
        console.log(this.props.title)
    }*/

    //2. Enlazar el evento del click con la clase Media para que pueda usar this.props (ES7)
    // Los arrow function heredan el contexo de su padre
    handleClick = (event) => {
        console.log(event)
        console.log(this.props.title)
        // Cambiar el author
        // Con this.state.author = "XXXX"; no se podria y hay
        /*this.setState({
            author: 'Nuevo nombre'
        });*/
        this.props.openModal(this.props);
    }

    render(){
        /*const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        };
        style={styles.container}
        */
        
        // const {title, author, image} = this.props;
        // <div className="Media" onClick={this.handleClick}>

        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img src={this.props.cover} alt="" width={240} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author} </p>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;