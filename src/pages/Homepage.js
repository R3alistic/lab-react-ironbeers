import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Homepage() {
  return (
    <div>
      <Link to="/beers">
        <img src={beers} alt="" />
        <h2>All Beers</h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, beatae
        minus vero, iure a quas reprehenderit error reiciendis amet consequatur
        omnis totam aut cumque nam facilis fuga dolor aperiam nesciunt?
      </p>

      <Link to="/random-beer">
        <img src={randomBeer} alt="" />
        <h2>Random Beer</h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error
        labore quidem! Optio praesentium maiores quaerat fugit, in
        necessitatibus blanditiis saepe ab vero facilis placeat et autem
        suscipit harum omnis!
      </p>

      <Link to="/new-beer">
        <img src={newBeer} alt="" />
        <h2>New Beer</h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate architecto ullam, cumque culpa tenetur? Nulla, dicta et?
        Voluptatem perspiciatis sequi libero voluptate neque ratione amet
        asperiores in facere ea?
      </p>
    </div>
  );
}

export default Homepage;