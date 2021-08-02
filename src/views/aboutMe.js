import React from 'react';
import html5 from '../img/html5.png'
import css from '../img/css.png'
import JS from '../img/JavaScript.png'
import imgReact from '../img/react.png'
import imgNode from '../img/node.png'
import imgRedux from '../img/redux.png'
import perfil from '../img/Foto-perfil.jpg'
import sql from '../img/sql.png'
import firebase from '../img/firebase.png'

const AboutMe = () => {
    return (
        <div className="p-5" >
            <div className="d-flex-between" >
                <div className="w-20" >
                    <img src={perfil} className="w-100 rounded-circle" alt="" />
                </div>
                <div className="w-90 p-4" >
                    <h2> ¿Quien Soy? </h2>
                    <p className="mt-2" > Mi nombre es Juan David Ramirez Monje tengo 18 años, nací y vivo en la ciudad de Bogotá Colombia. Actualmente soy estudiante de analisis y desarrollo de sistemas de la información. Además de ser desarrollador frontend tambien soy vendedor de productos y servicios graduado en el SENA. Me considero un programador competitivo, autodidacta, social, con una gran logica para la solución de problemas de software y de la vida en general.  </p>
                </div>
            </div>
            <div className="mt-5" >
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