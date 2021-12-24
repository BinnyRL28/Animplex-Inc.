function reating() {

    var chart = new CanvasJS.Chart("chartContainer1", {
      theme: "dark1", // "light1", "light2", "dark1"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Top 10 más visitos en Aniplex"
      },
      axisX: {
        margin: 30,
        labelPlacement: "inside",
        tickPlacement: "inside"
      },
      axisY2: {
        title: "Views (Numero de reproducciones)",
        titleFontSize: 12,
        includeZero: true,
        suffix: "M"
      },
      data: [{
        type: "bar",
        axisYType: "secondary",
        yValueFormatString: "#,###.##M",
        indexLabel: "{y}",
        dataPoints: [
          { label: "Fullmetal Alchemist", y: 2.71 }, 
          { label: "Sword Art Online", y: 2.60 },
          { label: "Kimetsu no Yaiba", y: 2.32 },
          { label: "Naruto", y: 2.15 },
          { label: "Angel Beats", y: 1.82 },
          { label: "Shigatsu wa Kimi no Uso", y: 1.80},
          { label: "Nanatsu no taizai", y: 1.72 },
          { label: "Sword Art Online", y: 1.68 },
          { label: "Yakusoku no Neverland", y: 1.55},
          { label: "Bleach", y: 1.53 }
        ]
      }],
     
    });
    chart.render();
      
    }

    function score(){

  var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Los 5 animes con mayor valoración"
    },
    axisY: {
      title: "Score (valoración)",
      suffix: " ",
      reversed: true
    },
    axisX2: {
      tickThickness: 0,
      labelAngle: 0
    },
    data: [{
      type: "column",
      axisXType: "secondary",
      yValueFormatString: "#,##0 meters",
          indexLabelFontSize: 15,
      dataPoints: [
              { y: 8.69, label: "Great Teacher Onizuka" },
              { y: 8.78, label: "Monogatari" },
        { y: 9.15, label: "Fullmetal Alchemist", indexLabel: "\u2191 Más recomendado" },
        { y: 9.09, label: "Gintama" },
        { y: 8.72, label: "Rurouni Kenshin" }
  
      ]
    }]
  });
  chart.render();
  }


  function typeAnimation(){
    var chart = new CanvasJS.Chart("chartContainer3", {
      theme: "dark1",
      exportFileName: "Doughnut Chart",
      exportEnabled: true,
      animationEnabled: true,
      title:{
        text: "Tipo de Animación"
      },
      legend:{
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "doughnut",
        innerRadius: 70,
        showInLegend: true,
        toolTipContent: "<strong><b>{name}</b></strong>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 73, name: "Animes" },
          { y: 4, name: "Películas" },
          { y: 5, name: "OVAS" }
        ]
      }]
    });
    chart.render();
    
    function explodePie (e) {
      if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
      } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
      }
      e.chart.render();
    }
  }
    


  function abarcadora(){
    reating();
    score();
    typeAnimation();
  }

  window.onload = abarcadora;

//   for (let i = 1; i <= 83; i++) {
//     document.write(i + "." + "<br>");
// }