<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Nombre Completo</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i> Informacion</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Asistencia</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($confirmados as $con)
        <tr class="winner__table">
          <td>{{$con -> fullname}}</td>
          <td>{{$con -> date}}</td>
          <td>{{$con -> assitence}}</td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>
