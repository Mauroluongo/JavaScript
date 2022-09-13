const camiseta = document.getElementById ('camisetas')

const contadorCarrito = document.getElementById('contadorCarro')




let Carro = []

let stockCamisetas = [{
      
          nombre: "Camiseta Boca",
          id: 1,
          precio: 3500,
          cantidad: 1,
          img: "./img/1.jpg"
      },
 
      {
          nombre: "Buzo Boca",
          id: 2,
          precio: 5000,
          stock: 1,
          img: "./img/6.jpg"
      },
  
      {
          nombre: "Pantalon Boca",
          id: 3,
          precio: 4000,
          stock: 1,
          img: "./img/11.jpg"
      }
    ]

    stockCamisetas.forEach((producto) => {
      const div = document.createElement('div')
      div.classList.add('producto')
      div.innerHTML = `
              <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <img src=${producto.img}>
                  <h3>${producto.nombre}</h3>
                  <p class="precioProducto">Precio: $${producto.precio}</p>
                  <button id="agregar${producto.id}" class="btn btn-dark btn-sm">Agregar <i class="fas fa-shopping-cart"></i></button>
              </div>
          </div>
              `
  
      camiseta.appendChild(div)
  
  
      const boton = document.getElementById(`agregar${producto.id}`)
  
  
      boton.addEventListener('click', () => {
          agregarAlCarrito(producto.id)
      })
  })






