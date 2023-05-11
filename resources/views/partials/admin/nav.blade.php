<nav >

	<div class="d-flex justify-content-between align-items-center d-sm-none border-bottom pb-4 mb-4">
		<h3 class="d-block d-sm-none text-uppercase fw-700 m-0">Dashboard</h3>
		<button class="bg-transparent border-0 p-0 m-0 fs-42 lh-1" onclick="$('nav.menu-nav').toggleClass('view')">&times;</button>
	</div>


	<div class="botonera">
						<a href="{{ route('admin.categories') }}">
							<button class="btn" style="width: 90%">Categorias</button>
  						</a>
						  <a href="{{ route('admin.templates') }}">
							<button class="btn" style="width: 90%">Templates</button>
  						</a> 
						  <a href="{{ route('admin.clientes') }}">
							<button class="btn" style="width: 90%">Clientes</button>
  						</a> 
						  <a href="{{ route('admin.usuarios') }}">
							<button class="btn" style="width: 90%">Usuarios</button>
  						</a> 
    </div>
</nav>