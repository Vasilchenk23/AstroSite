import React from 'react';

export const CardsInfo = () => {
    return (
        <>
            <div className="center-block">
                <div className="block">
                    <h2>ПРИДБАТИ КАРТУ</h2>
                    <p>для придбання картки Ви можете сплатити онлайн і прислати скрин в особисті <br /> разове відвідування 350 грн  </p>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="front">
                        <img src="./img/cards/card1.png" alt="Card 1 Front" />
                    </div>
                    <div className="back">
                        <div className="card-text">
                            <div className="card-info">
                            <h2>Синя карта</h2>
                            <p>кількість занять: 4 </p>
                            <p>вартість курсу:   550 грн замість 1400 грн</p>
                            <p>вартість одного заняття: 137 грн</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="front">
                        <img src="./img/cards/card2.png" alt="Card 2 Front" />
                    </div>
                    <div className="back">
                        <div className="card-text">
                           <div className="card-info">
                            <h2>Червона карта</h2>
                            <p>кількість занять: 8 </p>
                            <p>вартість курсу:   950 грн замість 2800 грн</p>
                            <p>вартість одного заняття: 118 грн</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-center">
                <button>оформити підписку</button>
            </div>
        </>
    );
}
