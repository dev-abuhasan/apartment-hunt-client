import React, { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../../../App';
import { useForm } from "react-hook-form";
import './Css/Header.scss';
import './Css/MediaQuery.scss'

const HeaderBottom = () => {
    const {setServiceData } = useContext(ServicesContext);
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetch('/tasks?filter=' + filter)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [filter, setServiceData])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setFilter(data);
    }

    return (
        <div className="header-Background text-center">
            <div className="black">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>FIND YOUR HOUSE RENT</h1><br />
                    <input name="search" className="inputStyle" type="text" ref={register} placeholder="Search..." />
                    <button className="batStyle btn btn-primary inp-btn" type="submit">Find Now</button>
                </form>
            </div>
        </div>
    );
};

export default HeaderBottom;