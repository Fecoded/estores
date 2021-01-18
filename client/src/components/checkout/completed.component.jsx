import React from 'react'
import {Link} from 'react-router-dom'

const Completed = () => {
    return (
        <div className="main_content">
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="text-center order_complete">
                            <i className="fas fa-check-circle"></i>
                            <div className="heading_s1">
                              <h3>Your order is completed!</h3>
                            </div>
                              <p>Thank you for your order! Your order is being processed. You will receive a call within 3-6 hours for confirmation.</p>
                            <Link to="/shops" className="btn btn-fill-out">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>  
    )
}

export default Completed