import type { RequestEvent } from '@sveltejs/kit';
import invoices from '$lib/invoices.json';

export interface Category {
  id?: string;
  customer_name?: string;
  items?: { name: string, quantity: number, price: number }[]
}

export async function load({ fetch, params }: RequestEvent): Promise<{ invoice: Category[]}> {
  return {
    invoice: invoices as Category[] // return the invoice if found, or null if not found
  };
}
