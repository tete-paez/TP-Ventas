//----------------------------------------------------------------------------------
// DATOS
//----------------------------------------------------------------------------------

const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ["Centro", "Caballito"],

    ventas: [
        // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
        {
            fecha: new Date(2019, 1, 4),
            nombreVendedora: "Grace",
            componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 0, 1),
            nombreVendedora: "Ada",
            componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 0, 2),
            nombreVendedora: "Grace",
            componentes: ["Monitor ASC 543", "Motherboard MZI"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 0, 10),
            nombreVendedora: "Ada",
            componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 0, 12),
            nombreVendedora: "Grace",
            componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 24),
            nombreVendedora: "Sheryl",
            componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
            sucursal: "Caballito",
        },
        {
            fecha: new Date(2019, 1, 12),
            nombreVendedora: "Hedy",
            componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 1),
            nombreVendedora: "Ada",
            componentes: ["Motherboard MZI", "RAM Quinston Fury"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 11),
            nombreVendedora: "Grace",
            componentes: ["Monitor ASC 543", "RAM Quinston"],
            sucursal: "Caballito",
        },
        {
            fecha: new Date(2019, 1, 15),
            nombreVendedora: "Ada",
            componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 12),
            nombreVendedora: "Hedy",
            componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
            sucursal: "Caballito",
        },
        {
            fecha: new Date(2019, 1, 21),
            nombreVendedora: "Grace",
            componentes: ["Motherboard MZI", "RAM Quinston"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 8),
            nombreVendedora: "Sheryl",
            componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 16),
            nombreVendedora: "Sheryl",
            componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 27),
            nombreVendedora: "Hedy",
            componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
            sucursal: "Caballito",
        },
        {
            fecha: new Date(2019, 1, 22),
            nombreVendedora: "Grace",
            componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 5),
            nombreVendedora: "Ada",
            componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 1),
            nombreVendedora: "Grace",
            componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
            sucursal: "Centro",
        },
        {
            fecha: new Date(2019, 1, 7),
            nombreVendedora: "Sheryl",
            componentes: ["Monitor GPRS 3000", "RAM Quinston"],
            sucursal: "Caballito",
        },
        {
            fecha: new Date(2019, 1, 14),
            nombreVendedora: "Ada",
            componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
            sucursal: "Centro",
        },
    ],

    precios: [{
            componente: "Monitor GPRS 3000",
            precio: 200,
        },
        {
            componente: "Motherboard ASUS 1500",
            precio: 120,
        },
        {
            componente: "Monitor ASC 543",
            precio: 250,
        },
        {
            componente: "Motherboard ASUS 1200",
            precio: 100,
        },
        {
            componente: "Motherboard MZI",
            precio: 30,
        },
        {
            componente: "HDD Toyiva",
            precio: 90,
        },
        {
            componente: "HDD Wezter Dishital",
            precio: 75,
        },
        {
            componente: "RAM Quinston",
            precio: 110,
        },
        {
            componente: "RAM Quinston Fury",
            precio: 230,
        },
    ],
};

//----------------------------------------------------------------------
// EJERCITACION / PRACTICA
//----------------------------------------------------------------------------------
const precioComponente = (componente) => {
    for (const objComponente of local.precios) {
        if (objComponente.componente === componente) {
            return objComponente.precio;
        }
    }
};
//console.log(precioComponente("Monitor GPRS 3000")) // 200

const precioMaquina = (arrayComponentes) => {
    let precioComponentesComprados = 0;
    for (const componente of arrayComponentes) {
        precioComponentesComprados += precioComponente(componente);
    }
    return precioComponentesComprados;
};

//console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']));

const cantidadVentasComponente = (unComponente) => {
    let cantidadDeVecesQueSeVendioElComponente = 0;
    const {
        ventas
    } = local;
    for (const venta of ventas) {
        // console.log(venta)
        if (venta.componentes.includes(unComponente)) {
            cantidadDeVecesQueSeVendioElComponente++;
        }
    }
    return cantidadDeVecesQueSeVendioElComponente;
};
//console.log(cantidadVentasComponente('Monitor ASC 543')); // 5

