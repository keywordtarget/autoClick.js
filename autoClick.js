<script type="text/javascript">
	if (window.addEventListener) {
		window.addEventListener("load",function() {
			setTimeout(function(){
				window.scrollTo(0, 1);
			}, 0);
		});
	}
	function fireEvent(element,event) {
	   if (document.createEvent) {
	       // dispatch for firefox + others
	       var evt = document.createEvent("HTMLEvents");
	       evt.initEvent(event, true, true ); // event type,bubbling,cancelable
	       return !element.dispatchEvent(evt);
	   } else {
	       // dispatch for IE
	       var evt = document.createEventObject();
	       return element.fireEvent('on'+event,evt)
	   }
	}

	function callNum() {
		var thisNum = document.getElementById("ergo-call");
		var method = "click";
		setTimeout(function() {
			  fireEvent(thisNum, method);
			}, 4000);
			piwikTracker.trackPageView('DelayedAutoCall');
	}
</script>
</head>
<body onload="callNum();">