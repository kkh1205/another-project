/* KH. 생산 */
var dataProduction = {
  labels: ['1분기', '2분기', '3분기', '4분기'],
  datasets: [{
      label: 'A-01',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-02',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-03',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
}

var optionsProduction = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

var ctx = document.getElementById('ProduceChart');
var ProduceChart = new Chart(ctx, {
  type: 'bar',
  data: dataProduction,
  options: optionsProduction
});

/* KH. 매출 */
var dataSales1 = {
  labels: ['기술영업', '소프트웨어', '해외영업'],
  datasets: [{
    label : '1분기',
    data: [0, 0, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}

var optionsSales1 = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '부서별 1분기 매출'
    }
  }
}

var ctx = document.getElementById('SalesChart')

var SalesChart = new Chart(ctx, {
  type: 'doughnut',
  data: dataSales1,
  options: optionsSales1
});

/* ---------------sales2-------------- */

var dataSales2 = {
  labels: ['기술영업', '소프트웨어', '해외영업'],
  datasets: [{
    label: '2분기',
    data: [0, 0, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}
var optionsSales2 = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '부서별 2분기 매출'
    }
  }
}

var ctx = document.getElementById('SalesChart2')

var SalesChart2 = new Chart(ctx, {
  type: 'doughnut',
  data: dataSales2,
  options: optionsSales2
});

/* --------------sales3--------------- */

var dataSales3 = {
  labels: ['기술영업', '소프트웨어', '해외영업'],
  datasets: [{
    label: '3분기',
    data: [0, 0, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}
var optionsSales3 = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '부서별 3분기 매출'
    }
  }
}

var ctx = document.getElementById('SalesChart3')

var SalesChart3 = new Chart(ctx, {
  type: 'doughnut',
  data: dataSales3,
  options: optionsSales3
});

/* ---------------sales4---------------- */

var dataSales4 = {
  labels: ['기술영업', '소프트웨어', '해외영업'],
  datasets: [{
    label: '4분기',
    data: [0, 0, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}
var optionsSales4 = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '부서별 4분기 매출'
    }
  }
}

var ctx = document.getElementById('SalesChart4')

var SalesChart4 = new Chart(ctx, {
  type: 'doughnut',
  data: dataSales4,
  options: optionsSales4
});

/* KH. 품질 */
var dataQuality = {
  labels: ['1분기', '2분기', '3분기', '4분기'],
  datasets: [{
      label: 'A-01',
      data: [0,0,0,0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-02',
      data: [0,0,0,0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-03',
      data: [0,0,0,0],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
}
var optionsQuality = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

var ctx = document.getElementById('QualityChart')

var QualityChart = new Chart(ctx, {
  type: 'line',
  data: dataQuality,
  options: optionsQuality
});
/* KH. 매출액 & 영업이익 */
var dataPerfomance = {
  labels: ['1분기', '2분기', '3분기', '4분기'],
  datasets: [{
      label: '영업이익',
      data: [0,0,0,0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      order: 1
    },
    {
      label: '매출액',
      data: [0,0,0,0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 3,
      type: 'line',
      order: 0
    }
  ]
}
var optionsPerformance = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

var ctx = document.getElementById('PerformanceChart')

var PerformanceChart = new Chart(ctx, {
  type: 'bar',
  data: dataPerfomance,
  options: optionsPerformance
});
/* KH. 수출현황 */



// 위에까진 차트 적용. 데이터를 객체에 저장시켜야 변수로 지정하든 뭘 하든 할수 있으니 객채로 저장.

// 해당 창이 켜질 때, sandAjax를 호출.
window.onload = function () {
  sandAjax('http://localhost:3001');
}

function sandAjax(url) {
  var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

  oReq.open('POST', url); // url로부터 받는 데이터 형식이 POST라고 선언
  oReq.setRequestHeader('Content-Type', 'application/json'); // 컨텐츠 타입을 json이라 알려줌.
  oReq.send(); // 그걸 보냄

  oReq.addEventListener('load', function () {
    var result = JSON.parse(oReq.responseText);
    console.log(result);
    /* KH. 생산 */
    var A01P = result.A01P;
    var A02P = result.A02P;
    var A03P = result.A03P;
    /* KH. 매출 */
    var quarter1 = result.quarter1;
    var quarter2 = result.quarter2;
    var quarter3 = result.quarter3;
    var quarter4 = result.quarter4;
    /* KH. 품질 */
    var A01Q = result.A01Q;
    var A02Q = result.A02Q;
    var A03Q = result.A03Q;
    /* KH. 매출액 & 영업이익 */
    var quarterlySales = result.quarterlySales;
    var operatingProfit = result.operatingProfit;
    /* KH. 수출 현황 */
    var e2021 = result.e2021;
    var e2020 = result.e2020;
    var e2019 = result.e2019;
    
    /* null값 제거 */

    /* null값 제거 */
    quarter1  = quarter1.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });
    quarter2  = quarter2.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });
    quarter3  = quarter3.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });
    quarter4  = quarter4.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });

    quarterlySales  = quarterlySales.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });
    operatingProfit  = operatingProfit.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
    });
    /* KH. null값 제거확인 */
    console.log(quarter1);
    console.log(quarter2);
    console.log(quarter3);
    console.log(quarter4);
    console.log(operatingProfit);
    console.log(quarterlySales);

    /* -------- KH. 차트데이터 변수에 대입 -------- */
    /* KH. 생산 */
    var comp_dataPro = dataProduction.datasets[0].data;
    var comp_dataPro1 = dataProduction.datasets[1].data;
    var comp_dataPro2 = dataProduction.datasets[2].data;
    /* KH. 매출 */
    var comp_dataSales1 = dataSales1.datasets[0].data;
    var comp_dataSales2 = dataSales2.datasets[0].data;
    var comp_dataSales3 = dataSales3.datasets[0].data;
    var comp_dataSales4 = dataSales4.datasets[0].data;
    /* KH. 품질 */
    var comp_dataQ = dataQuality.datasets[0].data;
    var comp_dataQ1 = dataQuality.datasets[1].data;
    var comp_dataQ2 = dataQuality.datasets[2].data;
    /* KH. 매출액 & 영업이익 */
    var comp_operatingProfit = dataPerfomance.datasets[0].data;
    var comp_quarterlySales = dataPerfomance.datasets[1].data;
    /* KH. 수출 현황 */

    /* --- KH. 차트데이터 변수에 result값 대입. --- */
    /* KH. 생산 */
    for (var i = 0; i < comp_dataPro.length; i++) {
      comp_dataPro[i] = A01P[i];
    }
    for (var i = 0; i < comp_dataPro1.length; i++) {
      comp_dataPro1[i] = A02P[i];
    }
    for (var i = 0; i < comp_dataPro2.length; i++) {
      comp_dataPro2[i] = A03P[i];
    }

    /* KH. 매출 */
    for (var i = 0; i < comp_dataSales1.length; i++) {
      comp_dataSales1[i] = quarter1[i];
    }
    for (var i = 0; i < comp_dataSales2.length; i++) {
      comp_dataSales2[i] = quarter2[i];
    }
    for (var i = 0; i < comp_dataSales3.length; i++) {
      comp_dataSales3[i] = quarter3[i];
    }
    for (var i = 0; i < comp_dataSales4.length; i++) {
      comp_dataSales4[i] = quarter4[i];
    }

    /* KH. 품질 */
    for (var i = 0; i < comp_dataQ.length; i++) {
      comp_dataQ[i] = A01Q[i];
    }
    for (var i = 0; i < comp_dataQ1.length; i++) {
      comp_dataQ1[i] = A02Q[i];
    }
    for (var i = 0; i < comp_dataQ2.length; i++) {
      comp_dataQ2[i] = A03Q[i];
    }

    /* KH. 매출액 & 영업이익 */
    for (var i = 0; i < comp_operatingProfit.length; i++) {
      comp_operatingProfit[i] = operatingProfit[i];
    }
    for (var i = 0; i < comp_quarterlySales.length; i++) {
      comp_quarterlySales[i] = quarterlySales[i];
    }

    /* KH. 수출 현황 */

    /* KH. result값 받은 변수 차트데이터에 대입 */
    /* KH. 생산 */
    dataProduction.datasets[0].data = comp_dataPro;
    dataProduction.datasets[1].data = comp_dataPro1;
    dataProduction.datasets[2].data = comp_dataPro2;
    /* KH. 매출 */
    dataSales1.datasets[0].data = comp_dataSales1;
    dataSales2.datasets[0].data = comp_dataSales2;
    dataSales3.datasets[0].data = comp_dataSales3;
    dataSales4.datasets[0].data = comp_dataSales4;
    /* KH. 품질 */
    dataQuality.datasets[0].data = comp_dataQ;
    dataQuality.datasets[1].data = comp_dataQ1;
    dataQuality.datasets[2].data = comp_dataQ2;
    /* KH. 매출액 & 영업이익 */
    dataPerfomance.datasets[0].data = comp_operatingProfit;
    dataPerfomance.datasets[1].data = comp_quarterlySales;
    /* KH. 수출 현황 */

    /* KH. 차트업데이트. */
    ProduceChart.update();
    SalesChart.update();
    SalesChart2.update();
    SalesChart3.update();
    SalesChart4.update();
    QualityChart.update();
    PerformanceChart.update();
  })
}
