//Asi se accede directamente al valor de los props

/*function Header({ numero, isAdmin, fn }) {
  console.log(numero);
  console.log(isAdmin);

  fn();

  return (
    <h1 className="font-black text-center text-5xl">
      Seguimiento Pacientes {""} <br />
      <span className="text-indigo-600">Veterinaria</span>
    </h1>
  );
}

export default Header; */

function Header() {
  return (
    <h1 className="font-black text-center text-5xl">
      Seguimiento Pacientes {""} <br />
      <span className="text-indigo-600">Veterinaria</span>
    </h1>
  );
}

export default Header;
