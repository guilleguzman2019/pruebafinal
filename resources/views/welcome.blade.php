<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

        <link rel="stylesheet" href="{{ asset('/style/welcome.css') }}">
    </head>
    <body class="antialiased">
         <!-- Navbar  -->
     <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-sm-4 p-md-4">
        <div class="container">
          <img src="https://eventdate.es/wp-content/uploads/2022/10/LOGO-EVENTDATE-BLANCO.png" alt="" width="150">
          <div class="contenedorbts">
            @auth
              <a href="{{ url('/panel') }}" class="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Ir a Panel</a>
            @else
                <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

            @if (Route::has('register'))
               <a href="{{ route('register') }}" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
            @endif
            @endauth
        </div>
        </div>
      </nav>
  
      <!-- Banner Image  -->
      <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div class="content">
          <section id="contenido">
            <div class="row">
                <div class="col-sm-12 col-md-7">
                  <div class="contenidotexto">
                    <h3 class="titulo">Vive la Experiencia de Crear tu Invitación Digital de Bodas</h3>
                  </div>
                </div>
                <div class="d-none d-sm-block col-md-5">
                  <img src="https://eleve11.ar/wp-content/uploads/2022/09/mockup-telefono.png" alt="" width="500" height="500">
                  <!--<iframe src="https://eventdate.es/bodas/martin-y-laura/"  style="position: absolute; top: 135px; left: 20px; width: 500px; height: 500px; border: 0px;">
                  </iframe>-->
                </div>
            </div>
          </section>
        </div>
      </div>
    </body>
</html>
