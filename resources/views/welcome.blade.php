<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">        

        <link rel="shortcut icon" href="{{ asset('images/logo.png') }}">

        <title>Országos Mentőszolgálat - Nyilvántartások</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
        
    </head>
    <body>
        <div id="app" style="min-height: 100%"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
