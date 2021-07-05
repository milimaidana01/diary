function goToHome() {
    window.location.assign("./index.html")
}

function getCart() {
    // obtener cart, devuelve un string o null
    var cart = localStorage.getItem('cart')

    // si cart es null => cart pasa a ser un array vacío
    if (cart === null) {
        cart = []
    } else {
        // si cart no es null, es un string => así que con JSON.parse lo convertimos a un array
        cart = JSON.parse(cart)
    }

    return cart
}

function saveCart(cart) {
    // JSON.stringify => convierte una variable de tipo array u objeto a un string.
    // localStorage.setItem guarda un string en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart))
}

function isProductInsideCart(name) {
    var cart = getCart()

    for (var i = 0; i < cart.length; i++) {
        if (name === cart[i].name) {
            return true
        }
    }

    return false
}

function addToExistingProduct(name) {
    var cart = getCart()

    for (var i = 0; i < cart.length; i++) {
        if (name === cart[i].name) {
            cart[i].quantity = cart[i].quantity + 1
        }
    }

    return cart
}

function addToCart(name, price, photo) {
    var cart = getCart()

    // si el objeto que me agregan ya está en el carrito, simplemente agregale el quantity
    if (isProductInsideCart(name)) {
        cart = addToExistingProduct(name)
    } else {
        // SINO, creás un objeto, y se lo agregás al array
        var product = { name: name, price: price, photo: photo, quantity: 1 }
        cart.push(product)
    }

    saveCart(cart)
}


function printCart() {
    var cart = getCart()

    for (var i = 0; i < cart.length; i++) {
        alert(cart[i].name)
        alert(cart[i].price)
        alert(cart[i].photo)
    }
}