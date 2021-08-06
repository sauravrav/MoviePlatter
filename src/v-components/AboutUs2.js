//importing pictures
import whiteLight from "../imgs/whiteLight.jpg";
//importing styled components
import styled from "styled-components";
const AboutUs2 = () => {
  return (
    <About2>
      <div className="about2-image">
        <img src={whiteLight} alt="" />
      </div>
      <div className="about2-description">
        <div className="title">High Quality Service</div>
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <div className="cardEntity">
              <div className="logo">E</div>
              <div className="logoTitle">Efficient</div>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="cardEntity">
              <div className="logo">A</div>
              <div className="logoTitle">Affordable</div>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="cardEntity">
              <div className="logo">P</div>
              <div className="logoTitle">Pro Grade</div>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div className="cardEntity">
              <div className="logo">T</div>
              <div className="logoTitle">TrustWorthy</div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </About2>
  );
};
const About2 = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  .about2-image {
    margin: 140px 0px 0px 100px;
    img {
      width: 70vh;
      height: 90vh;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  .about2-description {
    margin: 240px 220px 0px 400px;
    .title {
      padding: 10px 10px 10px 5px;
      font-size: 30px;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 20px;
      .card {
        padding: 10px;
        margin: 30px 0px 30px 5px;
        border: 2px solid white;
        .cardEntity {
          display: flex;
          .logoTitle {
            margin-left: 20px;
          }
        }
      }
    }
  }
`;
export default AboutUs2;
