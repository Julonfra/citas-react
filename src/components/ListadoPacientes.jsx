import { useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  useEffect(() => {
    if (pacientes.length > 0) {
      console.log("Nuevo paciente");
    }
  }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* w-3/5 quiere decir 40%*/}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas{" "}
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza Agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">
              y Aparecerán en Este Lugar{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
