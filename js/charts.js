const ctx = document.getElementById('chartsPie');
const cnt = document.getElementById('canvas');


  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        borderColor: 'rgba(0, 0, 0, 0)',
        backgroundColor: ['#03B2D1', '#00A1BE', '#0CE3A1', '#32D2A1'],
        label: 'Процентов',
        data: [12, 13, 25, 50],
        borderWidth: 1
      }]
    },
    options: {},
  });
  
  // let option = {
  //   scales:
  //     {
  //      yAxes: {
  //         gridLines: {
  //            display: false
  //         }
  //       }
  //     }
  // }

  new Chart(cnt, {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
      datasets: [
        {
        data: [50, 45, 60, 60, 70, 60, 80, 80, 75, 75, 35, 45, 40, 40, 30, 5, 15, 20, 25, 10, 15, 15, 10, 20, 30],
        borderWidth: 1.3,
        borderColor: ['red'],
        pointRadius: 0
        },
        {
        data: [50, 56, 54, 57, 48, 52, 55, 57, 51, 55, 54, 52, 54, 52, 54, 56, 50, 48, 49, 47, 49, 51, 46, 43, 48],
        borderWidth: 1.3,
        borderColor: ['yellow'],
        pointRadius: 0
        },
        {
        data: [48, 50, 54, 57, 48, 56, 55, 57, 53, 56, 58, 57, 59, 60, 59, 57, 59, 58, 49, 47, 57, 56, 58, 60, 63],
        borderWidth: 1.3,
        borderColor: ['green'],
        pointRadius: 0
        },
        {
        data: [55, 55, 53, 52, 56, 56, 54, 59, 60, 61, 63, 62, 61, 63, 65, 62, 64, 62, 63, 68, 67, 69, 69, 67, 69],
        borderWidth: 1.3,
        borderColor: 'black',
        pointRadius: 0
        }
      ]
    },
    options: {
      plugins: {
          legend: {
              display: false,
          }
      }
    }
  });
  


let statGraphic = document.getElementById("stat-graphic")

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  datasets: [
    {
      label: "Data 1",
      data: ['3', '5', '4', '3', '4', '4', '3', '5', '4', '3', '4', '4'],
      backgroundColor: "#32D2A1",
    },
    {
      label: "Data 1",
      data: ['4', '6', '5', '4', '5', '5', '4', '6', '5', '4', '5', '5'],
      backgroundColor: "#0DEBA7",
    },
    {
      label: "Data 1",
      data: ['6', '8', '7', '6', '7', '7', '6', '8', '7', '6', '7', '7',],
      backgroundColor: "#00A1BE",
    },
    {
      label: "Data 1",
      data: ['7', '9', '8', '7', '8', '8', '7', '9', '8', '7', '8', '8'],
      backgroundColor: "#06C7E9",
    },
  ]
};

new Chart(statGraphic, {
  type: 'bar',
  data: data,
  options: {
    plugins: {
          legend: {
              display: false,
          }
      },
    scales: {
      x: {
          stacked: true
      }
    }
  }
}  
);