const vendedoraDelMes1 = (mes, anio) => {
    let vendedoraCapa = "";
    let totalVentasVendedoraCapa = 0;
    // destructuro las prpiedades que necesito
    const {
        ventas,
        vendedoras
    } = local;
    //filtro la propiedad ventas: y chekeo que la propiedad fecha de cada venta cpincida o no con las que paso x parametro
    const ventasFiltradoPorFecha = ventas.filter(
        (elemento) =>
        elemento.fecha.getMonth() + 1 === mes &&
        elemento.fecha.getFullYear() === anio
    );
    // creo el objeto vendedoras que es donde voy a poner cuanto vendio cada una(aca guardo el resultado de la fx precioMaquina)
    const vendedorasObj = {};
    //recorro el array vendedoras
    for (const vendedora of vendedoras) {
        // creo el contador para guardar las ventas acumuladas de cada una
        let contadorVentas = 0;
        //
        for (const venta of ventasFiltradoPorFecha) {
            if (vendedora === venta.nombreVendedora) {
                contadorVentas += precioMaquina(venta.componentes); // aca uso la fx precioMaquina y guardo en el contador el monto de la venta
            }
        }
        if (totalVentasVendedoraCapa < contadorVentas) {
            totalVentasVendedoraCapa = contadorVentas;
            vendedoraCapa = vendedora;
        }
    }
    return vendedoraCapa;
};

//console.log(vendedoraDelMes1(1, 2019))

const ventasMes = (mes, anio) => {
    const {
        ventas
    } = local;
    //console.log(ventas)
    const ventasDelMes = ventas.filter(
        (venta) =>
        venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio
    );
    let totalVentasDeEseMes = 0;
    for (const venta of ventasDelMes) {
        totalVentasDeEseMes += precioMaquina(venta.componentes);
    }
    return totalVentasDeEseMes;
};
//console.log(ventasMes(1, 2019))

const ventasVendedora = (nombreDeVendedora) => {
    const {
        ventas
    } = local;
    const ventasPorVendedora = ventas.filter(
        (venta) => venta.nombreVendedora === nombreDeVendedora
    );
    let totalVentasDeEsaVendedora = 0;
    for (const venta of ventasPorVendedora) {
        totalVentasDeEsaVendedora += precioMaquina(venta.componentes);
    }
    return totalVentasDeEsaVendedora;
};
//console.log(ventasVendedora("Hedy"))

const componenteMasVendido = () => {
    const {
        precios
    } = local;
    let acc = 0;
    let componenteMasDemandado = "";
    for (const precio of precios) {
        if (acc < cantidadVentasComponente(precio.componente)) {
            acc = cantidadVentasComponente(precio.componente);
            componenteMasDemandado = precio.componente;
        }
    }
    return componenteMasDemandado;
};
//console.log(componenteMasVendido())

const huboVentas = (mes, anio) => {
    const {
        ventas
    } = local;
    const ventasFiltradoPorFecha = ventas.filter(
        (elemento) =>
        elemento.fecha.getMonth() + 1 === mes &&
        elemento.fecha.getFullYear() === anio
    );
    return ventasFiltradoPorFecha;
};
//console.log(huboVentas(1, 2019))

const ventasSucursal = (sucursalP) => {
    const {
        ventas
    } = local;
    const ventasXsucursal = ventas.filter(
        (venta) => venta.sucursal === sucursalP
    );
    return ventasXsucursal;
};
//console.log(ventasSucursal("Centro"))

