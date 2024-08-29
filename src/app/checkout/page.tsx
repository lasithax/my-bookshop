"use client";

import { Text, Button, Group } from "@mantine/core";
import { useState } from "react";

import { useCartStore } from "../store/cart";

import { Book } from '../../constants';

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cartItems);
  const [status, setStatus] = useState("");

  console.log(cart);
  
  const handleCheckout = async () => {
    const orderDate = new Date().toISOString();
    const items = cart.map((item) => ({
      productId: item.id,
      quantity: 1, // Assuming quantity is 1 for simplicity
      price: item.price,
    }));

    const order = {
      orderDate,
      status: "test", // You can set the initial status
      items,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ORDERS_API_BASE_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      if (response.ok) {
        setStatus("Order placed successfully!");
      } else {
        setStatus("Failed to place order.");
      }
    } catch (error) {
      setStatus("Error occurred while placing order.");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Text>Your order summary:</Text>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: Book) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Group>
        <Button onClick={handleCheckout}>Place Order</Button>
      </Group>
      {status && <Text>{status}</Text>}
    </div>
  );
}
