
import React, { useContext,useState,useEffect } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2'
const Checkoutform = ({id,amount,quantity,_id}) => {
    const [error,setError] = useState('')
    const [clientSecret,setClientSecret] = useState('')
    const [transactionId,setTransectionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // const tranId = new ObjectId().toString()
    const tranId = Math.random() * 100
    
    useEffect(()=>{
     
          axiosPublic.post('/create-payment-intent',{totalprice: amount})
          .then(res=>{
             console.log(res.data.clientSecret)
             setClientSecret(res.data.clientSecret)
             
          })
         
      },[axiosPublic])

      const handleSubmit = async(event)=>{
        event.preventDefault()
        document.getElementById(id).close();
        if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
             console.log('payment error',error)
             setError(error.message)
          }
          else{
             console.log('paymnet method',paymentMethod)
             setError('')
          }
          const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
               card:card,
               billing_details:{
                 email:user?.email || 'anonymous',
                 name: user?.displayName || 'anonymous'
    
               }
            }
        })
        if(confirmError){
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `${confirmError.message}`,
              showConfirmButton: false,
              timer: 1500
            });
          }
          else{
            if(paymentIntent.status === 'succeeded'){

               const saveData = {amount:amount, email:user?.email,quantity:quantity,paymnetId:tranId,status:"success", id:_id}
               setTransectionId(paymentIntent.id,saveData)
               axiosPublic.post('/Moneysave',saveData)
               .then(()=>{
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Payment is success`,
                  showConfirmButton: false,
                  timer: 1500
                });
               })
            }
         }

      }
      

    return (
        <div>
        <form onSubmit={handleSubmit} className='p-6'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-sm w-full btn-primary my-4" disabled={!stripe || !clientSecret} type="submit">
          Pay
        </button>
    </form>
       </div>
    );
};

export default Checkoutform;