import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {getProducts} from '../../redux/product/productActions'
import ExclusiveList from './ExclusiveList.component'
import Skeleton from 'react-loading-skeleton';

const ExclusiveItem = ({ getProducts, products, heading, container, section}) => {
    useEffect(() => {
        getProducts()
    },[getProducts])

    const exclusiveProducts = products.filter((product) => product.type === "Exculsive")

    return(
        <div className={`${section !== 'none' && "section"}`}>
            <div className={`${container !== "none" && 'container'}`}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s1 text-center">
                            <h2>{heading !== "none" && 'Exclusive Product' }</h2>
                        </div>
                    </div>
                </div>
        <div className="row">
        	<div className="col-12">
            {products.length > 0 ? (
            <div className="row shop_container loadmore">
                {exclusiveProducts.filter((product, idx) => idx < 8).map((product) => (
                    <ExclusiveList key={product._id} product={product} />
                ))}
            </div>
              ) : (
                <Skeleton count={8} />
              )}
    
            </div>
        </div> 
    </div>
</div>
    )
}

const mapStateToProps = state => ({
    products: state.productReducer.products,
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveItem)