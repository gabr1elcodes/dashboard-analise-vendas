
const ctxLinha = document.getElementById("meuGrafico");

if (ctxLinha) {
    new Chart(ctxLinha, {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
            datasets: [{
                label: "",
                data: [2000, 3000, 2300, 3200, 2800, 3500, 3100],
                borderColor: "#4F46E5",
                backgroundColor: "rgba(79,70,229,0.10)",
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    ticks: { color: "#898d94ff" },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: "#4B5563" },
                    grid: { color: "rgba(0,0,0,0.05)" }
                }
            }
        }
    });
}


const ctxBarras = document.getElementById("grafico-barras-pequeno");

if (ctxBarras) {
    new Chart(ctxBarras, {
        type: "bar",
        data: {
            labels: ["Abr", "Mai", "Jun"],
            datasets: [{
                data: [1500, 2300, 2900],
                backgroundColor: [
                    "rgba(99,102,241,0.90)",
                    "rgba(99,102,241,0.80)",
                    "rgba(99,102,241,0.95)"
                ],
                borderRadius: 8,
                maxBarThickness: 40
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: "#4B5563" }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: "#4B5563" }
                }
            }
        }
    });
}

const canvasPizza = document.getElementById("grafico-pizza");

if (canvasPizza) {

    const ctxPizza = canvasPizza.getContext("2d");

    new Chart(ctxPizza, {
        type: 'doughnut',
        data: {
            labels: ["Moda", "Eletrônicos", "Beleza & Cuidados", "Outros"],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    "rgba(79,70,229,0.95)",
                    "rgba(124, 23, 138, 0.85)",
                    "rgba(143, 68, 214, 0.75)",
                    "rgba(165,180,252,0.65)"
                ],
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '50%',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

const linhaHorizontal = document.getElementById("grafico-linha-horizontal");

if (linhaHorizontal) {
    new Chart(linhaHorizontal, {
        type: "line",
        data: {
            labels: ["Moda", "Eletrônicos", "Beleza & Cuidados", "Outros"],
            datasets: [{
                data: [150, 130, 120, 140],
                borderColor: "#4F46E5",
                backgroundColor: "rgba(79,70,229,0.20)",
                borderWidth: 3,
                pointRadius: 4,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            indexAxis: "y", // 🔥 
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    ticks: { color: "#374151" },
                    grid: { color: "rgba(0,0,0,0.05)" }
                },
                y: {
                    ticks: { color: "#374151" },
                    grid: { display: false }
                }
            }
        }
    });
}



