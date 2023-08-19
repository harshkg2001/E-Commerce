import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, PinterestShareButton,LinkedinShareButton } from 'react-share';
import "./share.css";
import twitter from "./twitter.gif" ;
import facebook from "./facebook1.gif" ;
import whatsapp from "./whatsapp1.gif" ;
import telegram from "./telegram.gif";
import pinterest from './pinterest.gif';
import linkedin from "./linkedin.gif";
const SharePopup = () => {
  const defaultShareMessage = "Hey, I'm using this App, it has a very cool collection of sneakers! Try it on -> ";

  const shareUrl = window.location.href; // You can replace this with your app's URL

  return (
    <div className="share-popup">
      <h2>Share on Social Media</h2>
      <div className="share-icons">
        <WhatsappShareButton url={shareUrl} title={defaultShareMessage}>
          <img src={whatsapp} alt="WhatsApp" className="share-icon" />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl} title={defaultShareMessage}>
          <img src={twitter} alt="Twitter" className="share-icon" />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl} title={defaultShareMessage}>
          <img src={telegram} alt="Telegram" className="share-icon" />
        </TelegramShareButton>
        
        <FacebookShareButton url={"http://www.localhost:3000/"} quote={defaultShareMessage}>
          <img src={facebook} alt="Facebook" className="share-icon" />
        </FacebookShareButton>
        <LinkedinShareButton url={"http://www.localhost:3000/"} quote={defaultShareMessage}>
          <img src={linkedin} alt="linkedin" className="share-icon" />
        </LinkedinShareButton>
        <PinterestShareButton url={"http://www.localhost:3000/"} title={defaultShareMessage}>
          <img src={pinterest} alt="Pinterest" className="share-icon" />
        </PinterestShareButton>
      </div>
    </div>
  );
};

export default SharePopup;

