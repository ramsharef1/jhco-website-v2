// Stripe Payment Integration
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function createDonationPaymentIntent(
  amount: number,
  currency: string = 'usd',
  metadata?: Record<string, string>
) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        type: 'donation',
        ...metadata,
      },
    });
    return { success: true, clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error('Stripe error:', error);
    return { success: false, error: String(error) };
  }
}

export async function createRecurringDonation(
  customerEmail: string,
  amount: number,
  interval: 'month' | 'year' = 'month'
) {
  try {
    // Create customer
    const customer = await stripe.customers.create({
      email: customerEmail,
      metadata: { type: 'donor' },
    });

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'JHCO Monthly Donation',
            } as any,
            recurring: { interval },
            unit_amount: Math.round(amount * 100),
          } as any,
        },
      ],
    } as any);

    return { success: true, subscriptionId: subscription.id };
  } catch (error) {
    console.error('Subscription error:', error);
    return { success: false, error: String(error) };
  }
}

export async function retrievePaymentIntent(paymentIntentId: string) {
  try {
    return await stripe.paymentIntents.retrieve(paymentIntentId);
  } catch (error) {
    console.error('Retrieve error:', error);
    return null;
  }
}
