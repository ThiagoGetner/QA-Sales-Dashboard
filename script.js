// Gráfico de Vendas
const ctxSales = document.getElementById("salesChart");
new Chart(ctxSales, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Vendas",
      data: salesData,
      borderColor: "blue",
      backgroundColor: "lightblue",
      fill: true
    }]
  }
});

// Gráfico de Estoque
const ctxStock = document.getElementById("stockChart");
new Chart(ctxStock, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [{
      label: "Estoque",
      data: stockData,
      backgroundColor: "orange"
    }]
  }
});

// Insights de IA simulados
const insights = [
  "As vendas aumentaram 20% em relação ao mês anterior.",
  "O estoque em junho caiu abaixo do nível de segurança.",
  "Tendência de alta contínua nas vendas nos próximos meses.",
  "Necessidade de reposição de produtos em 2 semanas."
];

const insightsList = document.getElementById("insightsList");
insights.forEach(i => {
  const li = document.createElement("li");
  li.textContent = i;
  insightsList.appendChild(li);
});
