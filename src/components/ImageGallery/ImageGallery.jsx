
import React from 'react';
import { Component } from 'react';
import { fetchPhoto } from '../Services/FetchPhoto';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Loader from '../Loader/Loader';


class ImageGallery extends Component {
    state = {
        photos: null,
        isLoading: false,
  error: null,
    }

    componentDidUpdate(prevProps, prevState) {

            if (prevProps.searchPhoto !== this.props.searchPhoto) {
                fetchPhoto(this.props.searchPhoto)
                .then((response) => response.json())
                .then((photos) => this.setState({photos: photos.hits}))   
                                
            }        
          }  
   
    fetchPhoto = async () => {
       try {
    this.setState({
        isLoading: true,
    });
} catch (error) {
    this.setState({ error: error.message });
} finally {
    this.setState({
        isLoading: false,
    })
} 
    }
    


    
    render() {
        const { photos } = this.state 
        
        return (
            
            <div>
             {this.setState.isLoading=true && <Loader/>} 
                     <ul className={css.gallery}>
                    {photos !== null && photos.map((item) => (


            <ImageGalleryItem
                key={item.id}
                webformatURL={item.webformatURL}
                largeImageURL={item.largeImageURL}
                tags={item.tags}
           />
                    )
                    )
                    }
                </ul>
                
                <div className={css.more}>
                    <button type="button" className={css.moreButton}>Load more</button>
                </div>

            </div>
            
        )
            
        
    }

}
export default ImageGallery;