/* 
//Creo la clase de objeto producto (camisetas ,buzos, y pantalones de futbol) como base para cargar los productos.

class producto{
      constructor(nombre,id,precio,stock) {
      this.nombre = nombre;
      this.id  =id;
      this.precio = precio;
      this.stock = stock;

}

  vender(cantidad) {
  this.stock = this.stock - cantidad;

  }

}




fetch('./js/productos.json')
.then(response => response.json())
.then(data => console.log(data.camisetas));


//inicializo los arrays para categoria de productos.




const camisetas =[];
const buzos =[];
const pantalones =[];

function procesarProductos (array){
procesarProductosCamisetas(arrayCamisetas);
procesarProductosBuzos(arrayBuzos);
procesarProductosPantalones(arrayPantalones);

}

function procesarProductosCamisetas(arrayCamisetas){
arrayCamisetas.forEach(elemento =>{
camisetas.push(new producto(elemento.nombre,elemento.id,elemento.precio,elemento.stock));
})



}



function procesarProductosBuzos(arrayBuzos){
  arrayBuzos.forEach(elemento =>{
    buzos.push(new producto(elemento.nombre,elemento.id,elemento.precio,elemento.stock));
    })

}


function procesarProductosPantalones(arrayPantalones){

  arrayPantalones.forEach(elemento =>{
    pantalones.push(new producto(elemento.nombre,elemento.id,elemento.precio,elemento.stock));
    })
}


//Cargar stock de los productos.

//Camisetas.
camisetas.push(new producto("camiseta Boca",1,3500 ,50));
camisetas.push(new producto("camiseta River",2,3000,40));
camisetas.push(new producto("camiseta San Lorenzo",3,2500,30));
camisetas.push(new producto("camiseta Racing",4,2000,20));
camisetas.push(new producto("camiseta Independiente" ,5,1500,10));


//Buzos.
buzos.push(new producto("buzo Boca",6,5000,60));
buzos.push(new producto("buzo River",7,4500,50));
buzos.push(new producto("buzo San Lorenzo",8,4000,40));+
buzos.push(new producto("buzo Racing",9,3500,30));
buzos.push(new producto("buzo Independiente",10,3000,20));



//Pantalones.
pantalones.push(new producto("pantalones Boca" ,11,4000,70));
pantalones.push(new producto("pantalones River",12,3500,60));
pantalones.push(new producto("pantalones San Lorenzo",13,3000,50));
pantalones.push(new producto("pantalones Racing",14,2500,40));
pantalones.push(new producto("pantalones Independiente",15,2000,30));


//Recorro los arrays para mostrarle los productos al usuario.
var idPantalones='' , idbuzos='' , idCamisetas='' ;


// recorre tu lista de camisetas
for (const camiseta of camisetas){
  idCamisetas = idCamisetas + camiseta.id + " - " + camiseta.nombre + "\r\n";

}

swal.fire(idCamisetas)

for (const buzo of buzos){
  idbuzos = idbuzos + buzo.id + " - " + buzo.nombre + "\r\n" ;
}

 swal.fire(idbuzos)

for (const pantalon of pantalones){
    idPantalones = idPantalones + pantalon.id + " - " + pantalon.nombre + "\r\n" ;
  
}

  swal.fire(idPantalones)


//Funcion para calcular el precio final de la compra
function calcularPrecio(precioPrenda, cantidadPrenda,costoEnvio) {
   
   return ((precioPrenda* 1.21)* cantidadPrenda) + costoEnvio; 
 
}




//Solicitar al usuario el ID de la prenda y lo almacenamos en una nueva variable con la prenda seleccionada.

let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que va a comprar:"));


const camisetaBuscada = camisetas.find(camiseta => camiseta.id ===prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id ===prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id ===prendaSeleccionada);
// Solicitar al usuario cantidad de la prenda.
console.log(camisetaBuscada);
console.log(buzoBuscado);
console.log(pantalonBuscado);

if(camisetaBuscada !== undefined   || buzoBuscado  !== undefined    || pantalonBuscado  !== undefined){
  
  let cantidad= parseInt(prompt("Ingrese cantidad de unidades que quiere comprar de la prenda seleccionada"));

//costo de envio promedio en CABA.

const envio= 1000;

//Salidas de consola indicando precio final de la compra segun prenda elegida.

if (prendaSeleccionada<= 0){

  alert("ingresa un ID valido");
}else if (prendaSeleccionada <= 3){
   alert("El precio final de tu compra es :$"+ calcularPrecio(camisetaBuscada.precio,cantidad,envio));
   alert("¡Que lo disfrutes!");
   camisetaBuscada.vender(cantidad);

}else if (prendaSeleccionada <= 5){
      alert("El precio final de tu compra es :$"+ calcularPrecio(buzoBuscado.precio,cantidad,envio));
      alert("¡Que lo disfrutes!");
      buzoBuscado.vender(cantidad);

}else if (prendaSeleccionada <= 10){
   alert("El precio final de tu compra es :$"+ calcularPrecio(pantalonBuscado.precio,cantidad,envio));
   alert("¡Que lo disfrutes!");
   pantalonBuscado.vender(cantidad);}
}else{
  alert('EL ID ingresado es un producto invalido');
}


//DOM ----------------------------------------------------------------------------------------------------
//primero tomo control sobre la section previamente creada en el HTML
let sectionProductos = document.getElementById("section-productos");

//creo la funcion para crear el codigo HTML de las cards
function crearCard (producto) {
    //primero creo el div contenedor para cada card y aplico estilos de bootstrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";
    //le asigno las cards al elemento padre section
    sectionProductos.appendChild(card);
    //creo divs que contengan las imagenes de los productos y se los asigno como hijos a las cards
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./img/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

//recorro los arrays de productos para crear las cards con la funcion crearCard
for (const camiseta of camisetas) {
   crearCard(camiseta);
}

for (const pantalon of pantalones) {
    crearCard(pantalon);
}

for (const buzo of buzos) {
    crearCard(buzo);
}

// Saludar

function saludar(){
  const btnSaludar = document.getElementById("enviarSaludo");
  btnSaludar.addEventListener('click',saludar);;
}



//Cambiar Titulo
let inputTexto = document.getElementById("textoParametro");
const btnEnviar = document.getElementById("enviarTexto");


let titulo= document.getElementById("tituloPrueba");
let cadena;

inputTexto.addEventListener('input' ,() =>{
 cadena = inputTexto.value;})


 btnEnviar.addEventListener('click', () => {
  titulo.innerText = cadena;
  
 })


//inicializo la variable carrito con una funcion para que detecte si existen valores en el storage
let Carrito = cargarCarrito();

//tomo control sobre las secciones del HTML

let sectionCarrito = document.getElementById("section-carrito");

//creacion de la seccion carrito con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Cantidad de productos: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = "0";
cantidadProductos.appendChild(cantProductos);







//Funciones
function agregarAlCarrito(id) {
  carrito.push(producto.find(p => p.id == id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantProductos.innerText = "0";
  localStorage.clear();
  carrito = [];
}



function cargarCarrito(){
  let resolucion;
  resolucion = carrito == null ? [] : carrito;
  console.log(resolucion);
  return resolucion;
}

const stockProductos = [{
  id: 1,
  nombre: 'camiseta Boca',
  precio: 3500,
  imagen: './img/1.jpg',
  Stock: 50,
},
{
  id: 6,
  nombre: 'buzo Boca',
  precio: 5000,
  imagen: './img/6.jpg',
  stock :60
},
{
  id: 11,
  nombre: 'pantalon Boca',
  precio: 4000,
  imagen: './img/11.jpg',
  stock:70,
}
]
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

//operador avanzado
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

 document.addEventListener('DOMContentLoaded', () => { 
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
 })  
//operador avanzado



//Alerta libreria
botonVaciar.addEventListener('click', () => {

    swal.fire({
        title: '¡¡Cuidado!!',
        text: 'Usted va a vaciar su carrito!',
        icon: 'warning',
        iconColor: "red",
        showCancelButton: true,

    }).then((result) => {

        if (result.isConfirmed) {
            carrito.length = 0
            actualizarCarrito()
            Swal.fire('Se vacio su carrito')
        }
    })
})
//Alerta libreria

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.className = "card "
    div.innerHTML = `
    <img src=$./img/${producto.id}alt= "" class="card-img-top">
    <h3>${producto.nombre}</h3>
    
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar bg-danger">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {

        agregarAlCarrito(producto.id)

    })
}) */