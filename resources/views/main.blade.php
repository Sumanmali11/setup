<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Application</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
</head>

<body>
    <v-app id="app">
        <router-view></router-view>
    </v-app>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>