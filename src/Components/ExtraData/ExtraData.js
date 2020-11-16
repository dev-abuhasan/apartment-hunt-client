import React, { createContext, useState } from 'react';
import { } from 'react-router-dom';

let Context = null;
const { Provider, Consumer } = Context = createContext();

const ExtraDataProvider = (props) => {

    //dashboard true false condition
    const [seeData, setSeeData] = useState({
        order: true,
        serviceClient: false,
        serviceAdmin: false,
    })


    const ClickShowData = (e) => {
        if (e === "order") {
            setSeeData({
                order: true,
                serviceClient: false,
                serviceAdmin: false
            })
        }
        if (e === "services-list-admin") {
            setSeeData({
                order: false,
                serviceClient: false,
                serviceAdmin: true,
            })
        }
        if (e === "services-list") {
            setSeeData({
                order: false,
                serviceClient: true,
                serviceAdmin: false,
            })
        }
    }


    //check admin
    const getEmail = sessionStorage.getItem('user');
    const [Admin, setAdmin] = useState(null);
    const [oldUser, setOldUser] = useState(true);

    return (
        <Provider value={
            {
                seeData,
                getEmail,
                Admin,
                oldUser,
                setOldUser,
                setAdmin,
                setSeeData,
                ClickShowData,
            }
        }>
            {props.children}
        </Provider>
    )

}


export { ExtraDataProvider, Consumer as UserConsumer, Context as ExtraDataContext };