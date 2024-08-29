"use client";
import Link from "next/link";

import { useCartStore } from "../store/cart";
import { Text, Button, Group } from "@mantine/core";

import "./cart.css";

export default function CartPage() {
  const cart = useCartStore((state) => state.cartItems);

  console.log(cart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * 1, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Your Digital Bookshelf</h1>
      <Text>
        Explore, Purchase, And Enjoy Your Favourite Ebooks Anytime, Anywhere
      </Text>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={4}>No items in the cart</td>
            </tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <Group>
                    <Button>-</Button>
                    <Text>{}</Text>
                    <Button>+</Button>
                  </Group>
                </td>
                <td>${(item.price * 1).toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        <Text>Subtotal: ${calculateTotal()}</Text>
        <Text>Total: ${calculateTotal()}</Text>
        <Link href={`/checkout`} className="card-link">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}
