import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
    state = {
        value: "Luis Fonsi"
    }
    handleSubmit = event => {
        //No recargar la pagina con el input 
        event.preventDefault();
        //Obtener el valor, se podria hacer con document.getElementById
        console.log(this.input.value, "submit");

    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = (event) => {
        // Cambiar los espacios por -
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }

    render(){
        return(
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;
