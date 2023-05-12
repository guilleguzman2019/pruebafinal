<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Nombre Completo</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i> N° de personas</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($transporte as $t)
        <tr class="winner__table">
          <td>{{$t -> fullname}}</td>
          <td>{{$t -> numberOfplaces	}}</td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>
