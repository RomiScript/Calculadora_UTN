function calcular(operador) {
    const op1 = parseFloat(document.getElementById("operando1").value);
    const op2 = parseFloat(document.getElementById("operando2").value);
    let resultado;
  
    if (isNaN(op1) || isNaN(op2)) {
      resultado = "Ingrese ambos números";
    } else {
      switch (operador) {
        case '+':
          resultado = op1 + op2;
          break;
        case '-':
          resultado = op1 - op2;
          break;
        case '*':
          resultado = op1 * op2;
          break;
        case '/':
          resultado = op2 !== 0 ? op1 / op2 : "No se puede dividir por 0";
          break;
        default:
          resultado = "Operador inválido";
      }
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  