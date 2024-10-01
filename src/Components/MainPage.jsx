export const MainPge = () => {
    return(
        <>
        <header>
            <div className="logo">
                <img src="./img/deco/logo.png" alt="" />
            </div>
            <div className="header-block">
                <ul>
                    <li>Про нас</li>
                    <li>Спiкери</li>
                    <li>Клубнi карти</li>
                    <li>Вiдгуки</li>
                    <li>Контакти</li>
                </ul>
            </div>
        </header>
        <div className="center-block">
            <div className="block">
                <h1 className="center-block-h1">ASTROCLUB</h1>
                <p className="center-block-page">твій простір для розвитку особистості,<br /> знайомств та пошуку себе</p>
                <button>Отримати <br /> консультацiю</button>
            </div>
        </div>
        <div className="callback-block">
            <a href="https://t.me/AstroClubKh_bot" rel="noreferrer" target="_blank">
                <img src="./img/deco/Component 1.png" alt="" />
            </a>
        </div>
        </>
    );
}