import React from 'react';
import Media from './media';
import './playlist.css';
// Componente funcional

function Playlist(props) {
    return(
        <div className="Playlist">
            {
                props.playlist.map((item)=>{
                    return <Media openModal={props.handleOpenModal} {...item} key={item.id}/>
                    // return <Media title={item.title} key={item.id}/>
                })
            }
        </div>
    );

}

export default Playlist;