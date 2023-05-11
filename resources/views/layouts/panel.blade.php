<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="csrf-token" content="{{ csrf_token() }}">

		<title>{{ config('app.name', 'Laravel') }} {{ $titlePage ?? '' }}</title>

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

		<!-- Styles -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.25.2/ui/trumbowyg.min.css" integrity="sha512-K87nr2SCEng5Nrdwkb6d6crKqDAl4tJn/BD17YCXH0hu2swuNMqSV6S8hTBZ/39h+0pDpW/tbQKq9zua8WiZTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

		<link rel="stylesheet" href="{{ asset('builder2/admin/admin.css') }}">
		<link rel="stylesheet" href="{{ asset('builder2/panel/panel.css') }}">

		<!-- Styles -->
		@livewireStyles
	</head>

	<body>
        <div class="container-fluid vh-100">

            <div class="row fila1">
            <div class="d-flex justify-content-between align-items-center mb-3 w-100">
                <div>
                <img src="https://eventdate.es/wp-content/uploads/2022/10/LOGO-EVENTDATE-BLANCO.png" width="120" class="d-block">
                </div>

                <div class="d-flex">
                <div class="dropdown">
							<button class="border-0 bg-transparent p-0 m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								
                                <span>{{ Auth::user()->name }}</span>
							</button>
							<ul class="dropdown-menu dropdown-menu-end border-0 shadow">
								<li><a class="dropdown-item" href="{{ route('profile.show') }}">Perfil</a></li>
								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" onclick="event.preventDefault(); $('form.logout').submit();" href="{{ route('logout') }}">Cerrar sesión</a></li>
							</ul>
						</div>
                </div>
            </div>
            </div>
            <div class="row fila2">
                <div class="col-2 sidebar pt-5 text-center">
                @include('partials.panel.nav')
                </div>
                <div class="col-10 p-5">
					{{ $slot }}
                </div>
            </div>

        </div>

		

		<form method="POST" class="logout" action="{{ route('logout') }}" x-data>
			@csrf
		</form>

		@stack('modals')

		{{-- TOASTs --}}
		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
			<div id="liveToastSaved" class="toast bg-success text-white rounded-3" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex justify-content-between align-items-center pe-2">
					<div class="toast-body">Guardado correctamente</div>
					<button type="button" class="btn-close f-invert" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
			</div>

			<div id="liveToastUpdated" class="toast bg-primary text-white rounded-3" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex justify-content-between align-items-center pe-2">
					<div class="toast-body">Actualizado correctamente</div>
					<button type="button" class="btn-close f-invert" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
			</div>

			<div id="liveToastDeleted" class="toast bg-danger text-white rounded-3" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex justify-content-between align-items-center pe-2">
					<div class="toast-body">Eliminado correctamente</div>
					<button type="button" class="btn-close f-invert" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
			</div>

			{{ $toast ?? '' }}
		</div>

		@livewireScripts

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.25.2/trumbowyg.min.js" integrity="sha512-mBsoM2hTemSjQ1ETLDLBYvw6WP9QV8giiD33UeL2Fzk/baq/AibWjI75B36emDB6Td6AAHlysP4S/XbMdN+kSA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.25.2/langs/es_ar.min.js" integrity="sha512-WbE5RQUnNBEzC7FXz1XGMbfNHrhdruZsjle/stNvyqIwayzZedI1nN5HeGS70m6NSmiA4TQaeAgfs98hFXy2iw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.25.2/plugins/cleanpaste/trumbowyg.cleanpaste.min.js" integrity="sha512-UInqT8f+K1tkck6llPo0HDxlT/Zxv8t4OGeCuVfsIlXLrnP1ZKDGb+tBsBPMqDW15OcmV8NDfQe9+EaAG4aXeg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
		<script src="https://npmcdn.com/flatpickr/dist/l10n/es.js"></script>
		<script src="{{ asset('build/assets/dashboard/dash.js') }}"></script>
		

		<script type="text/javascript">
			window.livewire.on('saved', () => {
				$('.offcanvas').offcanvas('hide');
				$('.modal').modal('hide');
				var toast = new bootstrap.Toast(document.getElementById('liveToastSaved'))
				toast.show()
			})
			window.livewire.on('updated', () => {
				$('.offcanvas').offcanvas('hide');
				$('.modal').modal('hide');
				var toast = new bootstrap.Toast(document.getElementById('liveToastUpdated'))
				toast.show()
			})
			window.livewire.on('deleted', () => {
				$('.offcanvas').offcanvas('hide');
				$('.modal').modal('hide');
				var toast = new bootstrap.Toast(document.getElementById('liveToastDeleted'))
				toast.show()
			})
			window.livewire.on('deletedNoClose', () => {
				var toast = new bootstrap.Toast(document.getElementById('liveToastDeleted'))
				toast.show()
			})
		</script>

		@vite(['resources/js/app.js'])

		@stack('scripts')
	</body>
</html>
