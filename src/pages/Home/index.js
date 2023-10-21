import React from "react";
import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/Banner";
const prodcuts = [
  { id: "p1", name: "Product one", price: 300 },
  { id: "p2", name: "Product Two", price: 400 },
  { id: "p3", name: "Product Three", price: 500 },
  { id: "p4", name: "Product Four", price: 600 },
  { id: "p5", name: "Product Five", price: 700 },
];
const Home = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div className="home">
      <Banner />
      <Container className="container py-4">
        <ul className="list-group row ">
          {prodcuts.map((item) => (
            <li className="list-group-item col-md-4">
              <Link to={`/prodcuts/${item.id}`}>
                <h3>{item.name}</h3>
                <div>{item.price}</div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Home;
