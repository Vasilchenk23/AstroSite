import React from 'react';

const speakers = [
  { 
    image: './img/spikers/bg.png', 
    name: 'Тетяна Семенова', 
    title: 'астролог, психолог, нумеролог' 
  },
  { 
    image: './img/spikers/bg (1).png', 
    name: 'Ангеліна Царькова', 
    title: 'сакральна геометрія, таро' 
  },
  { 
    image: './img/spikers/bg (2).png', 
    name: 'Лілія Даниленко', 
    title: 'косметолог' 
  },
  { 
    image: './img/spikers/bg (3).png', 
    name: 'Тамара Хомуленко', 
    title: 'психолог, психосомат' 
  },
  { 
    image: './img/spikers/bg (4).png', 
    name: 'Наталія Тюкіна', 
    title: 'туризм, видавництво, мандрівки' 
  },
  { 
    image: './img/spikers/bg (5).png', 
    name: 'Тетяна Ковріжкіна', 
    title: 'візажист, броуист, стилист' 
  },
  { 
    image: './img/spikers/bg (6).png', 
    name: 'Любов Мовчан', 
    title: 'провідник по цвяхостоянню, ароматолог' 
  },
  { 
    image: './img/spikers/bg (7).png', 
    name: 'Елізавета', 
    title: 'член асоціації психологів та сексологів' 
  },
  { 
    image: './img/spikers/bg (8).png', 
    name: 'Вікторія Хондак', 
    title: 'колорист-перукар' 
  }
];

export const Speakers = () => {
  return (
    <>
      <div className="contact">
        <div className="line"></div>
        <h1>Cпікери</h1>
        <div className="line"></div>
      </div>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="image-container">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <div className="overlay">{speaker.title}</div>
            </div>
            <h3 className="speaker-name">{speaker.name}</h3>
          </div>
        ))}
      </div>
      <div className="contact">
      <div className="line"></div>
          <div className="button-container">
            <button className="oval-button">Придбати картку</button>
          </div>
      <div className="line"></div>
    </div>
    </>
  );
};