const sucursalDelMes = (mes, anio) => {
    const {
        ventas
    } = local;
    const ventasFiltradoPorFecha = ventas.filter(
        (elemento) =>
        elemento.fecha.getMonth() + 1 === mes &&
        elemento.fecha.getFullYear() === anio
    );
    //console.log(ventasFiltradoPorFecha)
    let contadorVentasXsucursal = 0;
    for (venta of ventasFiltradoPorFecha) {
        contadorVentasXsucursal += precioMaquina(venta.componentes);
    }
    return contadorVentasXsucursal;
};

//console.log(sucursalDelMes(1, 2019))

//------------------------------------------------------------------------
//------------------------------------------------------------------------
// PROTECTO ADA VENTAS
//------------------------------------------------------------------------
//------------------------------------------------------------------------



//------------------------------------------------------------------------
// VARIABLES
//------------------------------------------------------------------------

const btnNuevaVenta = document.getElementById("nuevaVenta"); //boton nueva venta
const tablaHtml = document.getElementById("tabla"); // la tabla
const modalVenta = document.getElementById("agregarVenta"); //el modal
const formulario = document.getElementById("nuevaVenta"); //el formulario
const aceptarNuevaVenta = document.getElementById("btnSubmitNuevaVenta"); // boton aceptar la venta

const btnCancelarEliminarVenta = document.getElementById("cerrarModalEliminarVenta"); // BOTON "CANCELO LA ELIMINADA"

const cerrarModalVenta = document.getElementById("cerrarModalVenta");
//----------------------------------------------------------------------------------
// SECCION VENTAS POR SUCURSAL

const ventasXsucursalCentro = document.getElementById("celdaVentasPorSucursalCentro");
const ventasXsucursalCaballito = document.getElementById("celdaVentasPorSucursalCaballito");
const elComponenteMasVendido = document.getElementById("celdaProductoEstrella");
const laVendedoraQueMasVendio = document.getElementById("celdaVendedoraMayorIngresoGenerado");

//----------------------------------------------------------------------------------
// MODALES EDITAR VENTA Y ELIMINAR VENTA

const modalEditarVenta = document.getElementById("editarVenta"); // modal
const aceptarEdicionModalEditarVenta = document.getElementById("aceptarEdicionEnModalEditarVenta"); // id de boton aceptar editar la venta y guardaro (tick)
const modalEliminarVenta = document.getElementById("eliminarVenta"); // modal eliminar venta
const botonAceptarEliminarModalEliminarVenta = document.getElementById("aceptarEliminarVenta");
const cerrarModalEditarVenta = document.getElementById("cerrarModalEditarVenta");


//----------------------------------------------------------------------------------

// ABRIR MODAL NUEVA VENTA
btnNuevaVenta.addEventListener("click", () => {
    modalVenta.classList.add("mostrar");
});

// CERRAR MODAL NUEVA VENTA
cerrarModalVenta.addEventListener("click", () => {
    modalVenta.classList.remove("mostrar")
});

const llenarTablaVentas = () => {
    let format = (date, locale, options) =>
        new Intl.DateTimeFormat(locale, options).format(date);
    const {ventas} = local;
    ventas.forEach((venta, index) => {
        //const {fecha, nombreVendedora, sucursal, componentes} = venta
        const crearFila = document.createElement("tr");
        tablaHtml.appendChild(crearFila);
        crearFila.innerHTML += `<td>${format(venta.fecha)}</td>
            <td>${venta.nombreVendedora}</td>
            <td>${venta.sucursal}</td>
            <td>${venta.componentes}</td>
            <td>${precioMaquina(venta.componentes)}</td>
            <td class= "td-botones">
                <button type="button" class="btn editarVentaParaModal" id=${index}>
                    <i class="fas fa-edit iconEditar"></i>
                </button>
                <button type="button" class="btn eliminarVentaParaModal" id=${index}>
                    <i class="fas fa-trash iconEliminar"></i>
                </button> 
                    `;
    });
};
llenarTablaVentas();

