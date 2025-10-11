// const Stripe = require("stripe");
require("dotenv").config();

const paymentController = async (req, res) => {
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { card, priceWithDiscount } = req.body;

    console.log(
      `🚀 ~ stripe.service.js:9 ~ paymentController ~ priceWithDiscount:`,
      priceWithDiscount
    );

    console.log(`🚀 ~ stripe.service.js:9 ~ paymentController ~ card:`, card);
    const stripeCard = card.map((e) => ({
      image: e.imageUrl,
      brand: e.brand,
      size: e.sizeCollection,
      price: e.price,
    }));

    console.log(
      `🚀 ~ stripe.service.js:19 ~ paymentController ~ stripeCard:`,
      stripeCard
    );

    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: card * 100,
    //   currency: "inr",
    //   automatic_payment_methods: { enabled: true },
    // });

    // console.log(
    //   `🚀 ~ stripe.service.js:14 ~ paymentController ~ paymentIntent:`,
    //   paymentIntent
    // );
  } catch (error) {
    console.log(`🚀 ~ stripe.service.js:5 ~ paymentController ~ error:`, error);
  }
};
module.exports = paymentController;
