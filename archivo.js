{
    "nombre": "David Sanchez",
    "edad": 21,
    "nacionalidad": "Mexicana"
}

var json = '{"nombre":"David Sanchez", "edad":21, "nacionalidad":"mexicana"}';
var obj = JSON.parse(json);
console.log(obj.nombre);

var json = '{"nombre":"Jordy","edad":22,"nacionalidad":"Mexicana","hobbies":"Video juegos}';