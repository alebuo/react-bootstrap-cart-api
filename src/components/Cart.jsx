import React, {useState} from 'react';
import Productincart from "./Productsincart";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {BsCartCheckFill,} from "react-icons/bs";

const Cart = ({cart, addToCart}) => {
    // Hook for Modal
    const [showPay, setShowPay] = useState(false);
    const handleClosePay = () => setShowPay(false);
    const handleShowPay = () => setShowPay(true);
    return (
        <div>
            <div className="product text-capitalize">
                <div className="container py-3">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-12 col-xl-10">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <p className="text-center display-5">Checkout <BsCartCheckFill className="display-5" />  </p>
                                    {cart.length === 0
                                        ? <p className="text-center fw-bold">Empty cart</p>
                                        : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <p className="text-center">Products on cart: {cart.length}</p>
                                            : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <p className="text-center fw-bold">Total :
                                                ${cart.reduce((acc, cellPhone) => acc + cellPhone.priceDollar, 0)}</p>
                                            : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <div className="text-center">
                                                <Modal show={showPay} onHide={handleClosePay}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Pay Information</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body><strong>Great!</strong> You have
                                                        paid <span
                                                            className="fontProductsDollarModal"> ${cart.reduce((acc, cellPhone) => acc + cellPhone.priceDollar, 0)} </span> successfully!
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClosePay}>
                                                            Exit
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                <Button className="btn btn-success px-5" onClick={handleShowPay}>
                                                    PAY Now
                                                </Button>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                cart.map((cellPhone) => (
                    <Productincart addToCart={addToCart} key={cellPhone.id} cart={cart} cellPhone={cellPhone}/>
                ))}
        </div>
    );
};

export default Cart;