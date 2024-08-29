import { AppShell, Container, Group, Button, Text } from "@mantine/core";
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';

import "./header.css";

const HeaderComponent = () => {
  return (
    <AppShell className="header">
      <Container className="headerContainer">
        <Group
          style={{ height: "100%" }}
          className="headerTitleContainer"
        >
          <Text className="logo" size="xl">
            BOOK
          </Text>
          <Text className="category">ARC</Text>
          <Button variant="outline" className="categoryButton">
            Category
          </Button>
        </Group>
        <Group className="headerNavigationContainer">
          <Text>Home</Text>
          <Text className="active">Shop</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Link href="/cart">
            <Button variant="outline" className="cartButton">
              <IconShoppingCart />
            </Button>
          </Link>
          <Button variant="outline" className="searchButton">
            <IconSearch />
          </Button>
          <Button variant="outline">Sign In</Button>
          <Button variant="filled" color="green">
            Register
          </Button>
        </Group>
      </Container>
    </AppShell>
  );
};

export default HeaderComponent;