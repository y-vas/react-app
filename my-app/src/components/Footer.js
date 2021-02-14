import React from "react";
import styled from "styled-components";

export const Footer = () => {

  return (
    <FooterContainer>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>


          </div>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-dark" href="#"> Hello World </a>
        </div>
      </footer>

    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
`;
