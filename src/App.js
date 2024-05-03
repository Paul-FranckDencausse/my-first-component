//déclaration d'impôts et de fonction
function Profile() {
  //corps de la f()
  return (
    //image
    <img
      //lien
      src="https://i.imgur.com/MK3eW3As.jpg"
      // texte alternatif
      alt="Katherine Johnson"
      //Mathématicienne américaine.Ses calculs étaient indispensables sur le programme Mercury.
    />
  );
}
//import-export
export default function Gallery() {
  // on appelle la fonction
  //titre
  //trois fois la fonction Profile , donc trois fois la même image
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
