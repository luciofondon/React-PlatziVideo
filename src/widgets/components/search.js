import React from 'react';
import './search.css';
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