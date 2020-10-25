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
        fontSize: 20,
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
        text: 'Poll results: Which brand of korean instant ramen is your favorite?',
        fontSize: 20
      }
    }
});

// Image Switcher

function changeText(value){
  var p = document.getElementById("change");
  var text = "";

  if (value == 1) text += "This is Nongshim Ramen! Nongshin ramen has a variety of ramen flavors, their most popular being their Shin Ramyun and Shin Ramyun Dark. They're known for their spicy flavors.";
  if (value == 2) text += "This is Paldo / Korea Yakult Ramen! Korea Yakult is a Korean favorite. The company is most known for its yogurt drinks, but their oriental noodles come packed with great flavors.";
  if (value == 3) text += "This is Samyang Ramen! Samyang is known for their meat flavors, most notably their chicken flavor. It comes in a rich broth and plentiful amounts of cheese.";

  p.innerHTML = text;
}



// Line over time



var context = document.getElementById("line");

var config =  {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa Wholegrain La Mian",
              "Red Chef Spicy Sakura Prawn Soup Rice Vermicelli & Noodles (New Recipe)",
              "Samyang Foods Carbo Buldak Topokki",
              "Red Chef Green Tom Yum Soup Noodles (New Formulation Dec 2019)",
              "Prima Taste Singapore Curry Wholegrain La Mian",
              "A-Sha Gourmet Braised Beef Noodle Soup",
              "MyKuali White Fish Broth Noodle",
              "Mom’s Dry Noodle Dan Dan Noodle",
              "Sau Tao Tom Yum Kung Flavour Ramen",
              "Prima Taste Singapore Black Pepper Crab Flavoured La Mian"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2012",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  }
};

var rankingChart = new Chart(context,config);

var index = 1;
var rankings = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],[2, 3, 1, 4, 5, 6, 7, 8, 9, 10], [1, 5, 3, 2, 4, 6, 7, 8, 9, 10],  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 5, 6, 4, 7, 8, 9, 10], [1, 2, 3, 4, 6, 5, 9, 7, 8, 10]]
var year = [2012,2014,2015,2016,2019,2020]



function backButton() {
  if (index > 0) {
    index--;
    rankingChart.config.data.datasets[0].data = rankings[index];
    rankingChart.config.data.datasets[0].label = "TOP TEN INSTANT NOODLES " + year[index];
    rankingChart.update();
  }
}

function nextButton() {
  if (index < 5) {
    index++;
    rankingChart.config.data.datasets[0].data = rankings[index];
    rankingChart.config.data.datasets[0].label = "TOP TEN INSTANT NOODLES " + year[index];
    rankingChart.update();
  }
}
