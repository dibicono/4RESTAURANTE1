import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Contacto from "../paginas/Contacto";
import Ubicacion from "../paginas/Ubicacion";


// Aquí se importa Bootstrap. MUCHO OJO: revisa el package.json(), descargue la paquetería react-boostrap. El boostrap común en React no funciona y hace cosas raras.  
const NotFound = () => {<h1>404: pagina no encontrada</h1>}
// Cuando termines de leer esta parte dirigete a Home
function AppRouter() {
    //Ojo con la sintaxis

    return (

        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={NotFound} />

                <Route path="home" element={<Home/>} />
                <Route path="ubicacion" element={<Ubicacion/>} />
                <Route path="contacto" element={<Contacto/>} />
                {/* Cuando tienes una función no se coloca como Componente */}
                
               
            </Routes>

        </>
    );

}

export default AppRouter;