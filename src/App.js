import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {cellPhonesData} from './components/Cellphonesdata';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

function App() {
    let cartSaved = JSON.parse(localStorage.getItem('cart'));
    if (!cartSaved) {
        cartSaved = [];
    }

    const [cart, addProduct] = useState(cartSaved);
    useEffect(() => {
        if (cartSaved) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }, [cart, cartSaved]);

    const [cellPhones] = useState(cellPhonesData);
    const [currency, editCurrency] = useState({});
    const askCurrency = async () => {
        try {
            const api = await fetch(`https://api.frankfurter.app/latest?from=USD`);
            console.log(api);
            const result = await api.json();
            console.log(result.rates);
            editCurrency(result.rates);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container>
            <Header/>
            <Main/>
            <Row>
                <Col md={8}>
                    <div className="row justify-content-center mt-3">
                        <div className="col-6">
                            <p className="text-center display-4 my-3">List of Products</p>
                        </div>
                        <div className="col-2 my-3">
                            <Button
                                onClick={askCurrency}>Show in €uros</Button>
                        </div>
                    </div>
                    {
                        cellPhones.map((cellPhone, index) => (
                            <Products
                                cellPhone={cellPhone}
                                cellPhones={cellPhones}
                                key={index}
                                cart={cart}
                                addToCart={addProduct}
                                askCurrency={askCurrency}
                                currency={currency}
                            />
                        ))
                    }
                </Col>
                <Col md={4}>
                    <Cart cart={cart} addToCart={addProduct} key={cart.id}/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

export default App;