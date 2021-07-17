var superman = {
  name: "superman",
  power: "flight",
  strength: 10000,
  stealth: 0
}

var batman = {
  name: "batman",
  power: "stealth",
  strength: 100,
  stealth: 1000
}

//console.log(superman.power)

//console.log(batman.power)

var superheros = [superman,batman]

for(var i=0;i<superheros.length;i++){
  console.log(superheros[i].name + ": "+ superheros[i].stealth)
}
