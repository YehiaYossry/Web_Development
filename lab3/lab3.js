let cartQuantity = 0;
    document.getElementById("add").addEventListener("click",addToCart);
    document.getElementById("2cart").addEventListener("click",plus2);
    document.getElementById("3cart").addEventListener("click",plus3);
    document.getElementById("Reset").addEventListener("click",reset);
    
function addToCart() {
    cartQuantity++;
    document.getElementById("quantity").innerText = cartQuantity;
}


function plus2() {
    cartQuantity+=2;
    document.getElementById("quantity").innerText = cartQuantity;
}

function plus3() {
    cartQuantity+=3;
    document.getElementById("quantity").innerText = cartQuantity;
}

function reset() {
    cartQuantity=0;
    document.getElementById("quantity").innerText = cartQuantity;
}



