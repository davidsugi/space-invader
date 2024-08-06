import Lottie from "lottie-react";
import styled from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
`;

export const LottieLoader = styled(Lottie)`
    height: 400%;
`