import React from 'react';
import './styles.css';

import { Header } from '../../Components/header'
import { NavBar } from '../../Components/navbar'
import { Card } from '../../Components/card'

function HomeScreen() {
  return (
    <div className="container-home">
      <header className="header">
        <Header />
      </header>
      <nav className="sidenav">
        <NavBar />
      </nav>

      <main className="content">

        <div className="title">
          <h1>Rick ?</h1>
          <span>Personagem Principal</span>
        </div>

        <div className="caracteristicas">
          <Card number={99} tag={'knowleged'} />
          <Card number={75} tag={'Age'} />
        </div>

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <img src={require('../../Assets/Images/rick.png')} />

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <img src={require('../../Assets/Images/rick.png')} />

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <blockquote className="citacao">
          <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>
        </blockquote>

        <ul>
          <li>Tipo: Mamifero</li>
          <li>Idade: 70</li>
        </ul>

        <div className="informacoes">
          <p>
            sobre
          </p>
          <p>
            sobre2
          </p>
        </div>

        <img src={require('../../Assets/Images/rickbg.jpg')}/>
      </main>

      <aside className="anuncio">
        <div className="anuncio-item">
          img 1
        </div>
        <div className="anuncio-item">
          img 2
        </div>
      </aside>

      <footer className="footer">
        <span>Footer</span>
      </footer>

    </div>
  );
}

export default HomeScreen;