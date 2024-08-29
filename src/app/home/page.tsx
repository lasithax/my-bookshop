"use client";

import { useEffect, useState } from "react";
import CardComponent from "../../components/card/card";
import HeaderComponent from "../../components/header/header";
import "./home.css";

export default function HomePage() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BOOK_LIST_API_BASE_URL}/api/books-list`)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBookList(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="bookList">
        {bookList.map((book, index) => (
          <div key={index} className="bookItem">
            <CardComponent book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}