class Triangulo {
    constructor (lado1, lado2, base, altura) { //se piden los valores
      this.lado1 = lado1;
      this.lado2 = lado2;
      this.base = base;
      this.altura = altura;
    }
    // Getter
    get area() {
       return this.calcArea();//pide el area
     }
    // Método
    calcArea () {
      return this.altura * this.base / 2;//calcula el area
    }

    //perimetro
    get perimetro(){
        return this.calcPerimetro
    }

    //calcula perimetro
    calcPerimetro (){
        return this.lado1 + this.lado2 + this.base;
    }
  }
  
  const triangulo = new Triangulo(5, 10, 3, 6);
  document.write(triangulo)//se muestra en el html
  console.log(triangulo); // , para que este numero cambie se deben cambiar los valores (100 y 100) del const cuadrado