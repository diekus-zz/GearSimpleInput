( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
} () );

var aTitle = document.getElementById("appTitle");

var rotaryDetentCallback = function rotaryDetentHandler(e) {
	var direction = e.detail.direction;
	if (direction === "CW") {
		aTitle.innerText = "right";
	} else if (direction === "CCW") {
		aTitle.innerText = "left";
	}
};

window.addEventListener("rotarydetent", rotaryDetentCallback);
