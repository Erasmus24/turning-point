const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;