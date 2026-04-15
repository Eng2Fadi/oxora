import Stripe from "stripe";
import { env, hasStripe } from "./env";

let stripe: Stripe | null = null;

export function getStripeClient() {
  if (!hasStripe()) return null;
  if (!stripe) {
    stripe = new Stripe(env.stripeSecretKey!);
  }
  return stripe;
}
