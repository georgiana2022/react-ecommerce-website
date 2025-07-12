import { Component } from "react";
import { Header } from '../Header/Header';
import {MainMenu} from '../MainMenu/MainMenu'
import { Product } from '../Product/Product';
import './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchQuery: ""
    };
    console.log(this.state.products)
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    fetch(`https://web-development-9dc40-default-rtdb.firebaseio.com/products.json`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {
      const products = [];
      console.log(products)
      Object.keys(data).forEach((key) => {
        data[key].id = key;
        console.log(key);
        products.push(data[key])
      })
      console.log(products);

      this.setState({
        products
      })
    })
  }

  rerenderParentCallback() {
    this.getAllProducts();
    this.forceUpdate();
  }

  searchProducts = (value) => {
    
    fetch(`https://web-development-9dc40-default-rtdb.firebaseio.com/products.json`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {
      const products = [];
      console.log(products);
      Object.keys(data).forEach((key) => {
        data[key].id = key;
        products.push(data[key]);
      })

      const searchProducts = products
      .filter(product => 
        value && 
        (`${product.name}`.toLowerCase().search(value.toLowerCase()) > -1 ||
      `${product.brand}`.toLowerCase().search(value.toLowerCase()) > -1));
      
      console.log(searchProducts)
      
      this.setState({
        products: searchProducts,
        searchQuery: value
      })
    })    
  }

  render() {
    const cartCountItems = this.state.products.filter(product => product.isInCart).length;
    localStorage.setItem("cartCountItems", cartCountItems);
    
    const gender = localStorage.getItem("gender");
    const category = localStorage.getItem("category");
    const products = this.state.products && this.state.products
    .filter(product => product.gender === gender && (category === null || product.category === category))
    .map((product, index) =>
      <Product key={index} product={product} rerenderParentCallback={this.rerenderParentCallback}/>
    );
    console.log(products)
 
    return (
      <div className="home-container">
        <Header cartCountItems={cartCountItems} searchProducts={this.searchProducts} rerenderParentCallback={this.rerenderParentCallback}/>
        <MainMenu rerenderParentCallback={this.rerenderParentCallback}/>
          <div className="products-container">
            {products}
          </div>
      </div>
    )
  }
}