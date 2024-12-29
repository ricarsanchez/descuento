const perfiles = {
    "Chapa 1mm": {"precio_bruto_pesos": 14939.05, "precio_venta_dolares": 10.8},
    "Perfil 80x40x1,6mm": {"precio_bruto_pesos": 10044, "precio_venta_dolares": 4.9},
    "Perfil 100x40x1,6mm": {"precio_bruto_pesos": 12357.17, "precio_venta_dolares": 5.5},
    "Perfil 120x50x1,6mm": {"precio_bruto_pesos": 14397.34, "precio_venta_dolares": 6.7},
    "Perfil 80x40x2mm": {"precio_bruto_pesos": 14303.83, "precio_venta_dolares": 6.0},
    "Perfil 100x40x2mm": {"precio_bruto_pesos": 17212.61, "precio_venta_dolares": 6.7},
    "Perfil 120x50x2mm": {"precio_bruto_pesos": 22683.26, "precio_venta_dolares": 8.3},
  };
  const inputTasaCambio = document.getElementById('tasa-cambio');
  const divResultados = document.getElementById('resultados');
  function calcularDescuento() {
    const tasaCambio = parseFloat(inputTasaCambio.value);
    divResultados.innerHTML = ''; // Limpiar resultados anteriores
    for (const perfil in perfiles) {
      const precioOriginalDolares = perfiles[perfil].precio_bruto_pesos / tasaCambio;
      const descuento = precioOriginalDolares - perfiles[perfil].precio_venta_dolares;
      const porcentajeDescuento = (descuento / precioOriginalDolares) * 100;
      const resultado = `
        <p>Perfil: ${perfil} - Porcentaje de descuento: ${porcentajeDescuento.toFixed(2)}%</p>
      `;
      divResultados.insertAdjacentHTML('beforeend', resultado);
    }
  }