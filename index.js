var data = [
    {
      name : "Gaming Mouse",
      price: 1000000,
      id : 1,
    },
    {
      name : "Monitor Gaming",
      price: 2500000,
      id : 2,
    },
    {
      name : "Earphone Gaming",
      price: 1500000,
      id : 3,
    },
 ];

 let cart = [];

 // Generate data for view default product in product page
 function generateData(){
     let result = '';

     for(let i = 0; i < data.length; i++) {
        result += `<div class="row"><div class="col-md-6 card"><div class="card-body">
        <div class="row col-md-12"><div class="col-md-8">${data[i].name}-IDR ${data[i].price}</div>
        <div class="col-md-4">
        <button type="submit" onclick="addCart(${data[i].id})" class="btn btn-primary">Add to cart</button>
        </div></div></div></div></div><br><br>`
     }  

     document.getElementById('container').innerHTML = result;
  
     return result;
 }

// addCart for push product data to Cart
function addCart(id) {
    let result = data.find(element => element.id === id);
  
    cart.push(result); // Push ke array
  
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
  }
