import React, { useEffect, useRef } from 'react'
import './style.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { routes } from './routes-data'
const Terminal = () => {
    const { pathname } = useLocation();
    const inputRef = useRef(null);
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        const values = value.split(' ');
        inputRef.current.value = "";
        if (values[0] !== "cd" || values.length !== 2) {
            console.log(`"${value}" command not found`);
        }
        const route = routes.find((curr) => curr === values[1]);
        if (typeof (route) === 'undefined'){
            console.log(`"${value}" command not found`);
        }
        else navigate(values[1]);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div className='terminal-div'>
            <div className='current-directory'>
                <p className='path-name'>~{pathname}:</p>
            </div>
            <div className="terminal-form-div">
                <form className='terminal-form' onSubmit={handleSubmit} action="">
                    <input className="terminal-input" placeholder="cd help" type="text" ref={inputRef} />
                </form>
            </div>
        </div>
    )
}

export default Terminal