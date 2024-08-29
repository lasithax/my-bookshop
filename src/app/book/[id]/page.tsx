"use client"; // Ensure this is the very first line

import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

import HeaderComponent from "../../../components/header/header";
import { useBookStore } from "../../store/book";
import { useCartStore } from "../../store/cart";

import "./book.css";

export default function BookDetailPage() {
  const [book, setBook] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const selectedBookId = useBookStore((state: any) => state.selectedBookId);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BOOK_DETAILS_API_BASE_URL}/api/book-details/${selectedBookId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedBookId]);

  const addToCart = useCartStore((state) => state.addItemToCart);

  console.log(cartItems);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <HeaderComponent />
      <div className="book-detail">
        <h1>{book.title}</h1>
        <img src={book.imagePath} alt={book.title} />
        <p>Author: {book.author}</p>
        <p className="price">${book.price}</p>
        <p className="rating">
          Rating: {Array.from({ length: book.rating }, (_, index) => "★")}
        </p>
        <div className="button-container">
          <Button
            onClick={() => {
              addToCart(book);
              console.log(
                "Cart items after adding:",
                useCartStore.getState().cartItems
              );
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
