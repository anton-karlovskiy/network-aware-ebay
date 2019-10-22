
import React, { useState } from 'react';

import MagnificProduct from '../MagnificProduct';
import ProductSummary from './ProductSummary';
import './center-panel-internal.css';
import AaQAAOSwawpXqRI0_400 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l400.jpg';
import AaQAAOSwawpXqRI0_1600 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l1600.jpg';

const CenterPanelInternal = () => {
  const [isHoverOnProduct, setIsHoverOnProduct] = useState(false);

  const hoverOnProductHandler = () => {
    setIsHoverOnProduct(!isHoverOnProduct);
  };
  return (
    <div className='center-panel-internal'>
      <div className='picture-panel'>
        <MagnificProduct
          hoverOnProduct={hoverOnProductHandler}
          altMessage="Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11"
          smallImageSrc={AaQAAOSwawpXqRI0_400}
          largeImageSrc={AaQAAOSwawpXqRI0_1600}
          externalRender={{
            enlargedImagePortalId: 'enlarged-picture-panel',
            enlargedImageContainerDimensions: isHoverOnProduct ? {
              width: '185%',
              height: '120%'
            } : {
              width: 0,
              height: 0
            }
          }} />
      </div>
      <div
        id='enlarged-picture-panel'
        className={`picture-sibling-panel ${!isHoverOnProduct ? 'display-none' : ''}`} />
      <div className={`picture-sibling-panel ${isHoverOnProduct ? 'display-none' : ''}`}>
        <ProductSummary />
      </div>
    </div>
  );
};

export default CenterPanelInternal;
