import React from 'react';

export const CardsInfo = () => {
    return (
        <>
            <div className="center-block">
                <div className="block">
                    <h2>КЛУБНІ КАРТИ ✨</h2>
                    <br />
                    <p>
                        Клубні карти - це вільне відвідування певної кількості будь-яких заходів на вибір🫶
                        <br />
                        <br />
                        Вартість одного заходу в нашому клубі - 350 грн.<br/> А тепер, розглянемо картки⬇️</p>
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
                            <h2>💙СИНЯ КАРТА</h2>
                            <p>
                                Дає можливість відвідати 4 заняття ✔️ <br />  <br />      
                                Вартість такої картки УСЬОГО 550 грн замість 1400 грн. <br /> <br />
                                З синьою карткою, вартість одного заняття 137 грн🔥<br /> <br />
                            </p>
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
                            <h2>❤️ЧЕРВОНА КАРТА</h2>
                            <p>
                                Дає можливість відвідати 8 занять✔️<br /><br />
                                Вартість такої картки УСЬОГО 950 грн замість 2800 грн. <br /><br />
                                З червоною карткою, вартість одного заняття 118 грн🔥<br /><br />
                            </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-center">
                <button>Придбати картку</button>
            </div>
        </>
    );
}
