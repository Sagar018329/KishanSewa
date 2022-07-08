import myKey from "./khaltiKey";
import axios from "axios";

var Details= JSON.parse(localStorage.getItem('cartItems'));
const config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "123",
  productName:"ABC",
  productUrl: "https://localhost:3000",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      
      let data = {
        token: payload.token,
        amount: payload.amount,
      };
      console.log(payload.token);
      let config = {
        headers: {'Authorization': myKey.secretKey}
    };

    axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
        console.log(response.data);
        
       
    })
    .catch(error => {
        console.log(error);
    });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;


