import React from "react";

const Footer = () => {
  return (
    <div className="footer-container bg-[#EFEFEF]">
      <div className="footer-wrapper max-w-[1140px] flex flex-col items-center gap-6 mx-auto pt-10">
        <div className="footer-heading text-3xl font-bold tracking-widest">
          DNOCAT
        </div>
        <div className="footer-legal flex text-sm gap-6 font-light">
          <div>
            <p>Ödeme</p>
          </div>
          <div>
            <p>KVKK</p>
          </div>
          <div>
            <p>İletişim</p>
          </div>
          <div>
            <p>Hakkımızda</p>
          </div>
        </div>
        <div className="footer-copyright text-xs py-8">
          <p>Copyright © 2022 DNOCAT. Powered by Dino</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
