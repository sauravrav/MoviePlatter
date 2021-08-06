import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Movie Platter</div>
      <ul>
        <li>
          <Link className="lii" to="/">
            About Us
          </Link>
        </li>
        <li>
          <Link className="lii" to="/popmovie">
            Popular Movies
          </Link>
        </li>
        <li>
          <Link className="lii" to="/upmovie">
            Upcoming Movies
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
const Nav = styled.div`
  color: white;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0px;
  background-color: #272525;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  .logo {
    font-size: 32px;
    font-family: "Abril Fatface", cursive;
  }
  ul {
    list-style: none;
    display: flex;
    margin-right: 32px;
    li {
      padding-left: 150px;
      a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          font-size: 25px;
          color: blanchedalmond;
        }
      }
    }
  }
  @media screen and (max-width: 712px) {
    ul {
      li {
        padding-left: 60px;
        .lii {
          font-size: 10px;
        }
      }
    }
  }
`;
export default Navbar;
