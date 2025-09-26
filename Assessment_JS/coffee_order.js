    function order() {
    let customerName = prompt("Enter Your Name")
    let orderItems = prompt("Enter Your Order")

    // alert("Hello " + customerName + ", Your order " + orderItems + " will be ready soon.")
    
    function capitalName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    alert(`Hello ${capitalName(customerName)}, Your order ${orderItems} will be ready soon.`)

}