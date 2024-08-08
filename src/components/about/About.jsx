import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>TousStack</h4>
          <p>
         Supplements at genuine rates
          </p>

          <p>
        Multiple flavoured healthy supplements available
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Vaibhav Khandelwal</h3>
            </div>

            <p>
           wish you a healthy and long life 
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
