import github from "../../../assets/Svg/github.svg";
import FooterSC from "./FooterSC";

const Footer = () => {
  return (
    <FooterSC>
      <h2>You can also contact me via these links.</h2>
      <span>
        <a href="https://github.com/rbarisozkal/">
          <img src={github} alt="" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/barisozkall773/">
        <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
      </span>
      <div
        className="gif"
        style={{
          pointerEvents: "none",
          width: "100%",
          height: "0",
          
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/n8bAozpJjeiMU"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <h4>
        Do not ever hesitate to message me. I would be grateful to do interviews
        or discuss new technolgies for no matter what :)
      </h4>
    </FooterSC>
  );
};

export default Footer;
