<nav >

	<div class="d-flex justify-content-between align-items-center d-sm-none border-bottom pb-4 mb-4">
		<h3 class="d-block d-sm-none text-uppercase fw-700 m-0">Dashboard</h3>
		<button class="bg-transparent border-0 p-0 m-0 fs-42 lh-1" onclick="$('nav.menu-nav').toggleClass('view')">&times;</button>
	</div>


	<div class="botonera">
						<a href="{{ route('panel.crearInvitacion') }}">
							<button class="btn" style="width: 90%">Crear Invitacion</button>
  						</a>
						<a href="{{ route('panel.invitaciones') }}">
							<button class="btn" style="width: 90%">invitaciones</button>
  						</a>
						  <a href="{{ route('panel.confirmados') }}">
							<button class="btn" style="width: 90%">Confirmados</button>
  						</a> 
						  <a href="{{route('panel.canciones')}}">
							<button class="btn" style="width: 90%">Canciones</button>
  						</a> 
						  <a href="{{route('panel.transporte')}}">
							<button class="btn" style="width: 90%">Transporte</button>
  						</a> 
    </div>
</nav>