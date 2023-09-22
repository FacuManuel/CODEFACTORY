

// Función para mostrar un saludo inicial.
function mostrarSaludo() {
    Swal.fire({
      title: 'CodeFactory.',
      text: '¡Bienvenido a Mi Portfolio!',
      imageUrl: './images/profile.bmp',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Imagen de Nike',
      customClass: {
  
        popup: 'custom-swal-popup', 
      },
      background: ` url('warning.jpg')`, 
      backdrop: `
        rgba(0,0,0)
        url('images/warning.jpg')
        top
        no-repeat
      `,
    });
  }

  mostrarSaludo();


