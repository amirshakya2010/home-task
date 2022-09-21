import React, { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import Api from '../services/api';

const ProductList = () => {
  const perPage = 10;
  const [page, setPage] = useState(1)
  const [isLoaded, setisLoaded] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => { 
    const api = new Api();
    api.getProductList({page: page, per_page: perPage})
    .then((res) => {
        setProducts([...products, ...res.data]);
        setisLoaded(true);
    })
    .catch(error => console.log('Error:', error));
  }, 
  [page])
  
    return(
      <div class="container d-flex justify-content-center mt-50 mb-50">
            
        <div class="row">
           <div class="col-md-10">
           {isLoaded ? (
                  products.map((item, key) => {
                    return (
                       <ProductItem item= {item} key = {key} />
                    );
                  })
                ) : (
                  <div>No result</div>
                )}   
                <div className="mt-5 text-center">
                  <a onClick={() => setPage(page + 1)}>Load more  <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                </div>    
          </div>                     
        </div>
    </div>
    )
}

export default ProductList;