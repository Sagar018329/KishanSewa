import React, { Fragment } from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './khaltiConfig'

const Khalti = () => {
    let checkout = new KhaltiCheckout(config);
  return (
    <Fragment>
        <button onClick={()=>checkout.show({amount: 1000})}>Pay Vai Khalti
            </button> 
    </Fragment>
  )
}

export default Khalti