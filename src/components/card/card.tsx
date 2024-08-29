import { Card, Text } from "@mantine/core";
import Link from "next/link";

import { Book } from '../../constants';
import { useBookStore } from '../../app/store/book';

import "./card.css";

const CardComponent = ({ book }: { book: Book }) => {

  return (
    <Link
      href={`/book/${book.id}`}
      onClick={() => useBookStore.getState().setSelectedBookId(book.id)}
      className="card-link"
    >
      <Card className="card">
        <div className="image">
          <img src={book.imagePath} alt={book.title} />
        </div>
        <Text className="title">{book.title}</Text>
        <Text className="author">By {book.author}</Text>
        <Text className="price">{book.price}</Text>
        <Text className="rating">
          {Array.from({ length: book.rating }, (_, index) => "★")}
        </Text>
      </Card>
    </Link>
  );
};

export default CardComponent;
