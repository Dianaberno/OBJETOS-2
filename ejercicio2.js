function objeto2(nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.res =function(){

    if(this.edad>17 && this.ocupacion=="Estudiante Laboratoria"){
      return "You are awesone"
    }
    else{
      return "Upsiii"
    }
  }


}
var imagen = new objeto2("Diana",20,"Estudiante Laboratoria","Femenino");
console.log(imagen.res());
