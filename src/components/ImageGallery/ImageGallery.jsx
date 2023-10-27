
import React from 'react';
import { Component } from 'react';
import { fetchPhoto } from '../Services/FetchPhoto';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Loader from '../Loader/Loader';



class ImageGallery extends Component {
    state = {
        photos: null,
        isLoading: false,
        error: null,
      status: 'idle',
    }


    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchPhoto !== this.props.searchPhoto) {
            this.setState({ status: 'pending' })
                fetchPhoto(this.props.searchPhoto)
                .then((response) => response.json())
                    .then((photos) => this.setState({ photos: photos.hits, status:'resolved'})) 
                    .catch((error) => {
                    this.setState({error: error.message, status: 'rejected'})
                })
            
                    .finally(() => {
                     this.setState({isLoading: false})
                 })               
            }        
          }  
   
    
    
    render() {
        if (this.state.status === 'pending') return (
            <div> <Loader /> </div>
        )
        if (this.state.status === 'resolved') return (       
             <div>
              <ul className={css.gallery}>
                    {this.state.photos.map((item) => {
                        return (
                            <ImageGalleryItem
                            key={item.id}
                            webformatURL={item.webformatURL}
                            largeImageURL={item.largeImageURL}
                            tags={item.tags}
                        />)
                        
                    }
                    )
                    }
                </ul>
                <div className={css.more}>
                    <button type="button" className={css.moreButton}>Load more</button>
                </div>
            </div>)
            
        else if (this.state.status === 'rejected') return <ErrorCard/>
      

   
    }
}
export default ImageGallery;