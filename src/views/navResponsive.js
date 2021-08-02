import React,{useState} from 'react';
import { useDispatch } from 'react-redux';


const NavResponsive = () => {

    const [btn, setbtn] = useState(true)
    const dispatch = useDispatch()

    const cambiarInterfaz = (num) => {
        dispatch({
            type : "@changeInterfaz",
            number : num
        })
        setbtn(true)
    }

    return (
        <div className="nav-responsive w-100">
            <div className="d-flex-between p-5" >
                <div>
                    <h3>David Ramirez</h3>
                </div>
                <div>
                    { btn? 
                        <svg onClick={()=> btn ? setbtn(false) : setbtn(true)  } xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="ml-3 bi bi-list-nested" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                        </svg>                    
                    : null}
                </div>
            </div>
            { !btn? 
                <div className="container-nav-res bg-primary" >
                    <div className="d-flex-end p-4" >
                        <svg onClick={()=> btn ? setbtn(false) : setbtn(true)  } xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                    </div>
                    <div className="grid-2" >
                        <h1 className="text-center mt-3" onClick={()=> cambiarInterfaz(1) } > Home </h1>
                        <h1 className="text-center mt-3" onClick={()=> cambiarInterfaz(2) } > About Me </h1>
                        <h1 className="text-center mt-3" onClick={()=> cambiarInterfaz(3) } > Projects </h1>
                        <h1 className="text-center mt-3" onClick={()=> cambiarInterfaz(4) } > Contact </h1>
                    </div>
                </div>            
            :null}

        </div>
    );
}
 
export default NavResponsive;