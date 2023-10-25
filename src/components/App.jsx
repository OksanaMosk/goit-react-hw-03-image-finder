// import { render } from "@testing-library/react";
// import fetchPhoto from './Services/api'

import { Component } from "react";
import  Searchbar  from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';

import css from './App.module.css';


export class App extends Component {
  state = {
  searchPhoto:'',
  }

  handleSearch = (searchPhoto) => {
    this.setState({ searchPhoto })
}

  render() {
  return (
   <div className={css.container}>
      <Searchbar handleSearch={ this.handleSearch} />
      <ImageGallery searchPhoto={this.state.searchPhoto} />
   </div>
  
   
  );  
  }

}
