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
          <h1>Rick Sanchez</h1>
          <span>Personagem Principal</span>
        </div>

        <div className="caracteristicas">
          <Card number={99} tag={'knowleged'} />
          <Card number={75} tag={'Age'} />
        </div>

        <div className="col-wide">Um cientista alcoólatra de 70 anos extremamente inteligente que é capaz de construir máquinas e acessórios tecnológicos que o 
        permitem viajar por diversas dimensões e realidades paralelas. 
        Ele quase nunca pensa nas consequências de suas ações e possui um comportamento excêntrico e um estilo de vida niilista. </div>

        <img className="image-1 image-rick" src={require('../../Assets/Images/rick.png')} />

        <p className="destaque">É pai de Beth, sogro de Jerry e avô de Morty e Summer.</p>

        <img className="image-2 image-rick2" src={require('../../Assets/Images/rick22.png')} />

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <p>His alcoholic tendencies lead his daughter's family to worry about the safety of their son Morty. An extremely intellectual
          character that views his time as valuable</p>

        <blockquote className="citacao col-wide">
          <div>Citação</div>
        </blockquote>

        <ul className="atributo">
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

        <img className="rick-bg" src={require('../../Assets/Images/rickbg.jpg')} />
      </main>

      <aside className="anuncio">
        <div className="anuncio-item">
          <img className="img-anuncio" src={require('../../Assets/Images/caneca.jpg')} />
        </div>
        <div className="anuncio-item">
          <img className="img-anuncio" src={require('../../Assets/Images/caneca1.jpg')} />
        </div>
      </aside>

      <footer className="footer">
        <p>© 2020 PIXELS, Inc. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default HomeScreen;