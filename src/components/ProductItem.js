import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProductItem = (props) => {
  const key   = props.key;
  const item = props.item;

  const inge = item.ingredients.malt.map(item => {
    return item.name + ' ';
})


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Ingredients: {inge}
    </Tooltip>
  );


  return(
    <div class="card card-body mt-3">
      <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
          <div class="mb-3 mb-lg-0 card-img text-center">
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <img src={item.image_url}  height="150" alt="" />  
              </OverlayTrigger> 
          </div>

          <div class="media-body">
              <h3 class="media-title font-weight-semibold">
              {item.name}
              </h3>

              <p class="mb-3 color">{item.tagline} </p>
              <p class="mb-3">{item.description} </p>

          </div>

          
      </div>
  </div>
    
  )
}

export default ProductItem