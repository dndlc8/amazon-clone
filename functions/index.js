const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HhJ01Iko0s0EsQfRmkKoaBuWUimn6QKSDnwqw23qSXiQ7vr5ATL1fVICcDggyqcskWg7aaDC3ZCexpIIdpHHSY100KrdzyCCq');

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //the following means ok-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen Command
exports.api = functions.https.onRequest(app);