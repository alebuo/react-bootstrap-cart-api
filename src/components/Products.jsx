import {MdDeleteForever} from "react-icons/md";
import {BsCartPlus, BsStarFill} from "react-icons/bs";

const Products = ({askCurrency, currency, cellPhone, cellPhones, addToCart, cart}) => {

    const {id, name, priceDollar, image, screenSize, camera, zoom, battery, ramMemory, capacity} = cellPhone;
    const selectProduct = (id) => {
        const cellPhone = cellPhones.filter((cellPhone) => cellPhone.id === id)[0];
        addToCart([...cart, cellPhone]);
        //console.log(cart);
    }
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
                                            <img src={image} className="w-100" alt={name}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{name}</h5>
                                        <div className="d-flex flex-row">
                                            <span>ID: {id} </span>
                                            <div className="text-danger mb-1 me-2">
                                                <BsStarFill/>
                                                <BsStarFill/>
                                                <BsStarFill/>
                                            </div>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span>ScreenSize {screenSize}</span>
                                            <span className="text-primary"> • </span>
                                            <span>Camera {camera}</span>
                                            <span className="text-primary"> • </span>
                                            <span>Zoom {zoom}</span>
                                            <span className="text-primary"> • </span>
                                            <span>Battery {battery}</span>
                                            <span className="text-primary"> • </span>
                                            <span>RamMemory {ramMemory}</span>
                                            <span className="text-primary"> • </span>
                                            <span>Capacity {capacity}</span>

                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start text-center">
                                        <div className="text-center flex-row align-items-center mb-0">
                                            <h4 className="fontProductsDollar text-center mb-1"> ${priceDollar}</h4>
                                            <p className="text-center mb-1"> TAX incl.</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                            {Object.keys(currency).find((key) => key === "EUR") ? (
                                                <p className="fontProductsEuros">
                                                    € {(currency.EUR * priceDollar).toFixed(2)} (EURO)
                                                </p>
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-1">
                                            {isInCart ? (
                                                <button className="btn btn-outline-danger btn-sm mt-2" type="button"
                                                        onClick={() => removeProduct(id)}>
                                                    Remove from cart <MdDeleteForever/>
                                                </button>
                                            ) : (
                                                <button className="btn btn-outline-primary btn-sm mt-2" type="button"
                                                        onClick={() => selectProduct(id)}>
                                                    Add to cart <BsCartPlus/>
                                                </button>
                                            )}
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
export default Products;