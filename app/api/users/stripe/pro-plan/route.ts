import { proPlan } from "@/config/subscriptions";
import { stripe } from "@/lib/stripe";


export async function GET(req: Request) {
    try {
        // get plan information from stripe using proPlan.stripePriceId
        const stripePriceId = proPlan.stripePriceId;
        const stripePrice = await stripe.prices.retrieve(stripePriceId);
        // return plan information
        return new Response(JSON.stringify({ stripePrice }), { status: 200 });
    }
    catch (error) {
        return new Response(null, { status: 500 });
    }
}