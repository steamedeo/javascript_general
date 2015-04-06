//Create all the necessary spaces and objects


var world = {};

world.person = {
	"legs":4,
	"arms":2
};

world.dog = {
	"paws":55,
	bark: function(){
		alert("bau");
	}
}

function test(){
	alert(world.dog.paws);
}