import React from "react"
import Header from "./Header"
const CartPage = () => {
    return (
        <div>
            <Header />
            <div className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
      
                  <div className="row">
      
                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr/>
      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                              className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: 50}}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{width: 80}}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                  className="img-fluid rounded-3"  style={{width: 65}} />
                              </div>
                              <div className="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: 50}}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{width: 80}}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}}/>
                              </div>
                              <div className="ms-3">
                                <h5>Canon EOS M50</h5>
                                <p className="small mb-0">Onyx Black</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: 50}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: 80}}>
                                <h5 className="mb-0">$1199</h5>
                              </div>
                              <a  style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                              </div>
                              <div className="ms-3">
                                <h5>MacBook Pro</h5>
                                <p className="small mb-0">1TB, Graphite</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: 50}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: 80}}>
                                <h5 className="mb-0">$1799</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                    </div>
                    <div className="col-lg-5">
      
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Summary</h5>
                              <i className="fa-brands fa-shopify fa-2x icon img-fluid rounded-3"  style={{width: 45}} ></i>
                          </div>
      
                          {/* </form> */}
      
                          <hr className="my-4" />
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>
      
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>
      
                          <button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between white" >
                              <span className="text-padding">$4818.00</span>
                              <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>
      
                        </div>
                      </div>
      
                    </div>
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div >
    )
}

export default CartPage