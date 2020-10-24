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

var two = document.getElementById('barChart');

new Chart(two, {
    type: 'bar',
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
}); labels: ["Indonesia – Indomie Special Fried Curly Noodles Special Quality Instant Noodles",
"Indonesia – Indomie Mi Goreng Rasa Ayam Panggang Jumbo Barbecue Chicken Flavour Fried Instant Noodles"]

var linechart1 = document.getElementById("line-chart-2012");

new Chart (linechart1, {
    type: 'line',
    data: {
      labels: ["Indomie Special Fried Curly Noodles Special Quality Instant Noodles",
              "Indomie Mi Goreng Rasa Ayam Panggang Jumbo Barbecue Chicken Flavour Fried Instant Noodles",
              "Nissin Yakisoba – with Mayonnaise / Mustard Packet",
              "Sapporo Ichiban Japanese Style Noodles Chow Mein",
              "Mie Sedaap Instant Kari Spesial Bumbu Kari Kental",
              "Myojo Hyoubanya no Chukasoba Japanese Style Noodles Oriental Flavor",
              "Nong Shim Shin Ramyun Black Premium Noodle Soup",
              "Sapporo Ichiban Shio Ramen Japanese Style Noodles",
              "Doll Instant Noodle Artificial Chicken Flavour",
              "Koka Instant Non-Fried Noodles Spicy Black Pepper Flavour"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2011/2012",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart2 = document.getElementById("line-chart-2013");

new Chart (linechart2, {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa La Mian",
              "Prima Taste Simgapore Curry La Mian",
              "Indomie Mi Instan Mi Goreng Rendang",
              "Nongshim Jinjja Jinjja Flamin’ Hot & Nutty Noodle Soup",
              "Indomie Curly Noodle With Grilled Chicken Flavour Special Quality Instant Noodles",
              "Myojo Ippei-chan Yakisoba Japanese Style Noodles",
              "Sapporo Ichiban Chow Mein",
              "Nongshim Shin Ramyun Black Premium Noodle Soup",
              "Paldo Kokomen Spicy Chicken Flavor",
              "MAMA Shrimp Creamy Tom Yum Flavour Oriental Style Instant Noodles"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2013",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart3 = document.getElementById("line-chart-2014");

new Chart (linechart3, {
    type: 'line',
    data: {
      labels: ["Prima Taste Simgapore Laksa La Mian",
              "Prima Taste Singapore Curry La Mian",
              "MyKuali Penang White Curry Noodle",
              "Sapporo Ichiban Otafuku Okonomi Sauce Yakisoba",
              "Samyang Foods Maesaengyitangmyun Baked Noodle",
              "Paldo Cheese Noodle",
              "Mamee Chef Curry Laksa Flavour",
              "Prima Taste Singapore Chilli Crab La Mian",
              "Nongshim Soon Veggie Noodle Soup",
              "MAMA Instant Noodles Yentafo Tom Yum Mohfai Flavour"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2014",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [2, 3, 1, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart4 = document.getElementById("line-chart-2015");

new Chart (linechart4, {
    type: 'line',
    data: {
      labels: ["MyKuali Penang Red Tom Yum Goong Noodle",
              "Prima Taste Singapore Curry La Mian",
              "Prima Taste Singapore Laksa La Mian",
              "MyKuali Penang White Curry Noodle (New Improved Taste)",
              "CarJEN Nyonya Curry Laksa",
              "Mamee Chef Gold Recipe Mi Kari Seribu Rasa",
              "MyKuali Penang Hokkien Prawn Noodle (New Improved Taste)",
              "MAMA Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack",
              "Maruchan Gotsumori Sauce Yakisoba",
              "A-Sha Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2015",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 5, 3, 2, 4, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart5 = document.getElementById("line-chart-2016");

new Chart (linechart5, {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa Wholegrain La Mian",
              "MyKuali Penang Spicy Prawn Soup Noodle Authentic Taste",
              "CarJEN Nyonya Curry Laksa Improved Taste",
              "MyKuali Penang Red Tom Yum Goong Noodle Authentic Taste",
              "Prima Taste Singapore Curry Wholegrain La Mian",
              "MyKuali Penang White Curry Noodle Authentic Taste",
              "Wugudaochang Tomato Beef Brisket Flavor Purple Sweet Potato Noodles",
              "Prima Juzz’s Mee Creamy Chicken Flavour",
              "Zeng Noodles Scallion With Sichuan Pepper Flavor",
              "MAMA Instant Noodles Coconut Milk Flavour"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2016",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart6 = document.getElementById("line-chart-2017");

new Chart (linechart6, {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa Wholegrain La Mian",
              "MyKuali Penang Spicy Prawn Soup Noodle Authentic Taste",
              "CarJEN Nyonya Curry Laksa Improved Taste",
              "Nissin Straits Kitchen/Straits Reborn Laksa",
              "MyKuali Penang Red Tom Yum Goong Noodle",
              "Prima Taste Singapore Curry Wholegrain La Mian",
              "Nyor Nyar Penang White Curry Instant Noodle",
              "Nissin Demae Ramen Straight Noodle Black Garlic Oil Tonkotsu Flavour Instant Noodle",
              "Xiao Ban Mian Shallot & Scallion Oil Noodle",
              "Paldo Budae Jigae Ramyun"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2017",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 4, 3, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart7 = document.getElementById("line-chart-2018");

new Chart (linechart7, {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa Wholegrain La Mian",
              "Red Chef Sakura Prawn Soup Noodles",
              "MyKuali Penang White Curry Noodle (2018 Recipe)",
              "CarJEN Nyonya Curry Laksa Improved Taste",
              "Prima Taste Singapore Curry Wholegrain La Mian",
              "Red Chef Green Tom Yum Soup Noodles",
              "Mom’s Dry Noodle Dan Dan Noodle",
              "TTL White Wine Carbonara Noodle",
              "Nissin Demae Ramen Straight Noodle Spicy Tonkotsu Flavour",
              "Gookmul Knight Of Ribs"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2018",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart8 = document.getElementById("line-chart-2019");

new Chart (linechart8, {
    type: 'line',
    data: {
      labels: ["Prima Taste Singapore Laksa Wholegrain La Mian",
              "Red Chef Sakura Prawn Soup Noodles",
              "Liangchengmei Biang Biang Men",
              "CarJEN Nyonya Curry Laksa Improved Taste",
              "Prima Taste Singapore Curry Wholegrain La Mian",
              "A-Sha Gourmet Braised Beef Noodle Soup",
              "Red Chef Green Tom Yum Soup Noodles",
              "Mom’s Dry Noodle Dan Dan Noodle",
              "Sau Tao Tom Yum Kung Flavour Ramen",
              "Indomie Real Meat Mi Instan Goreng Rendang"],
      datasets: [{
        label: "TOP TEN INSTANT NOODLES 2019",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 5, 6, 4, 7, 8, 9, 10]
      }
    ]
  }
});

var linechart9 = document.getElementById("line-chart-2020");

new Chart (linechart9, {
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
        label: "TOP TEN INSTANT NOODLES 2020",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#F4FF93","#97FF40", "#FFB2F1", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [1, 2, 3, 4, 6, 5, 9, 7, 8, 10]
      }
    ]
  }
});

var chartArray = [linechart1, linechart2, linechart3, linechart4, linechart5, linechart6, linechart7, linechart8, linechart9];
var index;

startButton() {
index = 0;
}

function nextButton() {
  index++;
}
