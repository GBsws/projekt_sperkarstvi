import './style.css'
export const ContactsPage = () => {
  return (

    <main className="texty">
      <h2>Kontakt</h2>
      <p>
        Jitka Poláková<br></br>
        IČ: 73410713<br></br>
        e-mail:jitkapfau@email.cz
      </p>
      <p>
        Můj facebook: www.facebook.com/pavopfau<br></br>
        Můj instagram: www.instagram.com/jitkapfau/
      </p>

      <a href="https://www.facebook.com/pavopfau" className="navigation__link" >
        <img className="icon" src="../../assets/img/face.png" /></a>

      <a href="https://www.instagram.com/jitkapfau/" className="navigation__link">
        <img className="icon" src="../../assets/img/inst.png" /></a>

    </main>

  );
};
