import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.appColor};
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.959);

  &:hover {
    color: ${(props) => props.theme.appHoverColor};
    transform: scale(1.3);
    
  }
`;

