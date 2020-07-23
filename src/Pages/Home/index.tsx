import React from 'react';
import './styles.css';

import { Header } from '../../Components/header'
import { NavBar } from '../../Components/navbar'
import { Card } from '../../Components/card'
import { Ad } from '../../Components/ad'


const lstAds = [
  {
    img: <img className="img-anuncio" src={require('../../Assets/Images/caneca.jpg')} />
  },
  {
    img: <img className="img-anuncio" src={require('../../Assets/Images/caneca1.jpg')} />
  }
]

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
          <Card number={70} tag={'Age'} />
        </div>

        <div className="col-wide texto">An extremely intelligent 70-year-old alcoholic scientist who is able to build machines and technological 
        accessories that allow him to travel through different dimensions and parallel realities. He hardly ever thinks about the consequences of his actions and has eccentric behavior and a nihilistic lifestyle. </div>

        <img className="image-1 image-rick" src={require('../../Assets/Images/rick.png')} />

        <div className="destaque texto">He is Beth's father, Jerry's father-in-law and Morty and Summer's grandfather.</div>

        <img className="image-2 image-rick2" src={require('../../Assets/Images/rick22.png')} />

        <div className="texto"> He speaks in a funny and stammering way that is often interrupted by belching and gagging, 
        usually because he is drunk.</div>

        <div className="texto">He is extremely intelligent, having created many devices that never existed on Earth, but his intellectual mind is constantly being compromised by his 
        alcoholism and his own personal view of the world.</div>

        <blockquote className="citacao col-wide">
          <div className="col-wide align_text">"I know the situation can be intimidating. Look around and everything is scared and different, maybe you know ... face them, 
          advance against them like a bull - that's how we grow as people".</div>
        </blockquote>

        <ul className="atributo">
          <li>Type: Mammal</li>
          <li>Age: 70</li>
          <li>Mood: Bored</li>
          <li>Time travel: ???</li>
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
          {/* <img className="img-anuncio" src={require('../../Assets/Images/caneca1.jpg')} /> */}
          {lstAds.length > 0 && (
            lstAds.map(x => {
              return <Ad img={x.img} />
            })
          )}
        </div>
      </aside>

      <footer className="footer">
        <p>© 2020 PIXELS, Inc. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default HomeScreen;