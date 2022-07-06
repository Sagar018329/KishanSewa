import React, { Fragment } from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './khaltiConfig'





const Khalti = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    let checkout = new KhaltiCheckout(config);
    

    
  return (
    <Fragment>
        <button onClick={()=>checkout.show({amount:orderInfo.totalPrice*100})}>Pay Vai Khalti
            </button> 
    </Fragment>
  )
}

export default Khalti