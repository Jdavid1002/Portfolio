import React from 'react';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch()


    const cambiarInterfaz = (num) => {
        dispatch({
            type : "@changeInterfaz",
            number : num
        })
    }

    return (
        <div className="p-3 d-flex-center nav" >
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="ml-3 text-white bi bi-list-nested" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <div className="pb-5 mr-3" >

                    <h5 className="text-rotate text-white pointer" onClick={()=> cambiarInterfaz(1) } > Home </h5>
                    <h5 className="text-rotate text-white pointer" onClick={()=> cambiarInterfaz(2) } > About me </h5>
                    <h5 className="text-rotate text-white pointer" onClick={()=> cambiarInterfaz(3) } > Projects </h5>
                    <h5 className="text-rotate text-white pointer" onClick={()=> cambiarInterfaz(4) } > Contact </h5>

                </div>
            </div>
        </div>
    );
}
 
export default Navbar;