import styled, {css, keyframes} from 'styled-components';

const fullPage = css`
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  ${fullPage}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BLURAMT= "1vw"
export const ImgBg = styled.img`
  ${fullPage}
  position: absolute;
  left:0;
  top:0;
  object-fit: cover;
  z-index: 0;
  -webkit-filter: blur(${BLURAMT});
    -moz-filter: blur(${BLURAMT});
    -o-filter: blur(${BLURAMT});
    -ms-filter: blur(${BLURAMT});
    filter: blur(${BLURAMT}) brightness(0.5);
`;

export const Header = styled.span`
    font-size: 5vw;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 900;
    color: white;
`;

export const SubHeader = styled.span`
    font-size: 2vw;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 200;
    color: white;
    margin-bottom: 2vw;
`;

export const Input = styled.input`
  width: 30%; /* Adjust width as needed */
  padding: 2vw;
  border: 1px solid #ccc;
  border-radius: 20vw; /* Adjust the radius to make it more or less rounded */
  font-size: 1rem;
  transition: 0.4s;

  /* Optional: Additional styles */
  &:focus {
    border-color: #007bff;
    outline: none;
    transition: 0.4s;
    border-width: 0.3vw;
  }

  &:focus + div {
    opacity: 1;
    transition: 1s;
    margin-top: 2vw;
  }
  &::placeholder {
      transition: opacity 0.3s;
 }
  &:focus::placeholder {
      opacity: 0;
    }
`;

export const HelpText = styled.div`
  opacity: 0;
  transition: 1s;
  margin-top: -1vw;
  font-size: 0.875rem;
  color: white;
`;


export const Button = styled.button`
    width: 8vw;
    overflow: hidden;
    height: 3vw;
    background-color: #212427;
    appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      border-radius: 0.5vw;
      margin: 1vw;
      color: white;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      transition: .4s;
      span {
         margin: 1vw;
      }
    &:hover {
      background-color: #0056b3;
      transition: .4s;
    }
    font-size: 1vw;
`;

export const Link = styled.span`
    color: white;
    cursor: pointer;
    transition: .4s;
    &:hover {
      color: #007bff;
      transition: .4s;
    }
`;

const ZoomIn = keyframes`
    to {
        height: 30%;
        scale:1;
    }
`

export const Picture = styled.img`
    border-radius: 50%;
    margin-bottom: 1vw;
    scale:0;
    height: 0%;
    animation: ${ZoomIn} 1s ease-in-out forwards;
`;


export const BottomSegment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
