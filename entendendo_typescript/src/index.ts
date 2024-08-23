/**
 * Uma empresa recebe R$ 580.000,00 por ano e paga um desenvolvedor sênior
 * R$ 28.000,00 por mês. Além disso, a empresa paga 28% de impostos sobre o 
 * valor do salário desse desenvolvedor. Considerando esses valores, qual é o 
 * total gasto pela empresa com o salário e os impostos desse único 
 * desenvolvedor, e quanto sobra do valor bruto mensal da empresa após
 * esse gasto?
 */

// Função para calcular a receita mensal da empresa
function calcularReceitaMensal(receitaAnual: number): number {
  return receitaAnual / 12;
}

// Função para calcular o imposto pago sobre o salário do Dev
function calcularImpostoPago(salarioMensal: number, percentualImposto: number): number {
  return salarioMensal * percentualImposto;
}

// Função para calcular o custo total com o Dev (salário + impostos)
function calcularCustoTotalComDev(salarioMensal: number, impostoPago: number): number {
  return salarioMensal + impostoPago;
}

// Função para calcular o valor que sobra para a empresa após o pagamento
function calcularValorQueSobra(receitaMensal: number, custoTotalComDev: number): number {
  return receitaMensal - custoTotalComDev;
}

// Valores fornecidos
const receitaAnual: number = 580000;
const salarioMensalDev: number = 28000;
const impostoPercentual: number = 0.28;

// Cálculos usando as funções
const receitaMensal: number = calcularReceitaMensal(receitaAnual);
const impostoPago: number = calcularImpostoPago(salarioMensalDev, impostoPercentual);
const custoTotalComDev: number = calcularCustoTotalComDev(salarioMensalDev, impostoPago);
const valorQueSobra: number = calcularValorQueSobra(receitaMensal, custoTotalComDev);

// Exibindo os resultados
console.log("Receita mensal da empresa: R$", receitaMensal.toFixed(2));
console.log("Imposto pago sobre o salário do Dev: R$", impostoPago.toFixed(2));
console.log("Custo total com o Dev (salário + impostos): R$", custoTotalComDev.toFixed(2));
console.log("Valor que sobra para a empresa após o pagamento: R$", valorQueSobra.toFixed(2)); 
