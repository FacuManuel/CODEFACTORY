

// Función para mostrar un saludo inicial.
function mostrarSaludo() {
    Swal.fire({
      title: 'CodeFactory.',
      text: '¡Welcome to My Portfolio!',
      imageUrl: './images/profile.bmp',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Image Nike',
      customClass: {
  
        popup: 'custom-swal-popup', 
      },
      background: ` url(images/imagenfondo.jpg)`, 
      backdrop: `
        rgba(0,0,0)
        url('images/warning.jpg')
        top
        no-repeat
      `,
    });
  }

  mostrarSaludo();




  //Click events:


  //mostrar alerta al presionar en arraunBoton 
  // Agregar un evento click al enlace
  document.getElementById('arraunBoton').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work, to see more',
      text: 'Arraun cocktail bar page, with sub-pages, gallery, transitions, forms, some adds, javascript',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
    //mostrar alerta al presionar en gitProfile
  // Agregar un evento click al enlace
  document.getElementById('gitProfile').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work to see more',
      text: 'GitHub profile, access to my repositories, access to my projects!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
    //mostrar alerta al presionar en gitRepo 
  // Agregar un evento click al enlace
  document.getElementById('gitRepo').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work to see more',
      text: 'my repositories on GitHub, projects, pages, code for free use!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
      //mostrar alerta al presionar en gitRepo 
  // Agregar un evento click al enlace
  document.getElementById('fotosBar').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work to see more',
      text: 'Gallery section in my project for Arraun Cocktail Bar, transition effects, and more! ',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
    //mostrar alerta al presionar en gitRepo 
  // Agregar un evento click al enlace
  document.getElementById('addsPagina').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'carrousel, responsive grid, anchors with javascript, pop ups!',
      text: 'Simple web page with carousell and some pop ups!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
      //mostrar alerta al presionar en gitRepo 
  // Agregar un evento click al enlace
  document.getElementById('addsEstaPag').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work to see more',
      text: 'Initial style of the page, responsive and modern grid!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })})
        //mostrar alerta al presionar en gitRepo 
  // Agregar un evento click al enlace
  document.getElementById('NikePag').addEventListener('click', function() {
    // Mostrar la alerta SweetAlert
    Swal.fire({
      title: 'Go to Load More Work to see more',
      text: 'Full Javascript page and sweet alert library, contains a user platform and a shopping cart all functional!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/gif/fondociudad.gif)',
      backdrop: `
        rgba()
        url()
        left top
        no-repeat
      `
    })

  })