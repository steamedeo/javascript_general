
//Example of writing data into html

/*function login(){
	var db = Ti.Database.openFile(Ti.App.appURLToPath("app://data/users.db"));
			var row = db.execute("select * from users");
			if (row.isValidRow()) {
				document.getElementById("message").innerText = row.fieldByName("username");
			}
}*/

function onLoad(){

	var win = Ti.UI.currentWindow;

	win.setHeight(473);
	win.setWidth(656);

}

function login(){

	var inputName = $('#login-name').val();
	var inputPass = $('#login-password').val();

	//alert(inputName + " " + inputPass);
	
	if ((inputName) && (inputPass)){
		var data = Ti.Database.openFile(Ti.App.appURLToPath("app://data/users.db"));
		var row = data.execute("SELECT * from users WHERE username = ? AND password = ?", inputName, inputPass);
		var user = row.fieldByName("username");
		var id = row.fieldByName("_kp_id");
		var pass = row.fieldByName("password");
		if (row.isValidRow()) {

				window.location.replace("app://home.html");

				var win = Ti.UI.currentWindow;

				win.maximize();

			} else {
				alert("Wrong Credentials!");
			}

	} else {

		alert("Wrong Credentials!");
	}

}

