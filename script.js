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
        text: 'Poll results: Favorite way to enjoy ramen'
      }
    }
});

var two = document.getElementById('pieChart');

new Chart(two, {
    type: 'pie',
    data: {
      labels: ["Taiwan", "Korea", "Japan", "Indonesia", "Philippines", "China", "Vietnam"],
      datasets: [
        {
          label: "Votes",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1"],
          data: [55,48,44,18,10,9,9]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Poll results: Where does the best instant noodle come from?'
      }
    }
});

var three = document.getElementById("polar-chart")

new Chart(three, {
    type: 'polarArea',
    data: {
      labels: ["Nongshim", "Korea Yakult", "Samyang", "Ottogi", "Pulmuone"],
      datasets: [
        {
          label: "Vote",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [363,110,64,17,11]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Poll results: Which brand of korean instant ramen is your favorite?'
      }
    }
});
