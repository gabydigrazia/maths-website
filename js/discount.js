const applyDiscount = (PRICE, DISCOUNT) => {
    return PRICE * (100 - DISCOUNT) / 100; 
}

const calculateNewPrice =() => {
    const PRICE = document.getElementById("priceInput").value;
    const DISCOUNT = document.getElementById("discountInput").value;

    if (!PRICE || !DISCOUNT) {
        document.getElementById("errorMessageDiscount").innerHTML = 'You must enter price and discount.'
        document.getElementById("errorMessageDiscount").style.display = "block";
    } else {
        const NEW_PRICE = applyDiscount(PRICE, DISCOUNT);
        document.getElementById("errorMessageDiscount").style.display = "none";
        document.getElementById("discountResult").innerHTML = `You have to pay: $${NEW_PRICE}`;
    }
}
