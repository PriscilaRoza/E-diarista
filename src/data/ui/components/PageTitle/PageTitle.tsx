import React from "react";
import * as P from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle: string;
  // Para tornar um a props opcional: acrecente um ponto de ? na frente
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <P.PageTitleContainer>
      <P.PageTitleStyled>{props.title}</P.PageTitleStyled>
      <P.PageSubtitleStyled>{props.subtitle}</P.PageSubtitleStyled>
    </P.PageTitleContainer>
  );
};
export default PageTitle;
