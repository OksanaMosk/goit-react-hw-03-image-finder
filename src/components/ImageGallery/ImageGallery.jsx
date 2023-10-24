import { Component } from 'react';
import css from './ImageGallery.module.css';
import { fetchPhoto } from '../Services/FetchPhoto';

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
        
            return(<div>
                <ul className={css.gallery}>
                    {photos && photos.map((item) => {
                        return <li key={item.id} className={css.imageItem}>
                            <a href={item.largeImageURL} className={css.imageGalleryItemImage}>
                                <img src={item.webformatURL} alt={item.tags} className={css.imageGalleryItem} loading="lazy"/>
                            </a>
                        </li>
})}
</ul>
            </div>)
            
        
    }

}
export default ImageGallery;