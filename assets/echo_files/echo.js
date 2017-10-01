  var secureCb;
  var secureCbLabel;
  var wsUri;
  var consoleLog;
  var displayLog;
  var connectBut;
  var disconnectBut;
  var sendMessage;
  var sendBut;
  var clearLogBut;
  var evtSplit;
var username;
var message;
  function echoHandlePageLoad()
  {
    

    secureCb = document.getElementById("secureCb");
    secureCb.checked = false;
    secureCb.onclick = toggleTls;
    
    secureCbLabel = document.getElementById("secureCbLabel")
    
    wsUri = document.getElementById("wsUri");
    toggleTls();
    
    connectBut = document.getElementById("connect");
    connectBut.onclick = doConnect;
    
    disconnectBut = document.getElementById("disconnect");
    disconnectBut.onclick = doDisconnect;
    
    sendMessage = document.getElementById("sendMessage");

    sendBut = document.getElementById("send");
    sendBut.onclick = doSend;

    consoleLog = document.getElementById("consoleLog");
    displayLog = document.getElementById("displayLog");

    clearLogBut = document.getElementById("clearLogBut");
    clearLogBut.onclick = clearLog;

  setGuiConnected(false);
  
    document.getElementById("disconnect").onclick = doDisconnect;
    document.getElementById("send").onclick = doSend;

  }

  function toggleTls()
  {
    var wsPort = (window.location.port.toString() === "" ? "" : ":"+window.location.port)
    if (wsUri.value === "") {
        wsUri.value = "ws://" + window.location.hostname.replace("www", "echo") + wsPort;
    }
    
    if (secureCb.checked)
    {
      wsUri.value = wsUri.value.replace("ws:", "wss:");
    }
    else
    {
      wsUri.value = wsUri.value.replace ("wss:", "ws:");
    }
  }
  
  function doConnect()
  {
    if (window.MozWebSocket)
    {
        logToConsole('<span style="color: red;"><strong>Info:</strong> This browser supports WebSocket using the MozWebSocket constructor</span>');
        window.WebSocket = window.MozWebSocket;
    }
    else if (!window.WebSocket)
    {
        logToConsole('<span style="color: red;"><strong>Error:</strong> This browser does not have support for WebSocket</span>');
        return;
    }

    // prefer text messages
    var uri = "ws://singateknologicoid-via.cloud.revoluz.io:49290";
    if (uri.indexOf("?") == -1) {
        uri += "?encoding=text";
    } else {
        uri += "&encoding=text";
    }
    websocket = new WebSocket(uri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
    websocket.ondisplay = function(evt) { ondisplay(evt) };
  }
  
  function doDisconnect()
  {
    websocket.close()
  }
  
 /* function doSend()
  {
    logToConsole("SENT: " + sendMessage.value);
    websocket.send(sendMessage.value);
  }*/
  function doSend()
  {
	if (flag.value=="pc"){
    var msg = sender.value+" sendto "+ username.value+" " + sendMessage.value; 
	logToConsole("SENT: " + sendMessage.value);
	//logToDisplay(msg);
    websocket.send(msg);
	}else{
	    var msg = sender.value+" broadcast " + sendMessage.value; 
	logToConsole("SENT: " + sendMessage.value);
	//logToDisplay(msg);
    websocket.send(msg);
	}
  }


  function logToConsole(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = getSecureTag()+message;
    consoleLog.appendChild(pre);

    while (consoleLog.childNodes.length > 50)
    {
      consoleLog.removeChild(consoleLog.firstChild);
    }
    
    consoleLog.scrollTop = consoleLog.scrollHeight;
  }

  function logToDisplay(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = getSecureTag()+message;
    displayLog.appendChild(pre);

    while (displayLog.childNodes.length > 50)
    {
      displayLog.removeChild(displayLog.firstChild);
    }

    displayLog.scrollTop = displayLog.scrollHeight;
  }
  
  function onOpen(evt)
  {
    logToConsole("CONNECTED");
    //logToDisplay("coba");
	websocket.send("username nanda");
	setGuiConnected(true);
  }
  
  function onClose(evt)
  {
    logToConsole("DISCONNECTED");
    //logToDisplay("coba");
    setGuiConnected(false);
  }
  
  function onMessage(evt)
  {	
  logToConsole(evt.data);
	evtSplit=evt.data.split(" ");
	username=evtSplit[0];
	message=evtSplit[3];
	if(username==="DARURAT"){
	websocket.onmessage = function(evt) { fakeOnMessage(evt) };	
	usernamedarurat=evtSplit[1];
	lert(evt.data);
	stopAlert(usernamedarurat);
//		websocket.onmessage = function(evt) { onMessage(evt) };	
	}else{
	logToConsole('<span style="color: blue;">' +username+' : '+message+'</span>');};	
    logToDisplay('<span style="color: blue;">' + evt.data+'</span>');
	logToConsole(username+' : '+message);
	//logToDisplay("coba");
    while (displayLog.childNodes.length > 1)
    {
      isplayLog.removeChild(displayLog.firstChild);

    }
  }
  function fakeOnMessage(evt){
	  
  }
function stopAlert(evt){
	websocket.send(sender.value+" stop "+evt);
}
  function onError(evt)
  {
    logToConsole('<span style="color: red;">ERROR:</span> ' + evt.data);
  }
  function onDisplay(evt)
  {
    logToDisplay('tes');
  }
  
  function setGuiConnected(isConnected)
  {
    wsUri.disabled = isConnected;
    connectBut.disabled = isConnected;
    disconnectBut.disabled = !isConnected;
    sendMessage.disabled = !isConnected;
    sendBut.disabled = !isConnected;
    secureCb.disabled = isConnected;
    var labelColor = "black";
    if (isConnected)
    {
      labelColor = "#999999";
    }
     secureCbLabel.style.color = labelColor;
    
  }
	
	function clearLog()
	{
		while (consoleLog.childNodes.length > 0)
		{
			consoleLog.removeChild(consoleLog.lastChild);
		}
	}
	
	function getSecureTag()
	{
		if (secureCb.checked)
		{
			return '<img src="img/tls-lock.png" width="6px" height="9px"> ';
		}
		else
		{
			return '';
		}
	}
  
  window.addEventListener("load", echoHandlePageLoad, false);
