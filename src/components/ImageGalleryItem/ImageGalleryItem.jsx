import css from './ImageGalleryItem.module.css'



const ImageGalleryItem = ({largeImageURL, webformatURL, tags}) => {
    
    return (
        <li className={css.imageItem}>
            <a href={largeImageURL} className={css.imageGalleryItemImage}>
                <img src={webformatURL} alt="tags"className={css.imageGalleryItem} loading="lazy"  />
            </a>
        </li>
    )
};

export default ImageGalleryItem;
