<div>
<div class="container">
    <div class="table-responsive">
    <table class="table table-bordered   table-striped" style="margin-top:100px">
      <thead class="table__head">
        <tr class="winner__table">
          <th><i class="fa fa-user" aria-hidden="true"></i> Titulo</th>
          <th><i class="fa fa-map-marker" aria-hidden="true"></i> Slug</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Estado</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Template</th>
          <th><i class="fa fa-calendar-o" aria-hidden="true"></i> Accion</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($invitaciones as $i)
        <tr class="winner__table">
          <td>{{$i -> title}}</td>
          <td>{{$i -> slug}}</td>
          <td>@php echo ($i -> status == 0) ? 'Falta Pagar' : 'Pagado' @endphp</td>
          <td>{{$i -> template -> name}}</td>
          <td>
            <a href="{{ route('panel.builder', $i->slug) }}">
              <button class="btn btn-primary">Editar</button>
            </a>
            <a href="{{ route('invitacion', $i->slug) }}">
              <button class="btn btn-primary">Ver</button>
            </a>
          </td>
        </tr>
      @endforeach
      </tbody>
    </table>
    </div>
  </div>
</div>

