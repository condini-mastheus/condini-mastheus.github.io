import React from 'react';

import { Container, Socials } from './styles';

const Home = () => (
  <Container>
    <div className="about-me">
      <h1>
        Matheus
        {' '}
        <span>Condini</span>
      </h1>
      <small>Indaiatuba, SP - Brasil</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero, neque, perspiciatis
        quam, adipisci reprehenderit veritatis commodi earum ipsa minima non. Aliquid atque officiis
        alias qui voluptatibus. Saepe, corporis recusandae.
      </p>
      <Socials>
        <li>
          <a
            href="https://www.linkedin.com/in/matheus-condini-498512170/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/condini-mastheus"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@matheus.condini"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <i className="fab fa-medium" />
          </a>
        </li>
        <li>
          <a
            href="https://discordapp.com/channels/condini-mastheus#5730"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
          >
            <i className="fab fa-discord" />
          </a>
        </li>
      </Socials>
    </div>
  </Container>
);

export default Home;
