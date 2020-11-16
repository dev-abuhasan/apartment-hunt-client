import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import './ClientService.scss';

const ClientService = () => {
    const getEmail = sessionStorage.getItem('user');
    const [adminService, setAdminService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all`)
            .then(res => res.json())
            .then(data => {
                setAdminService(data)
            })
    }, [getEmail]);

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
                                <button className="view-btn">View details</button>
                            </td>
                        </tr>
                    ) : <tr>
                            <td>
                                <LoadingSpinner />
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ClientService;