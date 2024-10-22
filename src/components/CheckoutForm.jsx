import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ amount, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Create payment intent (in your backend function)
        const response = await fetch('http://localhost:3000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount }),
        });

        if (!response.ok) {
            setLoading(false);
            const errorData = await response.text();
            setError(`Error: ${errorData}`);
            return;
        }

        const { clientSecret } = await response.json();

        // Confirm card payment
        const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
            },
        });

        if (stripeError) {
            setError(stripeError.message);
            setLoading(false);
        } else if (paymentIntent.status === 'succeeded') {
            // Payment succeeded, pass the payment details
            onPaymentSuccess(paymentIntent);
            navigate('/reviewpage');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement 
                options={{
                    style: {
                        base: {
                            fontSize: '16px', // Adjust font size if needed
                            color: '#000', // Text color
                            padding: '10px', // Add padding for better spacing
                            width: '100%', // Set width to 100% of parent container
                        },
                        invalid: {
                            color: '#fa755a',
                            iconColor: '#fa755a',
                        },
                    },
                }} 
                className='bg-white rounded-md h-40' 
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={!stripe || loading} className="btn">
                {loading ? 'Processing...' : `Pay R${amount / 100}`}
            </button>
        </form>
    );
};

export default CheckoutForm;
