import { Component } from 'react';

import { fetchPhoto } from '../Services/FetchPhoto';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import css from './ImageGallery.module.css';


class ImageGallery extends Component {
    state = {
        photos: null,
  
    }
   
    
    
    componentDidUpdate(prevProps, prevState) {

            if (prevProps.searchPhoto !== this.props.searchPhoto) {
                fetchPhoto(this.props.searchPhoto)
                .then((response) => response.json())
                .then((photos) => this.setState({photos: photos.hits}))   
                                
            }        
          }  
         

    
    render() {
        const { photos } = this.state 
        
        return (
            
         <div>
                     <ul className={css.gallery}>
                    {photos && photos.map((item) => (


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