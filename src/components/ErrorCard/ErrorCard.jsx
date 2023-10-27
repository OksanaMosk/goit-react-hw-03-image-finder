import css from './ErrorCard.module.css'


const ErrorCard = () => {
    return (   
        <div className={css.err}>
            <p className={css.errorCard}>
                Oooops...Some error occured...
            </p>
      </div>  
) 

}
  
export default ErrorCard;