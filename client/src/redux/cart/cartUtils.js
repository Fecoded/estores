export const addProductToCart = (productItems, productItemToAdd) => {
    const existingProductItem = productItems.find((productItem) => productItem._id === productItemToAdd._id);

    if(existingProductItem) {
        return productItems.map((productItem) => productItem._id === productItemToAdd._id && productItem.qty < productItemToAdd.quantity ? { ...productItem, qty: productItem.qty + 1 } : productItem)
    }

    return [...productItems, { ...productItemToAdd, qty: 1 }]
}

export const addQuantityToProduct = (productItems, productItemToAdd) => {
    const existingProductItem = productItems.find((productItem) => productItem._id === productItemToAdd._id);

    if(existingProductItem) {
        return productItems.map((productItem) => 
            productItem._id === productItemToAdd._id && productItem.qty < productItemToAdd.quantity ? { ...productItem, qty: productItem.qty + 1 } : productItem )
    };

    return [...productItems, { ...productItemToAdd, qty: 1 }]
}

export const removeQuantityToProduct = (productItems, productItemToRemove) => {
    const existingProductItem = productItems.find((productItem) => productItem._id === productItemToRemove._id);

    if(existingProductItem.qty === 1) {
        return productItems.filter((productItem) => productItem._id !== productItemToRemove._id);
    }

    return productItems.map((productItem) => productItem._id === productItemToRemove._id ? { ...productItem, qty: productItem.qty - 1 } : productItem);
}

