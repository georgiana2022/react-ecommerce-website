import React, { Component } from 'react';
import "./CartProduct.scss";
import { Button } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';

export class CartProduct extends Component {
  getDecimalPart = (number) => {
    if (Number.isInteger(number)) {
      return "";
    }

    const decimalString = number.toString().split('.')[1];
    return Number(decimalString);
  }

  onRemoveCartProduct = (product) => {
    product.isInCart = false;
    fetch(`https://web-development-9dc40-default-rtdb.firebaseio.com/products/${product.id}.json`, {
      method: "PATCH",
      body:JSON.stringify(product)
    }).then((data) => {
      console.log(data);
      this.props.rerenderParentCallback();
    });
  }

   render() {
    const product = this.props.product;
    const productPriceInteger = parseInt(product.price);
    return (
      <div className='cart-product-container'>

        <div className='cart-product-image-container'>
          <img src={product.image} alt='ceas'></img>
        </div>

        <div className='cart-product-info'></div>
          <div className='cart-remove-product-container'>
            <Button 
              className='cart-remove-product-button'
              onClick={() => this.onRemoveCartProduct(product)}
              >
                <FaTrashAlt size={28}></FaTrashAlt>
            </Button>
          </div>

          <div className='cart-product-brand-container'>
            <h2>{product.brand}</h2>
          </div>


        <div className='cart-product-name-container'>
            {product.name}
          </div>

          <div className='cart-price-container'>
            <h4>
              {productPriceInteger}
              <sup className='cart-price-decimals'>{this.getDecimalPart(product.price)}</sup>Lei</h4>
          </div>

        {/* <div className='add-to-cart-button-container'>
           <Button className='add-to-cart-button' color="primary" onClick={() => this.onAddToCart(product)}>Adauga in cos</Button>
        </div> */}
      </div>
    )
  }
}
