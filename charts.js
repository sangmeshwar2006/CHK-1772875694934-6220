// ── EduAI Chart Engine ──

const CHART_DEFAULTS = {
  color: { blue:'#3b82f6', cyan:'#22d3ee', green:'#10b981', amber:'#f59e0b', red:'#ef4444', purple:'#8b5cf6' },
  grid: { color: 'rgba(99,179,237,0.06)', borderDash: [4,4] },
  tick: { color: '#64748b', font: { family:"'IBM Plex Mono'", size: 10 } },
};

Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(99,179,237,0.08)';

let performanceChart = null;
let currentRange = "7w";

// ── Performance Line Chart ──
function buildPerformanceChart(range = "7w") {
  const ctx = document.getElementById("performanceChart");
  if (!ctx) return;
  const d = PERFORMANCE_WEEKS[range];
  if (performanceChart) performanceChart.destroy();

  performanceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: d.labels,
      datasets: [
        {
          label: "Mathematics",
          data: d.math,
          borderColor: CHART_DEFAULTS.color.blue,
          backgroundColor: "rgba(59,130,246,0.08)",
          borderWidth: 2.5,
          pointBackgroundColor: CHART_DEFAULTS.color.blue,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Science",
          data: d.science,
          borderColor: CHART_DEFAULTS.color.cyan,
          backgroundColor: "rgba(34,211,238,0.06)",
          borderWidth: 2.5,
          pointBackgroundColor: CHART_DEFAULTS.color.cyan,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4,
        },
        {
          label: "English",
          data: d.english,
          borderColor: CHART_DEFAULTS.color.green,
          backgroundColor: "rgba(16,185,129,0.06)",
          borderWidth: 2.5,
          pointBackgroundColor: CHART_DEFAULTS.color.green,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4,
        },
        {
          label: "History",
          data: d.history,
          borderColor: CHART_DEFAULTS.color.amber,
          backgroundColor: "rgba(245,158,11,0.06)",
          borderWidth: 2.5,
          pointBackgroundColor: CHART_DEFAULTS.color.amber,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#94a3b8",
            font: { family: "'IBM Plex Mono'", size: 10 },
            boxWidth: 10,
            boxHeight: 10,
            padding: 16,
          }
        },
        tooltip: {
          backgroundColor: "#141c28",
          titleColor: "#e2e8f0",
          bodyColor: "#94a3b8",
          borderColor: "rgba(99,179,237,0.2)",
          borderWidth: 1,
          padding: 12,
          titleFont: { family: "'Syne'", size: 13, weight: "700" },
          bodyFont: { family: "'IBM Plex Mono'", size: 11 },
          callbacks: {
            label: ctx => `  ${ctx.dataset.label}: ${ctx.parsed.y}%`
          }
        }
      },
      scales: {
        x: {
          grid: CHART_DEFAULTS.grid,
          ticks: CHART_DEFAULTS.tick,
        },
        y: {
          min: 40,
          max: 100,
          grid: CHART_DEFAULTS.grid,
          ticks: {
            ...CHART_DEFAULTS.tick,
            callback: v => v + "%",
            stepSize: 10,
          }
        }
      }
    }
  });
}

// ── Learning Style Doughnut ──
function buildStyleChart() {
  const ctx = document.getElementById("styleChart");
  if (!ctx) return;

  const labels = ["Visual", "Collaborative", "Auditory", "Self-Directed", "Repetition", "Exploratory"];
  const data = [68, 57, 42, 38, 29, 13];
  const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444", "#06b6d4"];

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors.map(c => c + "cc"),
        borderColor: colors,
        borderWidth: 2,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#141c28",
          borderColor: "rgba(99,179,237,0.2)",
          borderWidth: 1,
          titleColor: "#e2e8f0",
          bodyColor: "#94a3b8",
          padding: 10,
          titleFont: { family: "'Syne'", weight: "700" },
          bodyFont: { family: "'IBM Plex Mono'", size: 11 },
          callbacks: {
            label: ctx => `  ${ctx.label}: ${ctx.raw} students`
          }
        }
      }
    }
  });

  // Custom legend
  const legend = document.getElementById("styleLegend");
  if (legend) {
    labels.forEach((l, i) => {
      legend.innerHTML += `
        <div class="legend-item">
          <div class="legend-dot" style="background:${colors[i]}"></div>
          <span>${l} (${data[i]})</span>
        </div>`;
    });
  }
}

