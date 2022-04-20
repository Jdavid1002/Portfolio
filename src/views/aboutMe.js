import React from 'react';
import html5 from '../img/html5.png'
import css from '../img/css.png'
import JS from '../img/JavaScript.png'
import imgReact from '../img/react.png'
import imgNode from '../img/node.png'
import imgRedux from '../img/redux.png'
import perfil from '../img/fotoPerfil.jpg'
import sql from '../img/sql.png'
import firebase from '../img/firebase.png'

const AboutMe = () => {
    return (
        <div className="p-5" >
            <div className="d-flex-between" >
                <div className="w-30" >
                    <img src={perfil} className="w-100 rounded-circle" alt="" />
                </div>
                <div className="w-90 p-4 text-white" >
                    <h2> ¿Quien Soy? </h2>
                    <p className="mt-2" > Nací el 10 de Febrero del 2003 en Bogotá Colombia, desde pequeñín tuve una gran curiosidad por la tecnología. Curiosidad que eventualmente se convertiría en pasión. Empecé en el mundo de la programación a mis 17 años y aproveche el año de pandemia para aprender por mi propia cuenta desarrollo de aplicaciones web, tanto frontend como backend. </p>
                    <p className="mt-2" >Tengo gran interés en aprender inteligencia artificial y ciencias de datos. interés, que eventualmente se convertirá en conocimientos profundos y desarrollo de nuevos proyectos.</p>
                </div>
            </div>
            <div className="mt-5 text-white" >
                <h2> ¿Cuales son mis habilidades? </h2>
                <p className="mt-3" >Busco conseguir más conocimientos técnicos cada que toco código, al pasar el tiempo he conseguido mejorar mis habilidades técnicas y de solución de problemas, con el fin de ser mejor programador cada día y seguir mejorando en cada proyecto. </p>
                <div className="grid-4 mt-3" >
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={html5} alt="" />
                        <h6 className="text-center" > HTML5 (90%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={css} alt="" />
                        <h6 className="text-center " > CSS3 (80%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={JS} alt="" />
                        <h6 className="text-center" > JavaScript (75%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={imgReact} alt="" />
                        <h6 className="text-center mt-2 " > React.js (75%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={imgNode} alt="" />
                        <h6 className="text-center mt-2 " > Node.js (35%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={imgRedux} alt="" />
                        <h6 className="text-center mt-2 " > Redux.js (70%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={firebase} alt="" />
                        <h6 className="text-center mt-2 " > Firebase (65%) </h6>
                    </div>
                    <div className="shadow p-3 m-3 rounded hover-opacity pointer" >
                        <img className="w-100" src={sql} alt="" />
                        <h6 className="text-center mt-2 " > SQL (50%) </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;