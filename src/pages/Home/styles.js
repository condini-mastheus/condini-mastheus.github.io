import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;

  h1 {
    color: ${colors.white};
    font-size: 5rem;
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -5px;
    span {
      background: ${colors.primary};
      background: -moz-linear-gradient(45deg, ${colors.primary} 5%, ${colors.secundary} 100%);
      background: -webkit-linear-gradient(45deg, ${colors.primary} 5%, ${colors.secundary} 100%);
      background: linear-gradient(135deg, ${colors.primary} 5%, ${colors.secundary} 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='${
  colors.primary
}', endColorstr='${colors.secundary}', GradientType=1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  small {
    color: ${colors.regular};
    font-size: 1em;
  }

  p {
    color: #fff;
    margin: 10px 0;
    font-size: 1em;
  }
`;
