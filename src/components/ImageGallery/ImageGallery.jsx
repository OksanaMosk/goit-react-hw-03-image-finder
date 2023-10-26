
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
      
    }


    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchPhoto !== this.props.searchPhoto) {
            this.setState({ isLoading: true})
                fetchPhoto(this.props.searchPhoto)
                .then((response) => response.json())
                .then((photos) => this.setState({photos: photos.hits}))   
                    .finally(() => {
                     this.setState({isLoading: false})
                 })               
            }        
          }  
   
    // fetchPhoto = async () => {
    //     try {
    //         this.setState({
    //             isLoading: true,
    //         });
    //         const { data } = await axios.get(fetchPhoto);
    //         this.setState({
    //             photos: data,
    //         })
    //     } catch (error) {
    //         this.setState({ error: error.message });
    //     } finally {
    //         this.setState({
    //             isLoading: false,
    //         });
    //     }
    // };
    


    
    render() {
        return (
            
            <div>
             {this.state.isLoading && <Loader />} 
                     <ul className={css.gallery}>
                    {this.state.photos !== null && this.state.photos.map((item) => {
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

            </div>
            
        )
            
        
    }

}
export default ImageGallery;