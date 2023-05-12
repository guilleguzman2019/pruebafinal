<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i>Imagen</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($galeria as $g)
        <tr class="winner__table">
          <td><img src="{{asset($g->image)}}" alt="" width="150"></td>
          <td><button>Eliminar</button></td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>
