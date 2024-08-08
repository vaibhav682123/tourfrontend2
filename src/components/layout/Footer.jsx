import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>TourStack</h2>
        <p>Out motivation is your's health</p>
        <br />
        <em>Feedbacks are welcomed</em>
        <strong>All right received @tourstack</strong>
      </div>

      <aside>
        <h4>Follow us</h4>
        <a href="https://instagram.com/vaibhavxkhandelwal"><AiFillInstagram/></a>
        <a href="https://github.com/vaibhav980"><AiFillGithub/></a>
        <a href="https://youtube.com/youtube"><AiFillYoutube/></a>

      </aside>
    </footer>
  );
};

export default Footer;
