import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        modalVisible: false,
        handleError: false
    }

    handleOpenModal = (media) =>{
        this.setState({
            modalVisible: true,
            media
        });
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false
        });
    }
    
    // Pintar el modal cuando elijo un video random de otra vista y redirijo la ruta
    componentDidMount(){
        const search = this.props.location.search;
        if(search){
            const id = search.split("=")[1];
            this.handleOpenModal(id)
        }
    }

    //Sin redux: categories={this.props.data.categories}
    render(){
    
        return(
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories 
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay={false}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
            
                </HomeLayout>
            </HandleError>
        )
    }
}

//Redux
function mapStateToProps(state, props){
    return{
        categories: state.data.categories,
        search: state.search
    }
}

export default connect(mapStateToProps)(Home);