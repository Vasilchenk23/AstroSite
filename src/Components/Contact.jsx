import React from 'react';

export const Contact = () => {
  const mapLink = 'https://www.google.com/maps/dir//Асто+кавʼярня/@50.0115903,36.2268943,21z/data=!4m15!1m8!3m7!1s0x4127a1216d625bcf:0x748c0d0fa8f58f55!2sNauky+Ave,+7,+Kharkiv,+Kharkivs%27ka+oblast,+61058!3b1!8m2!3d50.0112209!4d36.2271063!16s%2Fg%2F11rgdlfd1m!3m5!1s0x4127a1003a4d2b79:0xb0f837850c9553e3!8m2!3d50.0115903!4d36.2270556!16s%2Fg%2F11vy8c6z88?authuser=0&entry=ttu';

  return (
    <>
      <div className="contact">
        <div className="line"></div>
        <h2>КОНТАКТИ</h2>
        <div className="line"></div>
      </div>

      <footer>
        <div className="map" style={{ textAlign: 'center' }}>
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=50.0115903,36.2270556&zoom=15&size=673x582&maptype=roadmap&markers=color:red%7Clabel:A%7C50.0115903,36.2270556&key=AIzaSyB8vSBnYvIpKJErN1l1Oaqm24SlZDGQ6YI"
              alt="Astro Club Location"
              style={{
                width: '100%',
                height: '582px',
                borderRadius: '30px',
                display:'flex',
                margin:'0 auto'
              }}
            />
          </a>
        </div>

        <div className="footer-right">
          <h2>Слідуйте:</h2><br />
          <p>📍Проспект Науки 7 </p><br />
          <p>Перша Астро-кавʼярня у Харкові тут:</p><br />
          <p>Astro Club — це твій простір для розвитку особистості, нових знайомств та пошуку себе.😘</p>
          <br />
          {/* <p className='copyright'>@ Astroclub 2024</p> */}
        </div>
      </footer>
    </>
  );
};
