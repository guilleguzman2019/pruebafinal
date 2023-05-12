<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Foto</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i> Nombre</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> relacion</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> tipo</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($padrinos as $p)
        <tr class="winner__table">
          <td><img src="{{asset($p -> photo)}}" alt="" width="150" height="50"></td>
          <td>{{$p -> name}}</td>
          <td>@php echo ($p -> type == 0) ? 'Padrino' : 'Testigo' @endphp</td>
          <td>{{$p -> relationship}}</td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>
