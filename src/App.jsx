import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //Los props son una forma de pasar variables o funciones de un componente a otro
  const [pacientes, setPacientes] = useState([]); //Esto es un arreglo vacio que se va a ir llenando con los datos ingresados en el formulario// //Si tenemos us state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo pricnipal.
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />

        {/* Este div rodea al Formulario y Listado Pacientes para poder aplicarle un flexbox*/}
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes} //Se recomienda que el nombre del props y el de la funcion sea el mismo
            paciente={paciente} //Esto hace que despues de dar click en editar, se me llene el formulario con la informacion para editar
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
