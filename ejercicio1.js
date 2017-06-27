function objeto1(numInicial,numFinal){
  this.numInicial=numInicial;
  this.numFinal=numFinal;
  this.res=function(){
    var suma=0;
    for (var i=this.numInicial;i<=this.numFinal;i++)
    {
      suma+=i;

    }
    return suma;
  }

}
var assert=requiere("assert");
describe("ejercicio",function(){
  it("retornar suma 1 y 10",function(){
    assert.equal(55,ejercicio(1,10))
  });
});
