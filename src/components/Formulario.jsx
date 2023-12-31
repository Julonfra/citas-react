import { useEffect, useState } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de Formularios

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay almenos un campo vacio");
      setError(true);
    } else {
      setError(false);

      //OBJETO DE PACIENTE

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if (paciente.id) {
        //Editando el Registro

        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
      } else {
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]); //Aqui estamos pasando una copia de lo que hay en pacientes que es un arreglo vacio ([""])
        setPaciente({});
      }
      //console.log(objetoPaciente);

      //Resetear Formulario

      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        {/* Si error es true entonces muestra "Todos los campos son obligatorios */}
        <div className="mb-5">
          <label
            htmlFor="Nombre Mascota" //Para que el usuario al darcle click al label, se salte al input para empezar a escribir
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="Nombre Mascota" //Aqui se llama el htmlFor
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Nombre Propietario" //Para que el usuario al darcle click al label, se salte al input para empezar a escribir
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="Nombre Propietario" //Aqui se llama el htmlFor del label
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email" //Para que el usuario al darcle click al label, se salte al input para empezar a escribir
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email" //Aqui se llama el htmlFor
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta" //Para que el usuario al darcle click al label, se salte al input para empezar a escribir
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta" //Aqui se llama el htmlFor
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas" //Para que el usuario al darcle click al label, se salte al input para empezar a escribir
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas" //Aqui se llama el htmlFor
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
