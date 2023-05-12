<div>

    <div class="text-center">
                        <div class="gradient p-4">
                            <h3>Comienza a crear tu invitación</h3>
                            <span>Elije la plantilla que más te guste, edítala y compártela con tus invitados.</span>
                            <div class="pt-5">
                                <div class="d-inline p-2 text-white">
                                    <a href="" class="a1">
                                        <img src="https://eleve11.ar/wp-content/uploads/2022/07/ICONOS-06.svg" alt="" height="70px" width="70px">
                                    </a>
                                </div>
                                <div class="d-inline p-2  text-white">
                                    <a href="" class="a2">
                                        <img src="https://eleve11.ar/wp-content/uploads/2022/07/ICONOS-04.svg" alt="" height="70px" width="70px">
                                    </a>
                                </div>
                                <div class="d-inline p-2  text-white">
                                    <a href="" class="a3">
                                        <img src="https://eleve11.ar/wp-content/uploads/2022/07/ICONO-DESPEDIDA-SOLTERO.svg" alt="" height="70px" width="70px">
                                    </a>
                                    
                                </div>
                                <div class="d-inline p-2  text-white">
                                    <a href="" class="a4">
                                        <img src="https://eleve11.ar/wp-content/uploads/2022/07/ICONOS-05.svg" alt="" height="70px" width="70px">
                                    </a>
                                </div>
                            </div>

                            <div class="divTemplates pt-5">

                            @foreach ($templates as $tmp)
    
                                @foreach($tmp-> categories as $tmpfinal)
                
                                    @if($tmpfinal->name ==='Bodas')

                                    

                                        <div class="m-3 border text-center" style="display: inline-block; border-radius: 5px;">
                                            <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal{{$tmp -> name}}">
                                                <img class="rounded" src="{{asset( $tmp -> image)}}" alt="" height="200px" width="200ox">
                                            </a>
                                            <br>
                                            <p class="font-weight-bold text-dark pt-1">{{$tmp -> name}}</p>
                                        </div>
                                        <!--modal1-->

                                        <div class="modal fade text-dark" id="exampleModal{{$tmp -> name}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 999999;">
                                            <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">ingrese el nombre de la invitacion</h5>
                                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                </div>
                                                <div class="modal-body " style="text-align: start;">
                                                <input wire:model.defer="createArray.title" type="text" style="width: 100% !important;">
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" wire:click="save({{$tmp -> id}})" wire:loading.attr="disable" wire:target="save">Crear Invitacion</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <!--end modal1-->
                            
                                    @endif
                                   
                                 @endforeach
    
                            @endforeach

                            </div>

                        
                            <div class="divTemplates2 pt-5" style="display:none;">

                                <div class="m-3 border text-center" style="display: inline-block; border-radius: 5px;">
                                    <a href="">
                                        <img class="rounded" src="https://eleve11.ar/wp-content/uploads/2022/08/Modelo-cumple-06-1024x576.png" alt="" height="200px" width="200ox">
                                    </a>
                                    <br>
                                    <p class="font-weight-bold text-dark pt-1">Rose</p>
                                </div>

                                <div class="m-3 border text-center" style="display: inline-block; border-radius: 5px;">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#">
                                        <img class="rounded" src="https://eleve11.ar/wp-content/uploads/2022/08/Modelo-cumple-07-1024x576.png" alt="" height="200px" width="200ox">
                                    </a>
                                    <br>
                                    <p class="font-weight-bold text-dark pt-1">Peque</p>
                                </div>

                                <div class="m-3 border text-center" style="display: inline-block; border-radius: 5px;">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#">
                                        <img class="rounded" src="https://eleve11.ar/wp-content/uploads/2022/08/Modelo-cumple-04-1024x576.png" alt="" height="200px" width="200ox">
                                    </a>
                                    <br>
                                    <p class="font-weight-bold text-dark pt-1">Diva</p>
                                </div>

                                <div class="m-3 border text-center" style="display: inline-block; border-radius: 5px;">
                                    <a href="" data-bs-toggle="modal" data-bs-target="#">
                                        <img class="rounded" src="https://eleve11.ar/wp-content/uploads/2022/07/Modelo-cumple-02-1024x576.png" alt="" height="200px" width="200ox">
                                    </a>
                                    <br>
                                    <p class="font-weight-bold text-dark pt-1">Dark</p>
                                </div>

                            </div>

                        </div>
                    </div>

    
    <!-- end -->
    
    
</div>





  
  