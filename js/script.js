const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ["Centro", "Caballito"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"  },
      { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };
  



//------------------------------------------------------------------------


// # Parte 1

//********************************* */
//EJERCICIO 1
//********************************* */

// precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes,
// que es la suma de los precios de cada componente incluido.

const precioComponente = (componente) => {
    for (const objComponente of local.precios) {
        if (objComponente.componente === componente) {
            return objComponente.precio
        }
    }
}
//console.log(precioComponente("Monitor GPRS 3000")) // 200


const precioMaquina = (array) => {
    let precioComponentesComprados = 0
    for (const componente of array) {
        precioComponentesComprados += precioComponente(componente)
    }
    return precioComponentesComprados
}

console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']));
// 320 ($200 del monitor + $120 del motherboard)))


//********************************* */
// EJERCICIO 2
//********************************* */

// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
// o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro,
// se asume que está identificada por la variable ventas


const cantidadVentasComponente = (unComponente) => {
    let cantidadDeVecesQueSeVendioElComponente = 0
    const {ventas} = local
    for (const venta of ventas) {
        // console.log(venta)
        if (venta.componentes.includes(unComponente)) {
            cantidadDeVecesQueSeVendioElComponente++
        }
    }
    return cantidadDeVecesQueSeVendioElComponente
}
//console.log(cantidadVentasComponente('Monitor ASC 543')); // 5



//********************************* */
//EJERCICIO 3
//********************************* */

// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
// El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).


const vendedoraDelMes1 = (mes, anio) => {
    let vendedoraCapa = ""
    let totalVentasVendedoraCapa = 0
    // destructuro las prpiedades que necesito
    const {ventas, vendedoras} = local
    //filtro la propiedad ventas: y chekeo que la propiedad fecha de cada venta cpincida o no con las que paso x parametro
    const ventasFiltradoPorFecha = ventas.filter(elemento => elemento.fecha.getMonth() + 1 === mes && elemento.fecha.getFullYear() === anio)
    // creo el objeto vendedoras que es donde voy a poner cuanto vendio cada una(aca guardo el resultado de la fx precioMaquina)
    const vendedorasObj = {}
    //recorro el array vendedoras
    for (const vendedora of vendedoras) {
        // creo el contador para guardar las ventas acumuladas de cada una
        let contadorVentas = 0
        //
        for ( const venta of ventasFiltradoPorFecha) {
            if (vendedora === venta.nombreVendedora) {
                contadorVentas += precioMaquina(venta.componentes)// aca uso la fx precioMaquina y guardo en el contador el monto de la venta
            }
        }
        if (totalVentasVendedoraCapa < contadorVentas) {
            totalVentasVendedoraCapa = contadorVentas
            vendedoraCapa = vendedora
        }
    }return vendedoraCapa
    }

//console.log(vendedoraDelMes1(1, 2019))


//********************************* */
// EJERCICIO 4
//********************************* */

// ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {
    const {ventas} = local
    //console.log(ventas)
    const ventasDelMes = ventas.filter( venta => venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio)
    let totalVentasDeEseMes = 0
    for (const venta of ventasDelMes) {
        totalVentasDeEseMes += precioMaquina(venta.componentes)
    }
    return totalVentasDeEseMes
}
//console.log(ventasMes(1, 2019))

//********************************* */
// EJERCICIO 5
//********************************* */
// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

const ventasVendedora = (nombreDeVendedora) => {
    const {ventas} = local
    const ventasPorVendedora = ventas.filter( venta => venta.nombreVendedora === nombreDeVendedora)
    let totalVentasDeEsaVendedora = 0
    for (const venta of ventasPorVendedora){
        totalVentasDeEsaVendedora += precioMaquina(venta.componentes)
    }
    return totalVentasDeEsaVendedora
}
//console.log(ventasVendedora("Hedy"))



//********************************* */
// EJERCICIO 6
//********************************* */


// componenteMasVendido():
// Devuelve el nombre del componente que más ventas tuvo historicamente.
// El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
// tete: la cantidad de veces que el componente ese fue vendido
// ejercicios artistas, cuantos artistas tocaban ese instrumento
// crear objeto con cada componente y cuantos ventas se hizo y retornar el numero mayou


const componenteMasVendido = () => {
    const {precios} = local 
    let acc = 0;
    let componenteMasDemandado = "";
    for (const precio of precios) {
        if (acc < cantidadVentasComponente(precio.componente)){
            acc = cantidadVentasComponente(precio.componente)
            componenteMasDemandado = precio.componente
        }
    }
    return componenteMasDemandado
}
//console.log(componenteMasVendido())



//********************************* */
// EJERCICIO 7
//********************************* */


// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
// El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
// `

const huboVentas = (mes, anio) => {
    const {ventas} = local
    const ventasFiltradoPorFecha = ventas.filter(elemento => elemento.fecha.getMonth() + 1 === mes && elemento.fecha.getFullYear() === anio)
    return ventasFiltradoPorFecha
}
//console.log(huboVentas(1, 2019))


//********************************* *///********************************* */
// # Parte 2
//********************************* *///********************************* */

//********************************* */
// EJERCICIO 8
//********************************* */

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
// `

const ventasSucursal = (sucursalP) => {
    const {ventas} = local
    const ventasXsucursal = ventas.filter(venta => venta.sucursal === sucursalP)
    return ventasXsucursal
}
//console.log(ventasSucursal("Centro"))




// `
// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces,
// ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
// `



//********************************* */
// sucursalDelMes
//********************************* */
// `
// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
// El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// devuelva la suc q mas vendio en $ en esa fecha 

const sucursalDelMes = (mes, anio) =>{
    const {ventas} = local
    const ventasFiltradoPorFecha = ventas.filter(elemento => elemento.fecha.getMonth() + 1 === mes && elemento.fecha.getFullYear() === anio)
    //console.log(ventasFiltradoPorFecha)
    let contadorVentasXsucursal = 0
    for (venta of ventasFiltradoPorFecha) {
        contadorVentasXsucursal += precioMaquina(venta.componentes)
        
    }
    return contadorVentasXsucursal
}

//console.log(sucursalDelMes(1, 2019))

// `
// # Parte 3


// `
// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
// `




// `
// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
// `

// `
// render(): Tiene que mostrar la unión de los dos reportes anteriores,
// cual fue el producto más vendido y la vendedora que más ingresos generó
// `
// `
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace


// RENDERIZANDO:

//PARA QUE LA FECHA ME QUEDE BIEN USAR ESTA FUNCION:
//const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);



const tablaHtml = document.getElementById('tabla'); // la tabla
const formulario = document.getElementById('nuevaVenta'); //el formulario

const llenarTablaVentas =  () => {
    const {ventas, precios} = local
    for ( const venta of ventas) {
        //console.log(venta)
        const crearFila = document.createElement('tr');
        tablaHtml.appendChild(crearFila);
            crearFila.innerHTML =
                `<td>${fecha}</td>
                <td>${venta.nombreVendedora}</td>
                <td>${sucursal}</td>
                <td>${componentes}</td>
                <td>${precioMaquina(ventas.componentes)}</td>
                <td class= "td-botones">
                <button type="button" class="btn" id="btn-editar"><i class="fas fa-edit iconEditar"></i></button>
                <button type="button" class="btn" id="btn-eliminar"><i class="fas fa-trash iconEliminar"></i></button> 
                `
            }
        }
llenarTablaVentas();
