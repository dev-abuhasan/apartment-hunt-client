import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ClientService.scss';

const ClientService = () => {
    const getEmail = sessionStorage.getItem('user');
    const downIcon = <FontAwesomeIcon icon={faChevronDown} />

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user-service-list?email=${getEmail}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [getEmail])
    const [adminService, setAdminService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-order-data/admin?email=${getEmail}`)
            .then(res => res.json())
            .then(data => setAdminService(data))
    }, [getEmail]);
    const handleUpdate = (id, strings) => {
        if (strings === 'Done') {
            const statusOption = 'Done';
            fetch(`http://localhost:5000/update-statue/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ statusOption })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success === false) {
                        alert('Status Updated Successfully... Hurray!');
                    }
                    if (data.success === true) {
                        alert('Status Updated Failed... Sad!');
                    }
                })
                .then(() => window.location.reload())
        }
        if (strings === 'onGoing') {
            const statusOption = 'onGoing';
            fetch(`http://localhost:5000/update-statue/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ statusOption })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success === false) {
                        alert('Status Updated Successfully... Hurray!');
                    }
                    if (data.success === true) {
                        alert('Status Updated Failed... Sad!');
                    }
                })
                .then(() => window.location.reload())
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete-order/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    alert('Order Cancel Success')
                }
                if (data.success === true) {
                    alert('Order Cancel Fail')
                }
            })
            .then(() => window.location.reload())
    }

    return (
        <div className="list-table">
            <Table responsive className="w-100">
                <thead className="table-header">
                    <tr className="">
                        <th className="w-50">House Name</th>
                        <th className="w-75">Price</th>
                        <th className="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {adminService.length > 0 ? adminService.map(data =>
                        <tr key={data._id}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.courseCategory}</td>
                        </tr>
                    ) : <tr>
                            <td>
                                {/* <LoadingSpinner /> */}
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ClientService;