
//Example of writing data into html

/*function login(){
	var db = Ti.Database.openFile(Ti.App.appURLToPath("app://data/users.db"));
			var row = db.execute("select * from users");
			if (row.isValidRow()) {
				document.getElementById("message").innerText = row.fieldByName("username");
			}
}*/

function login(){

	var input = prompt("Inserisci il tuo username");
	if (input){
		var data = Ti.Database.openFile(Ti.App.appURLToPath("app://data/users.db"));
		var row = data.execute("select * from users where username = ?", input);
		var user = row.fieldByName("username");
		var id = row.fieldByName("id");
		var pass = row.fieldByName("password");
		if (row.isValidRow()) {
				var input2 = prompt("Inserisci la tua password " + user);
				if (input2 === pass){
					//Login Riuscito
					alert("Login riuscito!");

					window.location.replace("app://home.html");

				} else {

					alert("Password errata!")
				}

			} else {
				alert("Username errato!")
			}

	} else {

		alert("Username errato!");
	}

}

