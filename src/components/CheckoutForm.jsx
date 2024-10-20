import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount, onClose }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment('<CLIENT_SECRET_FROM_SERVER>', {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            console.error(error);
            alert('Payment failed');
            setIsProcessing(false);
        } else {
            alert('Payment successful!');
            setIsProcessing(false);
            onClose(); // Close the modal on success
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || isProcessing} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                {isProcessing ? 'Processing...' : `Pay $${amount / 100}`}
            </button>
        </form>
    );
};

export default CheckoutForm;
