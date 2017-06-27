var texto={
  propiedad1:6,
 propiedad2:5,
 propiedad3:4,
 propiedad4:3,
 propiedad5:2,
  propiedad6:1,
  resultad:  function(){
    var res="";
    res+="propiedad1-->" + texto.propiedad1+ "; propiedad2-->"+texto.propiedad2+"; propiedad3-->"+texto.propiedad3+"; propiedad4-->"+texto.propiedad4+"; propiedad5-->"+texto.propiedad5+"; propiedad6-->"+texto.propiedad6;
    return res;
                        }



}
 console.log(texto.resultad());  
