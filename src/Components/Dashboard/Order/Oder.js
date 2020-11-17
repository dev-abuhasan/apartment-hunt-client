import React, { useState } from 'react';
import './Order.scss';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Oder = () => {
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />

    const actualBtn = document.getElementById('actual-btn');
    const fileChosen = document.getElementById('file-chosen');
    if (actualBtn) {
        actualBtn.addEventListener('change', function () {
            fileChosen.textContent = this.files[0].name
        })
    }
    const getName = sessionStorage.getItem('name');
    const getEmail = sessionStorage.getItem('user');

    const [formData, updateFormData] = useState({
        name: getName,
        phone: "018XXXXXXXX",
        massage: "Lorem Ipsum dolor sit amet, consectetur adipissing clit.",
        serviceTitle: "",
        email: getEmail,
        location: "",
        bathroomNum: "",
        price: "",
        bedroomNum: "",
        statusOption: "Pending",
        image: null
    });
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }
    const getUploadFils = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.files[0] })
    }

    const onSubmits = (e) => {
        const formsData = new FormData();
        formsData.append("name", formData.name);
        formsData.append("phone", formData.phone);
        formsData.append("massage", formData.massage);
        formsData.append("serviceTitle", formData.serviceTitle);
        formsData.append("email", formData.email);
        formsData.append("location", formData.location);
        formsData.append("bathroomNum", formData.bathroomNum);
        formsData.append("price", formData.price);
        formsData.append("bedroomNum", formData.bedroomNum);
        formsData.append("statusOption", formData.statusOption);
        formsData.append("image", formData.image);

        fetch(`https://quiet-depths-16852.herokuapp.com/add-order`, {
            method: 'POST',
            body: formsData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    alert('Order added successfully');
                }
                if (data.success === false) {
                    alert('Order added failed');
                }
            })
            .then(() => {
                window.location.reload();
            })
        e.preventDefault();
    }
    return (
        <Form className="row px-4" onSubmit={e => onSubmits(e)}>
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Service Title : </label>
                <Form.Control type="text" placeholder="Enter title" name="serviceTitle" required onBlur={(e) => getData(e)} />
                <label htmlFor="" className="form-label-title">Location : </label>
                <Form.Control type="text" placeholder="Enter Location" name="location" required onBlur={(e) => getData(e)} />
                <label htmlFor="" className="form-label-title">No.Of Bathroom : </label>
                <Form.Control type="number" placeholder="Number / only accept numbers" name="bathroomNum" required onChange={(e) => getData(e)} pattern="[0-9]+" />
            </div>
            <div className="col-md-6">
                <label htmlFor="" className="form-label-title">Price : </label>
                <Form.Control type="number" placeholder="Price / only accept numbers" name="price" required onChange={(e) => getData(e)} pattern="[0-9]+" />
                <label htmlFor="" className="form-label-title">No.Of Bedroom : </label>
                <Form.Control type="number" placeholder="Number / only accept numbers" name="bedroomNum" required onChange={(e) => getData(e)} pattern="[0-9]+" />
                <div className="">
                    <div className="">
                        <label htmlFor="" className="form-label-title">Thumbnail: </label>
                        <br />
                        <Form.File placeholder="Name" name="image" required onBlur={(e) => getUploadFils(e)} accept="image/*" id="actual-btn" className="file-input" />
                        <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                            {uploadIcon} Upload <span className="responsive-file"> Image</span>
                        </label>
                        <span id="file-chosen"></span>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-md-12 =">
                <Button variant="dark" type="submit" className="responsive-mobile-btn float-right">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default Oder;