aceptarNuevaVenta.addEventListener("click", (e) => {
    e.preventDefault();
    const {ventas} = local;
    const nuevaVenta = {
        fecha: new Date(fecha.value),
        nombreVendedora: vendedoras.value,
        componentes: obtenerValoresSeleccionados(componentes),
        sucursal: sucursal.value,
    };
    // console.log(fecha.value)
    // console.log(ventas)
    ventas.push(nuevaVenta);
    // console.log(nuevaVenta)
    // console.log(ventas)
    tablaHtml.innerHTML = "";
    llenarTablaVentas();
    modalVenta.classList.remove("mostrar");
    actualizarSeccionVentasXsucursales();
    abrirModalEditarVenta()
    abrirModalEliminarVenta()
});

const cargarVendedoras = () => {
    const {
        vendedoras
    } = local;
    const select = document.getElementById("vendedoras"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (const vendedora of vendedoras) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = vendedora; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
};
cargarVendedoras();

const cargarComponentes = () => {
    const {
        precios
    } = local;
    for (const precio of precios) {
            const {componente} = precio;
            const selectComponente = document.getElementById("componentes"); //Seleccionamos el select
            let optionComponente = document.createElement("option"); //Creamos la opcion
            optionComponente.innerHTML = componente; //Metemos el texto en la opción
            selectComponente.appendChild(optionComponente); //Metemos la opción en el select
    }
};
cargarComponentes();

const cargarSucursales = () => {
    const {
        sucursales
    } = local;
    const select = document.getElementById("sucursal"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (let i = 0; i < sucursales.length; i++) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = sucursales[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
};
cargarSucursales();

let obtenerValoresSeleccionados = (select) => {
    let result = [];
    let options = select && select.options;
    let opt;

    for (let i = 0; i < options.length; i++) {
        opt = options[i];
        opt.selected ? result.push(opt.value) : false;
    }
    return result;
};

actualizarTabla = () => {
    tablaHtml.innerHTML = "";
    llenarTablaVentas();
};



const actualizarSeccionVentasXsucursales = () => {
    actualizarTabla();
    ventasXsucursalCentro.innerHTML = ventasSucursal("Centro").length;
    ventasXsucursalCaballito.innerHTML = ventasSucursal("Caballito").length;
    elComponenteMasVendido.innerHTML = componenteMasVendido();
    laVendedoraQueMasVendio.innerHTML = ventasVendedora("Hedy");
};
actualizarSeccionVentasXsucursales();


// FUNCION PARA QUE APAREZCA EL MODAL DE EDITAR VENTA Y CARGAR SELECTS (vendedoras,sucursal,fecha,componentes)

const cargarVendedorasModal = () => {
    const {
        vendedoras
    } = local;
    const select = document.getElementById("vendedorasModal"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (const vendedora of vendedoras) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = vendedora; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
};

const cargarComponentesModal = () => {
    const {
        precios
    } = local;
    for (const precio of precios) {
        const {
            componente
        } = precio;
        const selectComponente = document.getElementById("componentesModal"); //Seleccionamos el select
        let optionComponente = document.createElement("option"); //Creamos la opcion
        optionComponente.innerHTML = componente; //Metemos el texto en la opción
        selectComponente.appendChild(optionComponente); //Metemos la opción en el select
    }
    // return true
};

const cargarSucursalesModal = () => {
    const {
        sucursales
    } = local;
    const select = document.getElementById("sucursalModal"); //Seleccionamos el select
    //recorro el array de vendedoras y creo los elementos donde van a ir
    for (let i = 0; i < sucursales.length; i++) {
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = sucursales[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
};
// ABRIR MODAL EDITAR VENTA E INTERCAMBIAR LOS NUEVOS IDs

const abrirModalEditarVenta = () => {
    let todosLosBotonesEditarVenta = document.querySelectorAll(".editarVentaParaModal"); // clase del boton editar venta => todos los botones
    for (const botonEditarVenta of todosLosBotonesEditarVenta) {
        botonEditarVenta.addEventListener("click", () => {
            modalEditarVenta.classList.add("mostrar");
            let idBotonEditarVenta = botonEditarVenta.getAttribute("id");
            aceptarEdicionModalEditarVenta.setAttribute("idDEEditarVenta", idBotonEditarVenta);
        });
    }
};
abrirModalEditarVenta();
cargarVendedorasModal();
cargarComponentesModal();
cargarSucursalesModal();

    let fechaModalEditar = document.getElementById("fechaModal");
    let vendedoraModalEditar = document.getElementById("vendedorasModal");
    let componentesModalEditar = document.getElementById("componentesModal");
    let sucursalModalEditar = document.getElementById("sucursalModal");

aceptarEdicionModalEditarVenta.addEventListener("click", (e) => {
    //   e.preventDefault();
    const {ventas} = local;
    const nuevaVentaEditada = {
        fecha: fechaModalEditar.value,
        nombreVendedora: vendedoraModalEditar.value,
        componentes: obtenerValoresSeleccionados(componentesModalEditar),
        sucursal: sucursalModalEditar.value,
    };
    ventas.forEach((venta, index) => {
        if (index == aceptarEdicionModalEditarVenta.getAttribute("idDEEditarVenta")) {
            ventas.splice(index, 1, nuevaVentaEditada);
            }
            modalEditarVenta.classList.remove("mostrar");
        // console.log(aceptarEdicionModalEditarVenta) 
        actualizarTabla();
        actualizarSeccionVentasXsucursales();
        abrirModalEditarVenta()
        abrirModalEliminarVenta()
    });
});


const abrirModalEliminarVenta = () => {
    let todosLosBotonesEliminarVenta = document.querySelectorAll(
        ".eliminarVentaParaModal"
    ); // clase del boton editar venta => todos los botones
    for (const botonEliminarVenta of todosLosBotonesEliminarVenta) {
        botonEliminarVenta.addEventListener("click", () => {
            modalEliminarVenta.classList.add("mostrar");
            const idBotonEliminarVenta = botonEliminarVenta.getAttribute("id");
            botonAceptarEliminarModalEliminarVenta.setAttribute(
                "idDEEliminarVenta",
                idBotonEliminarVenta
            );
        });
    }
    abrirModalEditarVenta
};
abrirModalEliminarVenta();

const aceptarVentaEliminada = () => {
    const {ventas} = local;
    modalEliminarVenta.classList.remove("mostrar");
    ventas.forEach((venta, index) => {
        //console.log(index)
        if (index ===parseInt(botonAceptarEliminarModalEliminarVenta.getAttribute("idDEEliminarVenta"))
        )ventas.splice(index, 1);
        actualizarTabla();
        actualizarSeccionVentasXsucursales();
        abrirModalEliminarVenta()
    });
};
botonAceptarEliminarModalEliminarVenta.addEventListener(
    "click",
    aceptarVentaEliminada
);

// BOTON ELIMINAR VENTA + MODAL ELIMINAR VENTA + BOTON CANCELAR Y CERRAR MODAL ELIMINAR VENTA + BOTON ACEPTAR Y CERRAR MODAL ELIMINAR VENTA

btnCancelarEliminarVenta.addEventListener("click", () => {
modalEliminarVenta.classList.remove("mostrar");
});

// FUNCION PARA QUE desAPAREZCA EL MODAL haciendo click afuera

//----->  MODAL NUEVA VENTA
window.addEventListener("click", (e) => {
    if (e.target == modalVenta) {
        modalVenta.classList.remove("mostrar");
    }
});
//-----> MODAL EDITAR VENTA
window.addEventListener("click", (e) => {
    if (e.target == modalEditarVenta) {
        modalEditarVenta.classList.remove("mostrar");
    }
});
//-----> MODAL EDITAR VENTA
window.addEventListener("click", (e) => {
    if (e.target == modalEliminarVenta) {
        modalEliminarVenta.classList.remove("mostrar");
    }
});

