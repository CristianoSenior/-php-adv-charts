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
      // var labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      // var data = [12, 19, 3, 5, 2, 3];
      // console.log(data['fatturato']['data']);

      var ctx = $('#line');
      var myChart = new Chart(ctx, {
          type: data.fatturato['type'],
          data: {
              labels:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"] ,
              datasets: [{
                  label: '# of Votes',
                  data: data.fatturato['data'],
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
    }, error: function(err) {

    }
  })
}

function printFatturatoagent() {
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (data) {
      var arrayAgenti = data.fatturato_by_agent['data'];
      var valori = Object.values(arrayAgenti);
      // for (var x in arrayAgenti) {
      //   console.log(arrayAgenti[x]);
      //   valori.push(arrayAgenti[x]);
      // }
      console.log(valori);
      var agentiNomi = Object.keys(arrayAgenti);
      // var labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      // var data = [12, 19, 3, 5, 2, 3];
      // console.log(data['fatturato']['data']);

      var ctx = $('#pie');
      var myChart = new Chart(ctx, {
          type: data.fatturato_by_agent['type'],
          data: {
              labels:agentiNomi,
              datasets: [{
                  label: '# of Votes',
                  data: valori ,

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
    }, error: function(err) {

    }
  })
}
