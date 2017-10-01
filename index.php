<!DOCTYPE html>
<html>

<head>
	<link href="assets/plugins/bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="assets/plugins/pace/pace-theme-big-counter.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/css/main-style.css" rel="stylesheet" />
</head>

<body>
    <!--  wrapper -->
    <div id="wrapper">
        <!-- navbar top -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" id="navbar">
        </nav>
        <!-- end navbar top -->

        <!-- navbar side -->
        <nav class="navbar-default navbar-static-side" role="navigation" id="navbar">
			<div id="id_request">
			request
			</div>
			<div id="id_response">
			response
			</div>
			<div id="load_time">
			time
			</div>
        </nav>
        <!-- end navbar side -->
        <!--  page-wrapper -->
        <div id="page-wrapper">
			
            <div class="row">
                <!-- Page Header -->
                <div class="col-lg-12">
                    <h1 class="page-header">Dashboard</h1>
                </div>
                <!--End Page Header -->
            </div>
			<div class="row">
			        <div id="echo">
          <div id="echo-config" style="float: left;">
            <input type = "hidden" id="wsUri" size="35" value="ws://<?php echo $_SERVER['HTTP_HOST'];?>:9898">
            
			<input type="checkbox" id="secureCb" onclick="toggleTls();" disabled="">
            <span id="secureCbLabel" style="font-size: smaller; color: rgb(153, 153, 153);">Use secure WebSocket (TLS)</span><br>
            <button id="connect" disabled="">Connect</button>
            <button id="disconnect">Disconnect</button>
			
            <br>
            <br>
			
            <input type = "hidden"class="form-control" id="flag" name="flag" value="cast" readonly>
			<input type = "hidden"class="form-control" id="sender" name="sender" value="adas" readonly>
			<strong>Topic:</strong><br>	
            <input id = "sendMessage" class="form-control" placeholder="Ketik Topic">
            <br>
            <button id="send" class="wsButton">Get Data Topic</button>
            <br>
            <div id="displayLog"></div> <br>
          </div>
          <div id="echo-log" style="float: left; margin-left: 20px; padding-left: 20px; width: 350px; border-left: solid 1px #cccccc;"> <strong>Log:</strong>
            <div id="consoleLog"></div>
            <button id="clearLogBut" style="position: relative; top: 3px;">Clear log</button>
          </div>
          <div class="clearfix"></div>
        </div>
			</div>
			</div>
        </div>
        <!-- end page-wrapper -->

    </div>
	
    <!-- end wrapper -->
    <!-- end wrapper -->

    <!-- Core Scripts - Include with every page -->
	<script src="assets/plugins/jquery-1.10.2.js"></script>
    <script src="assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="assets/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="assets/plugins/pace/pace.js"></script>
    <script src="assets/scripts/siminta.js"></script>
	<script src="moment-min.js"></script>
	<script src="ws3.js"></script>
	
</body>

</html>