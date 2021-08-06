import styled from "styled-components";
const AboutUs3 = () => {
  return (
    <About3>
      <section className="faqSection">
        <h1>
          Any more questions <br />
          <span>FAQ</span>
        </h1>
        <main className="question">
          <h2>How does it work?</h2>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
          <div className="line"></div>
        </main>
        <main className="question">
          <h2>Can i download movies?</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          <div className="line"></div>
        </main>
        <main className="question">
          <h2>Can i watch foreign tv shows</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="line"></div>
        </main>
        <main className="question">
          <h2>What's special about this site</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            quidem.
          </h3>
          <div className="line"></div>
        </main>
      </section>
    </About3>
  );
};
const About3 = styled.section`
  color white;
  margin:120px 100px 0px 100px;
  h1{
    font-size:40px;
    span{
      font-size:50px;
      color:hotpink;
    }
  }
  .question{
    h2{

    }
    h3{

    }
    .line{
      background:whitesmoke;
      height:0.4rem;
      margin:2rem 0rem;
      width:100%;
    }
  }
`;
export default AboutUs3;
