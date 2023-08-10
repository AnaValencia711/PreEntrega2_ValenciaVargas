// Base de datos de platos del restaurante
let platosRestaurante = [
    { id: 1, nombre: "Arroz con Pollo", precio: 10.00 },
    { id: 2, nombre: "Papa a la Huancaina", precio: 8.00 },
    { id: 3, nombre: "Ceviche", precio: 12.00 }
  ];
  
  // Pedido actual
  let pedido = [];
  
  // Función para mostrar los platos del restaurante
  function mostrarPlatosRestaurante() {
    alert("Platos del restaurante:");
    platosRestaurante.forEach(plato => {
      alert(`${plato.id}: ${plato.nombre} - $${plato.precio.toFixed(2)}`);
    });
  }
  
  // Función para agregar un plato al pedido
  function agregarPlatoAlPedido(id) {
    let plato = platosRestaurante.find(item => item.id === id);
    if (plato) {
      pedido.push(plato);
      alert(`${plato.nombre} agregado al pedido.`);
    } else {
      alert("Plato no encontrado en el restaurante.");
    }
  }
  
  // Función para calcular el total del pedido
  function calcularTotalPedido() {
    return pedido.reduce((total, plato) => total + plato.precio, 0);
  }
  
  // Simulador Restaurant Mil Sabores
  while (true) {
    let opcion = prompt("\n --Restaurant Mil Sabores--\n \n Elige una opción:\n 1. Mostrar platos\n 2. Agregar plato al pedido\n 3. Mostrar pedido\n 4. Mostrar total($) del pedido\n 5. Registrarse como Cliente VIP \n 6. Salir");
  
   
  
    switch (opcion) {
      case "1":
        mostrarPlatosRestaurante();
        break;
      case "2":
        mostrarPlatosRestaurante();
        let platoId = parseInt(prompt("Ingresa el numero de opción que deseas agregar al pedido:"));
        agregarPlatoAlPedido(platoId);
        break;
      case "3":
        alert("\n--- Pedido Actual ---");
        if (pedido.length === 0) {
          alert("El pedido está vacío.");
        } else {
          pedido.forEach(plato => {
            alert(`${plato.nombre} - $${plato.precio.toFixed(2)}`);
          });
        }
        break;
      case "4":
        alert(`Total del pedido: $${calcularTotalPedido().toFixed(2)}`);
        break;

      case "5":
            // Definición de la clase Cliente
        class Cliente {
            constructor(nombre, numCel) {
            this.nombre = nombre;
            this.numCel = numCel;
            }
        }
        
        // Inicialización de variables
        let registro = [];
     
        
        // Función para agregar un cliente
        function agregarCliente(nombre, numCel) {
            const cliente = new Cliente (nombre, numCel);
            registro.push(cliente);
            
        }
        
        // Función para mostrar el registro de cliente
        function mostrarCliente() {
            alert("Registro de Clientes:");
            registro.forEach(cliente => {
            alert(`${cliente.nombre} - Numero de contacto: ${cliente.numCel}`);
            });
           
        }
        
        // Bucle para interactuar con el usuario
        while (true) {
            const accion = prompt("¿Qué deseas hacer? (registrarse/mostrar/salir)").toLowerCase();
            
            if (accion === "registrarse") {
            const nombreCliente = prompt("Ingresa tu nombre:");
            const numCelCliente = parseFloat(prompt("Ingresa tu número de contacto:"));
            agregarCliente(nombreCliente, numCelCliente);
            alert(`${nombreCliente} se ha agregado al registro de clientes VIP ¡Felicidades!.`);
            } else if (accion === "mostrar") {
            mostrarCliente();
            } else if (accion === "salir") {
            alert("Gracias por usar nuestro registro de clientes.");
            break;
            } else {
            alert("Acción no reconocida. Intenta de nuevo.");
            }
        }
        break
        case "6":
          alert("Gracias por visitarnos. ¡Buen provecho!");
        break;
        default:
          alert("Opción inválida. Inténtalo de nuevo.");
        break;
    }
  }