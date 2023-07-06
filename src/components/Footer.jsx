import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Footer = () => {
    // Hook for Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="row mt-5">
                <div className="col-6 col-md-2 mb-3 ">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://samsung.com/ar" target="_blank"
                                                         rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Samsung</a></li>
                        <li className="nav-item mb-2"><a href="https://xiaomi.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Xiaomi</a></li>
                        <li className="nav-item mb-2"><a href="https://frankfurter.app/docs/" target="_blank"
                                                         rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Frankfurter.APP</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/alebuo" target="_blank"
                                                         rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">GitHub</a></li>
                        <li className="nav-item mb-2"><a href="https://linkedin.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2 mb-3">
                    <h5>React</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://react-bootstrap.netlify.app/" target="_blank"
                                                         rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">React Bootstrap</a></li>
                        <li className="nav-item mb-2"><a href="https://en.react.dev/" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">React</a></li>

                    </ul>
                </div>
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/index.html" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="https://instagram.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Instagram</a></li>
                        <li className="nav-item mb-2"><a href="https://facebook.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Facebook</a></li>
                        <li className="nav-item mb-2"><a href="https://youtube.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Youtube</a></li>
                        <li className="nav-item mb-2"><a href="https://twitter.com" target="_blank" rel={"noreferrer"}
                                                         className="nav-link p-0 text-muted">Twitter</a></li>
                    </ul>
                </div>
                <div className="col-md-5 offset-md-1 mb-3">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>About API Currency</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Frankfurter.app is a free and open-source currency data API that tracks reference
                            exchange rates published by the European Central Bank.
                            You can see working this API by clicking on the button below.
                            <a href="https://www.frankfurter.app/docs/" target="_blank"
                               rel="noreferrer">https://www.frankfurter.app/docs/</a>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                    <h5>If you like the Free API Currency: </h5>
                    <p>Here you have all the information</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <Button variant="secondary" onClick={handleShow}>
                            About API
                        </Button>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2023 React Bootstrap Cart, Inc. All rights reserved.</p>
            </div>
            <div align={"center"}><Button href="index.html" target="_self"> Top</Button></div>
            <br/><br/><br/><br/>
        </div>
    );
};

export default Footer;