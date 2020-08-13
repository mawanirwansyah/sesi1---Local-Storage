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

// Menampilkan data pada halaman Product
 function generateData(){
     let result = '';

     for(let i = 0; i < data.length; i++) {
        result += `<div class="row"><div class="col-md-8 card">
        <div class="card-body">
         <div class="row">
          <div class="col-md-8">${data[i].name}-IDR ${data[i].price}</div>
          <div class="col-md-4">
          <button type="submit" onclick="addCart(${data[i].id})" class="btn btn-primary">Add to cart</button></div>
         </div>
         </div></div></div><br><br>`;
     }  

     document.getElementById('product').innerHTML = result;
  
     return result;
 }

// Menyimpan data di local storage
function addCart(id) {
    let result = data.find(element => element.id === id);
  
    cart.push(result); // Push ke array
  
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
  }

//Tampilkan data dari local storage
function getLocalStorage() {
    let result = '';
  
    let dataLS = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < dataLS.length; i++) {
        result += `<div class="row"><div class="col-md-8 card">
        <div class="card-body">
         <div class="row">
          <div class="col-md-8">${dataLS[i].name}-IDR ${dataLS[i].price}</div>
          <div class="col-md-4">
          <button type="submit" onclick="removeCart(${i})" class="btn btn-danger">Remove</button></div>
         </div>
         </div></div></div><br><br>`;
    }
  
    document.getElementById('product').innerHTML = result;
    return result;
} 

// Hapus Data dari local storage
function removeCart(indexToRemove) {
  let dataLS = JSON.parse(localStorage.getItem("productsInCart"));

  dataLS.splice(indexToRemove, 1);

  localStorage.setItem('productsInCart', JSON.stringify(dataLS));

  return getLocalStorage();
}