function objetos4(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.ficha=function(){

 return "Nombre: " + this.nombre + " Apellido: "+ this.apellido + " Edad:"+ this.edad +" Pais:" + this.pais;

  }

}
var res=new objetos4("Rocio","Martinez","21","Femenino","Piura","Peru");
console.log(res.ficha());
