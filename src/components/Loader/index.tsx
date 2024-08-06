import React from 'react';
import * as S from "./style";
import loading from "../../asset/loading.json";

const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.LottieLoader animationData={loading} loop={true} /> 
    </S.LoaderContainer>
  );
};

export default Loader;