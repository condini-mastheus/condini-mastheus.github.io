import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    color: ${colors.white};
    font-size: 5rem;
    line-height: 4.5rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
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
    font-size: 1rem;
  }

  p {
    color: ${colors.light};
    margin: 40px 0;
    font-size: 1.15rem;
  }
`;

export const Socials = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    width: 45px;
    height: 45px;
    background: ${colors.primary};
    margin: 0 10px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background: ${colors.secundary};
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: ${colors.white};
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      i {
        font-size: 1.35rem;
      }
    }
  }
`;
