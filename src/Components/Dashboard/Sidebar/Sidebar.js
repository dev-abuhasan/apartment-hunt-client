import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faHome, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ExtraDataContext } from '../../ExtraData/ExtraData';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Sidebar = () => {
    const ExtraData = useContext(ExtraDataContext)
    const { ClickShowData, seeData} = ExtraData;
    const taxiIcon = <FontAwesomeIcon icon={faTaxi} />
    const plusIcon = <FontAwesomeIcon icon={faPlus} />
    const HomeIcon = <FontAwesomeIcon icon={faHome} />

    // useEffect(() => {
    //     fetch(`http://localhost:5000/check-admin`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email: getEmail })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.admin === true) {
    //                 setAdmin(true)
    //                 setSeeData({ serviceAdmin: true })
    //             } else if (data.admin === false) {
    //                 setAdmin(false)
    //                 setSeeData({ order: true })
    //             }
    //         })
    // {
    //     Admin == null ?
    //     <LoadingSpinner />
    //     : 
    //             <>
    //         {<>
    // }, [getEmail, setSeeData, setAdmin])

    return (
        <div className="pt-5">
            <p
                className={seeData.serviceAdmin === true ? "m-2 text-success" : "m-2"}
                onClick={() => ClickShowData("services-list-admin")}>
                <span className="mr-2">{taxiIcon}</span>
                Booking List
            </p>
            <p
                className={seeData.order === true ? "m-2 text-success" : "m-2"}
                onClick={() => ClickShowData("order")}>
                <span className="mr-2">{plusIcon}</span>
                Add Rent House
            </p>
            <p
                className={seeData.serviceClient === true ? "m-2 text-success" : "m-2"}
                onClick={() => ClickShowData("services-list")}>
                <span className="mr-2">{HomeIcon}</span>
                My Rent
            </p>
        </div>
    );
};

export default Sidebar;