// ── Radar Chart for student profile ──
function buildRadarChart(canvasId, studentData) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Math", "Science", "English", "History", "Attendance", "Engagement"],
      datasets: [{
        label: studentData.name,
        data: [
          studentData.subjects.math,
          studentData.subjects.science,
          studentData.subjects.english,
          studentData.subjects.history,
          studentData.attendance,
          studentData.engagement,
        ],
        backgroundColor: "rgba(34,211,238,0.1)",
        borderColor: "#22d3ee",
        borderWidth: 2,
        pointBackgroundColor: "#22d3ee",
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#141c28",
          borderColor: "rgba(34,211,238,0.2)",
          borderWidth: 1,
          titleColor: "#e2e8f0",
          bodyColor: "#94a3b8",
          padding: 10,
        }
      },
      scales: {
        r: {
          min: 0, max: 100,
          backgroundColor: "rgba(20,28,40,0.5)",
          grid: { color: "rgba(99,179,237,0.08)" },
          angleLines: { color: "rgba(99,179,237,0.1)" },
          pointLabels: { color: "#64748b", font: { family: "'IBM Plex Mono'", size: 10 } },
          ticks: { display: false, stepSize: 25 },
        }
      }
    }
  });
}

// ── Bar Chart for predictions ──
function buildPredictBar(canvasId, labels, data, colors) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Risk Score",
        data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        borderRadius: 6,
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#141c28",
          borderColor: "rgba(99,179,237,0.2)",
          borderWidth: 1,
          titleColor: "#e2e8f0",
          bodyFont: { family: "'IBM Plex Mono'", size: 11 },
          callbacks: { label: ctx => `  Risk: ${ctx.raw}%` }
        }
      },
      scales: {
        x: {
          min: 0, max: 100,
          grid: CHART_DEFAULTS.grid,
          ticks: { ...CHART_DEFAULTS.tick, callback: v => v + "%" }
        },
        y: {
          grid: { display: false },
          ticks: { color: "#94a3b8", font: { family: "'Manrope'", size: 12, weight: "600" } }
        }
      }
    }
  });
}

// ── Progress Chart for patterns ──
function buildPatternBars(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const patterns = LEARNING_PATTERNS;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: patterns.map(p => p.name),
      datasets: [
        {
          label: "Avg Score",
          data: patterns.map(p => p.avgScore),
          backgroundColor: patterns.map(p => p.color + "cc"),
          borderColor: patterns.map(p => p.color),
          borderWidth: 2,
          borderRadius: 8,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#141c28",
          borderColor: "rgba(99,179,237,0.2)",
          borderWidth: 1,
          titleColor: "#e2e8f0",
          bodyFont: { family: "'IBM Plex Mono'", size: 11 },
          callbacks: { label: ctx => `  Avg Score: ${ctx.raw}%` }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#94a3b8", font: { family: "'Manrope'", size: 11 } }
        },
        y: {
          min: 50, max: 95,
          grid: CHART_DEFAULTS.grid,
          ticks: { ...CHART_DEFAULTS.tick, callback: v => v + "%" }
        }
      }
    }
  });
}

// ── Range switcher ──
function setRange(btn, range) {
  document.querySelectorAll(".ctrl-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentRange = range;
  buildPerformanceChart(range);
}

// ── Init on page load ──
document.addEventListener("DOMContentLoaded", () => {
  buildPerformanceChart("7w");
  buildStyleChart();
});
