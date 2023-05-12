<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Imagen</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i>Titulo</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Nombre del lugar</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Direccion</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Google maps</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($eventos as $v)
        <tr class="winner__table">
          <td><img src="{{asset($v -> image)}}" alt="" width="150" height="70"></td>
          <td>{{$v -> title	}}</td>
          <td>{{$v ->place_name}}</td>
          <td>{{$v -> address}}</td>
          <td>{{$v -> google_maps}}</td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>
