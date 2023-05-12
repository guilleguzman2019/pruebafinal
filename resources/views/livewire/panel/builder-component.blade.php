@extends('builder')

@section('title', 'Build Invitation')

@section('head')
    <link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@1,200&display=swap" rel="stylesheet">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
		<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
		<script src="https://unpkg.com/grapesjs"></script>
		<script src="https://unpkg.com/grapesjs-component-countdown"></script>
		<script src="https://unpkg.com/grapesjs-blocks-basic"></script>

    <style>
            body,
            html {
                height: 100%;
                margin: 0;
            }
            .gjs-sm-sector .gjs-sm-gradient {
                width: 100%;
            }

            .grp-wrapper {
                margin: 15px 0;
            }

            .grp-handler-close {
                background-color: #444;
                color: #000000;
            }

            .grp-handler-cp-wrap {
                border-color: #444;
            }

            .grp-preview,
            .grp-wrapper {
                border-radius: 3px;
            }

            .gjs-editor {
                font-family: 'Montserrat Alternates';
                color:black;
                font-size: 10px;
            }

            .gjs-selected {
                outline: 7px solid #3b97e3 !important;
                outline-offset: -2px;
            }
            .gjs-badge{

                font-size: 16px !important;
            }
            .gjs-block{

                width: 100% !important;
            }

            .my-custom-button{

                margin-left: 167px;
                border: 1px solid;
                font-size:11px;

            }

           
    	</style>
@endsection

@section('content')
  <div id="gjs" style="height:0px; overflow:hidden">
  </div>
@endsection

@section('scripts')
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	  <script src="{{ asset('build/assets/grapesjs/json.js') }}"></script>
  	<script src="{{ asset('build/assets/grapesjs/script.js') }}"></script>
@endsection

