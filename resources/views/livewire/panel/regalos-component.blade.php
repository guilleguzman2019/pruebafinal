<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Imagen</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i> Titulo</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Descripcion</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Precio</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Link</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($regalos as $re)
        <tr class="winner__table">
          <td><img src="{{asset($re -> image)}}" alt="" width="150" height="50"></td>
          <td>{{$re -> title}}</td>
          <td>{{$re -> description}}</td>
          <td>{{$re -> precio	}}</td>
          <td>{{$re -> link}}</td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>