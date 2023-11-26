import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function RazorpayButton() {
    useEffect(() => {
      const rzpPaymentForm = document.getElementById("rzp_payment_form");
      
      if (!rzpPaymentForm.hasChildNodes()) {
  
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.async = true;
        script.dataset.payment_button_id = "pl_MbudTiu2uAVLj0";
        rzpPaymentForm.appendChild(script);
  
      }
  
    });
  
    return (
      <div classname="App">
  <form id="rzp_payment_form" />
  {/* <p>Please contribute to our blood bank</p> */}
</div>

    );
  }
  