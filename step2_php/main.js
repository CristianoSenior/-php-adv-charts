function init() {

printTable();
printFatturatoagent();
}
$(document).ready(init);

function printTable() {
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (data) {
      graficoPrimo(data);
    }, error: function(err) {

    }
  })
}

function printFatturatoagent() {
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (data) {
      graficoSecondo(data)
    }, error: function(err) {

    }
  })
}

function graficoSecondo(agenti) {
  var ctx = $('#pie');
  var myChart = new Chart(ctx, {
    // tipologia di grafico
      type: agenti.fatturato_by_agent['type'],
      data: {
        // asse delle x
          labels:agenti.fatturato_by_agent['labels'],
          datasets: [{
              label: '# of Votes',
              // asse delle y
              data:agenti.fatturato_by_agent['data'],

              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

}





function graficoPrimo(valore) {
  var ctx = $('#line');
  var myChart = new Chart(ctx, {
    // tipologia grafico
      type: valore.fatturato['type'],
      data: {
        // asse dell x
          labels:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"] ,
          datasets: [{
              label: '# of Votes',
              // asse delle y
              data:valore.fatturato['data'],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

}
