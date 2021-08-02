import React from 'react';
import Kiqui from "../img/kiqui.jpg"
import Bimo from '../img/bimo.jpg'
import lucky from '../img/lucky.png'
import chat from '../img/chat.jpg'

const Projects = () => {

    const ListaProjectos = [
        {
            nombre : "Organizador de Productos",
            git : "https://github.com/Jdavid1002/Kiqui",
            demo : "https://boiling-sierra-67699.herokuapp.com/",
            tecnologias : "React.js - Firebase - Bootstrap",
            id : 1,
            imagen : Kiqui
        },{
            nombre : "Bimo Ecommerce",
            git : "https://github.com/Jdavid1002/Bimo",
            demo : "https://jdavid1002.github.io/Bimo/#/",
            tecnologias : "React.js - Firebase - Bootstrap ",
            id : 2,
            imagen : Bimo
        },{
            nombre : "Lucky Song's",
            git : "https://github.com/Jdavid1002/Lucky-Songs",
            demo : "https://jdavid1002.github.io/Lucky-Songs/#/",
            tecnologias :"React.js - Firebase - Bootstrap - Redux",
            id : 3,
            imagen : lucky
        },{
            nombre : "Messages & Friends",
            git : "https://github.com/Jdavid1002/Chat-React",
            demo : "https://jdavid1002.github.io/Chat-React/#/",
            tecnologias : "React.js - Firebase - Bootstrap - Redux",
            id : 4,
            imagen : chat
        }
    ]

    return (
        <div className="grid-2 p-3" >
            {ListaProjectos.map(data => 
                <div key={data.id} className="m-2" >
                    <div>
                        <img src={data.imagen} className="img-projects rounded" alt="" />
                    </div>
                    <div className="bg-white p-4 d-flex-between" >
                        <div>
                            <h4> {data.nombre}</h4>
                            <p> {data.tecnologias} </p>
                        </div>
                        <div className="w-50 d-flex-end" >
                            <div>
                                <button className="btn bg-primary m-2" onClick={()=> window.open(data.git)}>
                                    <h4 > Git Hub </h4>
                                </button>
                                <button  className="btn bg-opacity m-2 shadow" onClick={()=> window.open(data.demo)}>
                                    <h4> Demo </h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                
            )}

        </div>
    );
}
 
export default Projects;