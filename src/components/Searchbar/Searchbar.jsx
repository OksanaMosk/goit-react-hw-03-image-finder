// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

import { Component } from 'react';

import css from './Searchbar.module.css'

class Searchbar  extends Component {
    state = {
       value:''
    }

handleChange= ({ target: { value } }) => {
     this.setState({ value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
       this.props.handleSearch(this.state.value)
}

    
 render (){
     return (
         <header className={css.searchbar}>
             <form className={css.form} onSubmit={this.handleSubmit}>
                 <button  
                 type="submit" className={css.button}>
                 
                     <span className={css.buttonLabel}>Search</span>
                     &#128269;
                </button>

    <input
                     className={css.input}
      type="text"
      autoComplete="off"
      autoFocus placeholder="Search images and photos"
                     onChange={this.handleChange}
                     value={this.state.value}
                      name="search"
    />
  </form>
</header>
    )
 }    
}; 

export default Searchbar;