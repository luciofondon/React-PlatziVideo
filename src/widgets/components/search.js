import React from 'react';
import './search.css';
import { Prompt } from 'react-router';
/*function Search(props){
    return(
        <form action=""></form>
    )
}*/

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <Prompt 
            when={props.prompt}
            message="¿Estás seguro de querer dejar la página?"
        />
        <input 
            className="Search-input" 
            ref={props.setRef} 
            placeholder="Busca tu video favorito" 
            type="text" 
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;