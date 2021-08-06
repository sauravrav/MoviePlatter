import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Movie Platter</div>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/popmovie">Popular Movies</Link>
        </li>
        <li>
          <Link to="/upmovie">UpcomingMovies</Link>
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
`;
export default Navbar;
