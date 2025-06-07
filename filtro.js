// Arreglo de objetos: cada objeto representa un producto
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Cambio: seleccionamos correctamente el contenedor usando su ID.
// En el código original se usaba `getElementsByName`, que no sirve en este caso.
const li = document.getElementById("lista-de-productos");

//Cambio: el input no tenía clase, por eso `.input` no funcionaba.
// Solución: darle un ID en el HTML y seleccionarlo con `getElementById`.
const $i = document.getElementById("input-busqueda");

// Mostramos todos los productos al inicio
// Esta parte la tenía después del for pero sin definir antes la función.
displayProductos(productos);

// ✅ Creamos productos y los mostramos en pantalla
function displayProductos(lista) {
  li.innerHTML = ""; // limpia el contenedor antes de mostrar

  // Recorremos el arreglo y creamos los elementos HTML para cada producto
  for (let i = 0; i < lista.length; i++) {
    let d = document.createElement("div");
    d.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = lista[i].nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute("src", lista[i].img);
    imagen.setAttribute("alt", lista[i].nombre); // buena práctica

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  }
}

// 🔧 Seleccionamos el botón para aplicar el filtro
const botonDeFiltro = document.querySelector("button");

// Cuando el usuario hace clic en "Filtrar"
botonDeFiltro.onclick = function () {
  // Obtenemos el texto ingresado
  const texto = $i.value.trim().toLowerCase(); // trim() limpia espacios extra

  // Filtramos la lista según el texto
  const productosFiltrados = filtrado(productos, texto);

  // Mostramos solo los productos filtrados
  displayProductos(productosFiltrados);
}

// ✅ Función para filtrar los productos
const filtrado = (productos = [], texto) => {
  // Solo devolvemos productos cuyo tipo o color incluya el texto ingresado
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto)
  );
}
