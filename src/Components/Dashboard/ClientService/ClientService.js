import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import './ClientService.scss';

const ClientService = () => {
    const getEmail = sessionStorage.getItem('user');
    const [adminService, setAdminService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-rent?email=${getEmail}`)
            .then(res => res.json())
            .then(data => {
                setAdminService(data)
            })
    }, [getEmail]);

    function sayHi() {
        return "you Don't Have Any Booking Rent"
    }
    setTimeout(sayHi, 20000);

    const location = useLocation();
    const history = useHistory()
    const changePath = (id) => {
        let { from } = location.state || { from: { pathname: `/details/${id}` } }
        history.push(from);
    }
    return (
        <div className="list-table">
            <Table responsive className="w-100">
                <thead className="table-header">
                    <tr className="">
                        <th className="w-50">House Name</th>
                        <th className="w-25">Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {adminService.length > 0 ? adminService.map(data =>
                        <tr key={data._id}>
                            <td>{data.serviceTitle}</td>
                            <td>{data.price}</td>
                            <td className="text-center">
                                <button className="view-btn" onClick={() => changePath(`${data.id}`)}>View details</button>
                            </td>
                        </tr>
                    ) : <tr>
                            <td>
                                <LoadingSpinner />
                                <h3>{sayHi()}</h3>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ClientService;