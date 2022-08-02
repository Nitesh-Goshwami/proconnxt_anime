import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../device';

export const FooterContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 10px;
  background-color: #354259;
  padding: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

@media ${device.mobileS} {
  margin-bottom: 50px;

}
@media ${device.mobileM} {
  margin-bottom: 50px;

}
@media ${device.mobileL} {
  margin-bottom: 50px;

}
@media ${device.tablet} {
  margin-bottom: 25px;

}
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
   color: rgb(169,241,153);

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 500px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 60%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 240px;
  @media screen and (max-width: 820px) {
    display: grid;
    grid-template-columns: 50% 50%;
    gap:20px;
    width: 100%;
  }
`;