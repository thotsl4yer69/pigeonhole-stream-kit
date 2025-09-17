const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { deviceType } = JSON.parse(event.body || "{}");
    
    const priceMap = {
      firestick: process.env.VITE_STRIPE_BASIC_PRICE,
      firestick4k: process.env.VITE_STRIPE_STANDARD_PRICE,
      firecube: process.env.VITE_STRIPE_ENTERPRISE_PRICE,
      pi: process.env.VITE_STRIPE_GOV_PRICE,
    };
    
    const price = priceMap[deviceType];
    if (!price) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: 'Invalid product' }) 
      };
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    return { 
      statusCode: 200, 
      body: JSON.stringify({ id: session.id, url: session.url }) 
    };
  } catch (e) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: e.message }) 
    };
  }
};