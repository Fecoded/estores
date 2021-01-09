import React, {Fragment, useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

import {logout, updateProfile} from '../../redux/user/userActions'
import {createCategory, deleteCategory} from '../../redux/category/categoryActions'
import {getProduct, deleteProduct, createProduct} from '../../redux/product/productActions'

const Account = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [shipping_address, setShippingAddress] = useState('')
    // Category
    const [description, setDescription] = useState('')
    // Product
    const [image, setFile] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [previous_price, setPreviousPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState(0)

    const inputRef = useRef();

    const dispatch = useDispatch()

    const {user} =  useSelector((state) => state.userReducer)
    const {categories} =  useSelector((state) => state.categoryReducer)
    const {products} =  useSelector((state) => state.productReducer)

    useEffect(() => {
        if(user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setDisplayName(user.displayName)
            setEmail(user.email)
            setPhone(user.phone)
            setShippingAddress(user.shipping_address)
        }
        dispatch(getProduct());
    },[user, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({firstName, lastName, displayName, email, phone, shipping_address }))
    }

    const onSubmitCategory = (e) => {
        e.preventDefault();
        dispatch(createCategory({description, setDescription}))
    }

    const onSubmitProduct = (e) => {
        e.preventDefault();
        dispatch(createProduct(
          {  
            image,
            name,
            price,
            previous_price,
            description,
            category,
            size,
            type,
            quantity,
            inputRef,
            setFile,
            setName,
            setPreviousPrice,
            setPrice,
            setCategory,
            setDescription,
            setSize,
            setQuantity,
            setType
        }
        ))
    }

    return (
        <Fragment>
                <div className="main-content">
                    <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="dashboard_menu">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="false"><i className="ti-layout-grid2"></i>Dashboard</a>
                                    </li>
                                 
                                    {user && user.role === 'admin' ? (
                                        <Fragment>
                                        <li className="nav-item">
                                           <a className="nav-link" id="all_orders-tab" data-toggle="tab" href="#all_orders" role="tab" aria-controls="all_orders" aria-selected="false"><i className="ti-shopping-cart-full"></i>All Orders</a>
                                          </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="create_product-tab" data-toggle="tab" href="#create_product" role="tab" aria-controls="create_product" aria-selected="true"><i className="ti-pencil-alt"></i>Create Product</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="allproduct-tab" data-toggle="tab" href="#allproduct" role="tab" aria-controls="allproduct" aria-selected="true"><i className="ti-view-list"></i>All Product</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="create_categorytab" data-toggle="tab" href="#create_category" role="tab" aria-controls="create_category" aria-selected="true"><i className="ti-pencil-alt"></i>Create Category</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="allcategory-tab" data-toggle="tab" href="#allcategory" role="tab" aria-controls="allcategory" aria-selected="true"><i className="ti-view-list"></i>All Category</a>
                                        </li>
                                        </Fragment>
                                      

                                    ) : (
                                        <Fragment>
                                           <li className="nav-item">
                                                 <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="ti-shopping-cart-full"></i>Orders</a>
                                           </li>
                                
                                           <li className="nav-item">
                                                <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true"><i className="ti-location-pin"></i>My Address</a>
                                           </li>

                                            <li className="nav-item">
                                                <a className="nav-link" id="account-detail-tab" data-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true"><i className="ti-id-badge"></i>Account Details</a>
                                            </li>

                                        </Fragment>

                                    )}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#!" onClick={() => dispatch(logout())}><i className="ti-lock"></i>Logout</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="tab-content dashboard_content">
                            <div className="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Dashboard</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>From your account dashboard. you can easily check &amp; view your <a href="#!" >recent orders</a>, manage your <a href="#!">shipping and billing addresses</a> and <a href='#!' >edit your password and account details.</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* Orders */}
                            <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Orders</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#1234</td>
                                                        <td>March 15, 2020</td>
                                                        <td>Processing</td>
                                                        <td>$78.00 for 1 item</td>
                                                        <td><a href="#!" className="btn btn-fill-out btn-sm">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#2366</td>
                                                        <td>June 20, 2020</td>
                                                        <td>Completed</td>
                                                        <td>$81.00 for 1 item</td>
                                                        <td><a href="#!" className="btn btn-fill-out btn-sm">View</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* All Order */}
                            <div className="tab-pane fade" id="all_orders" role="tabpanel" aria-labelledby="all_orders-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>All Orders</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#1234</td>
                                                        <td>March 15, 2020</td>
                                                        <td>Processing</td>
                                                        <td>$78.00 for 1 item</td>
                                                        <td><a href="#!" className="btn btn-fill-out btn-sm">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#2366</td>
                                                        <td>June 20, 2020</td>
                                                        <td>Completed</td>
                                                        <td>$81.00 for 1 item</td>
                                                        <td><a href="#!" className="btn btn-fill-out btn-sm">View</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="card mb-lg-0">
                                            <div className="d-flex card-header justify-content-between">
                                                <h3>Shipping Address</h3>
                                                    {/* <button type="submit" className="btn btn-fill-out" name="submit">Edit</button> */}
                                            </div>
                                            <div className="card-body">
                                                <address>{user && user.shipping_address}</address>
                                                {/* <p>New York</p> */}
                                            </div>
                                           
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            {/* Account Details */}
                            <div className="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Account Details</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>Complete Your Profile</p>
                                        <form onSubmit={onSubmit}>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label>First Name <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        readOnly
                                                        className="form-control" 
                                                        name="firstName" 
                                                        type="text"
                                                        value={firstName || ''}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Last Name <span className="required">*</span></label>
                                                    <input 
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="lastName" 
                                                         type="text"
                                                         value={lastName || ''}
                                                         onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Username <span className="required">*</span></label>
                                                    <input 
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="displayName" 
                                                         type="text"
                                                         value={displayName || ''}
                                                         onChange={(e) => setDisplayName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Email Address <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         readOnly
                                                         className="form-control" 
                                                         name="email" 
                                                         type="text"
                                                         value={email || ''}
                                                         onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Phone Number <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         className="form-control" 
                                                         name="phone" 
                                                         type="text"
                                                         value={phone || ''}
                                                         onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                              
                                                <div className="form-group col-md-12">
                                                    <label>Shipping Address <span className="required">*</span></label>
                                                    <input
                                                         required
                                                         className="form-control" 
                                                         name="shipping_address" 
                                                         type="text"
                                                         value={shipping_address || ''}
                                                         onChange={(e) => setShippingAddress(e.target.value)}
                                                    />
                                                </div>
                                              
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Create Product */}
                            <div className="tab-pane fade" id="create_product" role="tabpanel" aria-labelledby="create_product-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Create Product</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={onSubmitProduct}>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <label>Product Name <span className="required">*</span></label>
                                                    <input 
                                                        required 
                                                        className="form-control" 
                                                        name="name" 
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Price <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        className="form-control" 
                                                        name="price"
                                                        value={price}
                                                        type="number"
                                                        onChange={(e) => setPrice(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Previous Price</label>
                                                    <input 
                                                        className="form-control" 
                                                        name='previous_price' 
                                                        type="number"
                                                        value={previous_price}
                                                        onChange={(e) => setPreviousPrice(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Description <span className="required">*</span></label>
                                                    <textarea 
                                                        required
                                                        className="form-control" 
                                                        name="description"
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        ></textarea>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Image <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        className="form-control" 
                                                        name="image" 
                                                        type="file"
                                                        ref={inputRef}
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Size <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        className="form-control" 
                                                        name="size" 
                                                        type="text"
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}
                                                        />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Category <span className="required">*</span></label>
                                                    <select 
                                                        className="form-control" 
                                                        name="category" 
                                                        value={category} 
                                                        onChange={(e) => setCategory(e.target.value)}
                                                        >
                                                        <option value="">Select</option>
                                                        {categories.map((category) => 
                                                         <option key={category._id} value={category.description}>{category.description}</option>
                                                        
                                                        )}
                                                    </select>
                                                    
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Type <span className="required">*</span></label>
                                                    <select 
                                                        className="form-control" 
                                                        name="type" 
                                                        value={type}
                                                        onChange={(e) => setType(e.target.value)}
                                                        >
                                                            <option value="Featured">Featured</option>
                                                            <option value="Exculsive">Exculsive</option>
                                                        </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Quantity <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        className="form-control" 
                                                        name="quantity" 
                                                        type="number"
                                                        value={quantity}
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                             {/* All Product */}
                             <div className="tab-pane fade w-100" id="allproduct" role="tabpanel" aria-labelledby="allproduct-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Products</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Prev. Price</th>
                                                        <th>Description</th>
                                                        <th>Category</th>
                                                        <th>Size</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>Date</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((product) => (
                                                        <tr key={product._id}>
                                                            <td>{product.name}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.previous_price}</td>
                                                            <td>{product.description}</td>
                                                            <td>{product.category}</td>
                                                            <td>{product.size}</td>
                                                            <td>{product.type}</td>
                                                            <td>{product.quantity}</td>
                                                            <td>{moment(product.createdAt).format("DD/MM/YYYY")}</td>
                                                            <td><i className="ti-trash cursor-pointer" onClick={() => dispatch(deleteProduct(product._id))}></i></td>
                                                        </tr>

                                                    ))}
                                                 
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Create Category */}

                            <div className="tab-pane fade" id="create_category" role="tabpanel" aria-labelledby="create_category-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Create Category</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={onSubmitCategory}>
                                            <div className="row">
                                           
                                                <div className="form-group col-md-12">
                                                    <label>Description <span className="required">*</span></label>
                                                    <input 
                                                        required
                                                        className="form-control" 
                                                        name="email" 
                                                        type="text"
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        />
                                                </div>
                                               
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* All Category */}
                            <div className="tab-pane fade" id="allcategory" role="tabpanel" aria-labelledby="allcategory-tab">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Description</th>
                                                        <th>Date</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categories.map((category) => (
                                                        <tr key={category._id}>
                                                            <td>{category.description}</td>
                                                            <td>{moment(category.createdAt).format("DD/MM/YYYY")}</td>
                                                            <td><i className="ti-trash cursor-pointer" onClick={() => dispatch(deleteCategory(category._id))}></i></td>
                                                        </tr>

                                                    ))}
                                                 
                                                </tbody>
                                            </table>
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
    
        </Fragment>
    )
}

export default Account