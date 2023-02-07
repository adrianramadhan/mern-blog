import React from 'react';
import './footer.scss';
import {
  CodingLogo,
  ICDiscord,
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICTelegram,
  ICTwitter,
} from '../../../assets';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img
        className="icon-medsos"
        src={img}
        alt="icon"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img
            className="logo"
            src={CodingLogo}
            alt="logo"
          />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICInstagram} />
          <Icon img={ICTelegram} />
          <Icon img={ICDiscord} />
          <Icon img={ICGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2022 - 2023 Shyzu Developer All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;
