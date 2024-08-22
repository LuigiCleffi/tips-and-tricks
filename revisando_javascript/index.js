/**
 * Uma empresa recebe R$ 580.000,00 por ano e paga um desenvolvedor sênior
 *  R$ 28.000,00 por mês. Além disso, a empresa paga 28% de impostos sobre o 
 * valor do salário desse desenvolvedor. Considerando esses valores, qual é o 
 * total gasto pela empresa com o salário e os impostos desse único 
 * desenvolvedor, e quanto sobra do valor bruto mensal da empresa após
 *  esse gasto?
 */

// Função para calcular a receita mensal da empresa
function calcularReceitaMensal(receitaAnual) {
  return receitaAnual / 12;
}

// Função para calcular o imposto pago sobre o salário do Dev
function calcularImpostoPago(salarioMensal, percentualImposto) {
  return salarioMensal * percentualImposto;
}

// Função para calcular o custo total com o Dev (salário + impostos)
function calcularCustoTotalComDev(salarioMensal, impostoPago) {
  return salarioMensal + impostoPago;
}

// Função para calcular o valor que sobra para a empresa após o pagamento
function calcularValorQueSobra(receitaMensal, custoTotalComDev) {
  return receitaMensal - custoTotalComDev;
}

// Valores fornecidos
const receitaAnual = 580000;
const salarioMensalDev = 28000;
const impostoPercentual = 0.28;

// Cálculos usando as funções
const receitaMensal = calcularReceitaMensal(receitaAnual);
const impostoPago = calcularImpostoPago(salarioMensalDev, impostoPercentual);
const custoTotalComDev = calcularCustoTotalComDev(salarioMensalDev, impostoPago);
const valorQueSobra = calcularValorQueSobra(receitaMensal, custoTotalComDev);

// Exibindo os resultados
console.log("Receita mensal da empresa: R$", receitaMensal.toFixed(2));
console.log("Imposto pago sobre o salário do Dev: R$", impostoPago.toFixed(2));
console.log("Custo total com o Dev (salário + impostos): R$", custoTotalComDev.toFixed(2));
console.log("Valor que sobra para a empresa após o pagamento: R$", valorQueSobra.toFixed(2));
