<div>
    <x-slot name="titlePage">- Usuarios</x-slot>

    <h2 class="fs-14 text-titulo mb-5">Creación, edición y eliminación de Usuarios</h2>

    <div class="row gx-sm-5">
        
    <div class="col-4 bg-grey">

            <div class="form-group">
                <input id="nombre" wire:model.defer="createArray.name" type="text" class="form-control" placeholder="Nombre">
            </div>

            <div class="form-group">
                <input id="nombre" wire:model.defer="createArray.email" type="email" class="form-control" placeholder="Email">
            </div>

            <div class="form-group">
                <input id="nombre" wire:model.defer="createArray.password" type="password" class="form-control" placeholder="Password">
            </div>

            <div class="form-group">
                <select class="form-select  py-2 rounded-3 text-muted fs-14" wire:model.defer="createArray.role" style="width:100%">
                    <option value="">Elija un rol</option>
                    <option value="1" class="">Administrador</option>
                    <option value="2" class="">Subscripto</option>            
                </select>
            </div>

            <div class="form-group text-center">
                <button id="btn-agregar-event" wire:click="save" wire:target="save" class="btn-agregar">Agregar Usuario</button>
            </div>

        </div>

        <div class="col-8">
            @if ( $usuarios -> count() )

                <table class="table table-borderless">
                    <thead class="fs-14 text-muted opacity-50 text-uppercase border-bottom">
                        <th class="ps-0">Nombre</th>
                        <th>Email</th>
                        <th></th>
                    </thead>
                    <tbody class="fs-14">
                        @foreach ($usuarios as $usuario)
                            <tr class="border-bottom-dashed align-middle">
                                <td class="ps-0 py-3">
                                    <div class="d-flex align-items-center">
                                        <div class="ratio ratio-1x1 rounded-3 bg-img me-3" style="background-image: url({{ asset($usuario -> image) }}); width: 40px;"></div>
                                        <span class="fs-16 fw-700">{{ $usuario -> name }}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="fs-16 fw-700">{{ $usuario -> email }}</span>
								</td>
                                <td class="text-end pe-0">
                                    <div class="dropdown">
                                        <button class="bg-light rounded-circle border-0 p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="{{ asset('img/icos/ico-dots.svg') }}" width="16" height="16" class="d-block"></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                          <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#editCat" wire:click="edit('{{ $usuario -> id }}')">Editar</a></li>
                                          <li><a class="dropdown-item" onclick="confirm('¿Seguro que deseas eliminar este registro?') || event.stopImmediatePropagation()" wire:click="destroy('{{ $usuario -> id }}')">Eliminar</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                {{ $usuarios -> withQueryString() -> onEachSide(1) -> links() }}

            @else 

                <div class="py-5">
                    <img src="https://images.emojiterra.com/google/android-pie/512px/1f914.png" width="128" class="d-block mx-auto mb-3">
                    <p class="text-center">No hay usuarios aquí.</p>
                </div>

            @endif
        </div>
    </div>


    <div wire:ignore.self class="modal fade" id="editCat" tabindex="-1" aria-labelledby="editCatLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-4 border-0">
                <div wire:loading wire:target="edit,update,imageEdit" class="position-absolute w-100 h-100 top-0 start-0 bg-light" style="--bs-bg-opacity: 0.9; z-index: 2;">
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="modal-header border-bottom-dashed p-4">
                    <h1 class="modal-title fs-5" id="editCatLabel">Editar cliente</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="mb-3">
						<div class="bg-secondary bg-opacity-10 px-4 py-2 rounded-4">
							<label class="fs-14 text-muted">Nombre<span class="text-danger fs-16">*</span></label><br>
							<input class="border-0 bg-transparent w-100" type="text" wire:model.defer="editArray.name" autofocus placeholder="Nombre del cliente" />
						</div>
						@error('editArray.name')
							<span class="fs-12 text-danger">{{ $message }}</span>
						@enderror
					</div>

                    <div class="mb-3">
						<div class="bg-secondary bg-opacity-10 px-4 py-2 rounded-4">
							<label class="fs-14 text-muted">Email<span class="text-danger fs-16">*</span></label><br>
							<input class="border-0 bg-transparent w-100" type="text" wire:model.defer="editArray.email" autofocus placeholder="Email del cliente" />
						</div>
						@error('editArray.email')
							<span class="fs-12 text-danger">{{ $message }}</span>
						@enderror
					</div>

                    <div class="mb-3">
						<div class="bg-secondary bg-opacity-10 px-4 py-2 rounded-4">
							<label class="fs-14 text-muted">password<span class="text-danger fs-16">*</span></label><br>
							<input class="border-0 bg-transparent w-100" type="text" wire:model.defer="editArray.password" autofocus placeholder="Password del cliente" />
						</div>
						@error('editArray.password')
							<span class="fs-12 text-danger">{{ $message }}</span>
						@enderror
					</div>

					{{--<div class="row">
						<div class="col-sm-6">
							<div class="mb-3">
								<label class="fs-14 d-block mb-2">Imagen<span class="text-danger fs-16">*</span></label>
								<div class="ratio ratio-1x1 bg-img w-75 mx-auto rounded-4" style="background-image: url({{ asset($imageEdit ? $imageEdit -> temporaryUrl() : $editArray['image']) }});">
									<div>
										<a onclick="$('.imageEditUpload').click()" class="rounded-circle shadow bg-dark-4 p-2 d-block position-absolute top-0 start-100 translate-middle"><img src="{{ asset('img/icos/ico-edit.svg') }}" width="16" height="16" class="float-start f-invert"></a>
									</div>
								</div>

								<input class="imageEditUpload float-start" type="file" accept=".jpg,.png,.jpeg" wire:model="imageEdit" style="height: 1px; opacity: 0; overflow: hidden; width: 1px;">

								@error('imageEdit')
									<span class="fs-12 text-danger">{{ $message }}</span>
								@enderror
							</div>
						</div>
					</div>
					<span class="fs-12 text-muted d-block text-center">Sólo se acepta imágenes en formato *.png, *.jpg and *.jpeg. Peso máximo 4MB.</span>--}}
                </div>

                <div class="modal-footer pt-0 border-0">
                    <button type="button" class="btn btn-secondary py-3 lh-1 px-4 rounded-4" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary py-3 lh-1 px-4 rounded-4" wire:click="update" wire:loading.attr="disabled" wire:target="edit,update,imageEdit">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</div>


