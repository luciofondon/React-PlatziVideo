import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component{
    state = {
        value: "Luis Fonsi",
        prompt: false
    }
    handleSubmit = event => {
        //No recargar la pagina con el input 
        event.preventDefault();
        //Obtener el valor, se podria hacer con document.getElementById
        console.log(this.input.value, "submit");

        // Si la busqueda va a trave de una api
        /*fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)={
            this.props.actions.searchEntities(this.input.value);
        })*/
  
        this.props.dispatch({
            type: "SEARCH_VIDEO",
            payload: {
                query: this.input.value
            }
        })

    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = (event) => {
        // Cambiar los espacios por -
        this.setState({
            value: event.target.value.replace(' ', '-'),
            prompt: !!(event.targe.value.length)
        })
    }

    render(){
        return(
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
                prompt={this.state.prompt}
            />
        )
    }
}

export default connect()(SearchContainer);
