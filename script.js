var ctx = document.getElementById('donutChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Packs", "Bowls", "Cups", "Trays"],
      datasets: [
        {
          label: "Votes",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [1041,395,297,86]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Poll results: Favorite way to enjoy ramen',
        fontSize: 30,
      }
    }
});
