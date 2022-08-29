class Rectangulo {
    constructor (alto, ancho) { //se pide dos valores
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();//pide el area
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;//multiplica los valores de ancho y alto
    }
  }
  
  const cuadrado = new Rectangulo(100, 100);
  document.write(cuadrado.area)//se muestra en el html
  console.log(cuadrado.area); // 100, para que este numero cambie se deben cambiar los valores (100 y 100) del const cuadrado