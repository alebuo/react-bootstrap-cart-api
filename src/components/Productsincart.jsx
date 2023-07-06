import React from 'react';
import {MdDeleteForever} from "react-icons/md";

const Productincart = ({cellPhone, addToCart, cart}) => {

    const {id, name, priceDollar, image} = cellPhone;

    const removeProduct = (id) => {
        const cellPhones = cart.filter((cellPhone) => cellPhone.id !== id);
        addToCart(cellPhones);
    }

    const isInCart = cart.some((cellPhone) => cellPhone.id === id);

    return (
        <div className="product text-capitalize">
            <div className="container py-1">
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                        <div className="card shadow border rounded-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src={image}
                                                 className="w-100" alt={name}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{name}</h5>
                                        <div className="d-flex flex-row">

                                            <span>ID: {id}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start text-center">
                                        <div className="flex-row align-items-center mb-1">
                                            <p className="text-center mb-1 me-1 fw-bold">${priceDollar}</p>
                                        </div>

                                        <div className="d-flex flex-column mt-4">
                                            {isInCart ? (
                                                <button className="btn btn-outline-danger btn-sm mt-2" type="button"
                                                        onClick={() => removeProduct(id)}>
                                                    <MdDeleteForever/>
                                                </button>) : ("ok")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Productincart;