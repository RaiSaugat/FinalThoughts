$(document).ready(function(){
         jQuery.scrollSpeed(100, 800);
     $('select').material_select();
     $('#textarea1').val('New Text');
      $('.modal').modal();
     $('#textarea1').trigger('autoresize');
        $(".button-collapse").sideNav();
     $(window).load(function(){
          $(".gender").addClass("active");
          $(".row-all").html("<div class='col l4 col m12'><div class='section'><div id='chart-gender-data-first' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-second' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-third' class='z-depth-5 chart'></div></div></div>");
          Highcharts.chart('chart-gender-data-first', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Distribution of Reported HIV Cases 2015'
     },
     xAxis: {
          categories: ['FWDR', 'MWDR', 'WDR', 'CDR', 'EDR'],
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Total Infected'
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
              }
          }
     },
     legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
     },
     tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
     },
     plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: false,
                  color: 'white'
              }
          }
     },
     series: [{
          name: 'Male',
          data: [1391, 739, 1975, 3351, 1078]
     }, {
          name: 'Female',
          data: [1171,580,1468,2073,665]
     }, {
          name: 'Transgender',
          data: [6,5,6,36,17]
     }]
 });


       Highcharts.chart('chart-gender-data-second', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Intervention-Male Labour Migrants'
     },
     xAxis: {
          categories: [
              '070/071',
              '071/072',
              '072/073'
          ],
          crosshair: true
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Number'
          }
     },
     tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
     },
     plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
     },
     series: [{
          name: 'Condom Distributed',
          data: [2991704,1340286,1578039]

     }, {
          name: 'HIV Tested And Counseled',
          data: [42679,40623,103667]

     }]
 });

       Highcharts.chart('chart-gender-data-third', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Intervention-Female Sex Workers'
     },
     xAxis: {
          categories: [
              '070/071',
              '071/072',
              '072/073'
          ],
          crosshair: true
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Number'
          }
     },
     tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
     },
     plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
     },
     series: [{
          name: 'Condom Distributed',
          data: [3434421,4712296,4204696]

     }, {
          name: 'HIV Tested And Counseled',
          data: [9970,10006,9765]

     }]
 });
     });
    $(".gender").on("click",function(){
         $(".gender").addClass("active");
         $(".age").removeClass("active");
         $(".year").removeClass("active");
            $(".row-all").html("<div class='col l4 col m12'><div class='section'><div id='chart-gender-data-first' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-second' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-third' class='z-depth-5 chart'></div></div></div>");
        Highcharts.chart('chart-gender-data-first', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Distribution of Reported HIV Cases 2015'
    },
    xAxis: {
        categories: ['FWDR', 'MWDR', 'WDR', 'CDR', 'EDR']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Infected'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: 'white'
            }
        }
    },
    series: [{
        name: 'Male',
        data: [1391, 739, 1975, 3351, 1078]
    }, {
        name: 'Female',
        data: [1171,580,1468,2073,665]
    }, {
        name: 'Transgender',
        data: [6,5,6,36,17]
    }]
});


     Highcharts.chart('chart-gender-data-second', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Intervention-Male Labour Migrants'
    },
    xAxis: {
        categories: [
            '070/071',
            '071/072',
            '072/073'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Condom Distributed',
        data: [2991704,1340286,1578039]

    }, {
        name: 'HIV Tested And Counseled',
        data: [42679,40623,103667]

    }]
});

      Highcharts.chart('chart-gender-data-third', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Intervention-Female Sex Workers'
    },
    xAxis: {
        categories: [
            '070/071',
            '071/072',
            '072/073'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Condom Distributed',
        data: [3434421,4712296,4204696]

    }, {
        name: 'HIV Tested And Counseled',
        data: [9970,10006,9765]

    }]
});
    });

    $(".year").on("click",function(){
         $(".year").addClass("active");
         $(".gender").removeClass("active");
         $(".age").removeClass("active");
        $(".row-all").html("<div class='col l12 col m12'><div class='section'><a href='#model1'><div id='chart-year-data-first' class='z-depth-5 chart'></div></a></div></div><div class='col l4 col m12'><div class='section'><div id='chart-year-data-second' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-year-data-third' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-year-data-fourth' class='z-depth-5 chart'></div></div></div>");
      Highcharts.chart('chart-year-data-first', {
    title: {
        text: 'Estimated New HIV Infection (1990-2016)'
    },
    yAxis: {
        title: {
            text: 'New HIV Infection'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1990
        }
    },

    series: [{
        name: 'Infection Rate',
        data: [8,32,71,196,400,768,1494,2882,4975,6845,7512,7448,7260,7179,6590,5445,4132,3887,3305,2650,2338,2157,1819,1560,2228,1480,2163]
    }]
     });

     Highcharts.chart('chart-year-data-second', {

         chart: {
             type: 'column'
         },

         title: {
             text: 'Estimated Number of Infection',
              style: {
                   fontSize: '16px',
               }
         },

         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'middle',
         },

         xAxis: {
             categories: ['2013', '2014', '2015', '2016']
         },

         yAxis: {
             allowDecimals: false,
             min: 0,
             title: {
                 text: 'Infected',
            },
            stackLabels: {
               enabled: true,
          },
         },

         tooltip: {
             formatter: function () {
                 return '<b>' + this.x + '</b><br/>'
                     +  this.y + '<br/>';
             }
         },

         plotOptions: {
             column: {
                 stacking: 'normal'
             }
         },

         series: [{
              name: 'Infected',
             data: [28865,26702, 25222, 22994],
         }]
     });
    Highcharts.chart('chart-year-data-third', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' Reported HIV Cases by Mode of Transmission in Nepal, 2010-2016 July ',
        style: {
                   fontSize: '16px',
               }
    },
    xAxis: {
        categories: ['2010' , '2011', '2012', '2013' ,'2014', '2015', '2016 (JanJuly)']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Unidentified',
        data: [0, 0, 0, 0,35,29,28]
    }, {
        name: 'Mother to child',
        data: [8.5, 9.2, 10, 11,0,0,0]
    }, {
        name: 'Blood or blood products',
        data: [0.5, 0.3, 1, 1,1,0.5,0]
    }, {
        name: 'Unsafe Injecting Behaviour',
        data: [6, 3, 4, 3,2,2,1.5]
    }
    , {
        name: 'Unsafe Sexual behaviour',
        data: [85, 87, 85, 85,62,65,67]
    }]
});

    Highcharts.chart('chart-year-data-fourth', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'HIV Testing and Yield Proportion, 2015',
        style: {
                   fontSize: '16px',
               }
    },
    xAxis: {
        categories: ['Far-Western', 'Mid-Western', 'Western', 'Central', 'Eastern']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Tested'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -25,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Tested For HIV',
        data: [36032,29289,37123,36491,25116]
    }, {
        name: 'HIV +ve',
        data: [216,117,371,694,226]
    }]
});
});
$(".age").on("click", function(){
     $(".year").removeClass("active");
     $(".gender").removeClass("active");
     $(".age").addClass("active");
       $(".row-all").html("<div class='col l6 col m12'><div class='section'><div id='chart-age-data-first' class='z-depth-5 chart'></div></div></div><div class='col l6 col m12'><div class='section'><div id='chart-age-data-second' class='z-depth-5 chart'></div></div></div><div class='col l12 col m12'><div class='section'><div id='chart-age-data-third' class='z-depth-5 chart'></div></div></div>");
       Highcharts.chart('chart-age-data-first', {
   chart: {
       backgroundColor:'white',
     style: {
       fontFamily: '\'Raleway\', sans-serif',
     },
     plotBorderColor: '#606063',
       type: 'column'
   },
   title: {
       text: 'HIV Population: Child(0-14)',
       style :{
   fontSize: '16px'
  },
   },
   xAxis: {
       categories: ['2010', '2011', '2012', '2013', '2014','2015'],
       labels:{
         style: {
              fontSize: '16px',
         },
       },
   },
   yAxis: {
       min: 0,
       title: {
           text: 'Total Infected',
           style: {
                fontSize: '16px'
           }
       },
       labels:{
         style:{
                   fontSize:'16px',
         },
       },
       stackLabels: {
           enabled: true,
           style: {
              fontSize: '16px',
               color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
           }
       }
   },
   legend: {
       align: 'right',
       x: -10,
       verticalAlign: 'top',
       y: 25,
       floating: true,
       backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
       borderColor: '#CCC',
       borderWidth: 1,
       shadow: false
   },
   tooltip: {
       headerFormat: '<b>{point.x}</b><br/>',
       pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
   },
   plotOptions: {
       column: {
           stacking: 'normal',
           dataLabels: {
               enabled: true,
               color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
           }
       }
   },
   series: [{
       name: 'Male',
       data: [1934,1952,1913,1851,1764,1653]
   }, {
       name: 'Female',
       data: [1834,1852,1815,1757,1675,1570]
   }]
    });

    Highcharts.chart('chart-age-data-second', {

chart: {
   backgroundColor:'white'
   ,
style: {
   fontFamily: '\'Raleway\', sans-serif'
},
plotBorderColor: '#606063',
  type: 'column'
},
title: {
  text: 'HIV Population: Child(15+)',
  style :{
   fontSize: '16px'
  },
},
xAxis: {
  categories: ['2010', '2011', '2012', '2013', '2014','2015'],
  labels:{
    style: {
         fontSize: '16px'
    },
  },
},
yAxis: {
  min: 0,
  title: {
      text: 'Total Infected',
      style: {
           fontSize: '16px'
      }
  },
  labels:{
    style:{
              fontSize:'16px',
    },
  },
  stackLabels: {
      enabled: true,
      style: {
         fontSize: '16px',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
  }
},
legend: {
  align: 'right',
  x: -10,
  verticalAlign: 'top',
  y: 25,
  floating: true,
  backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
  borderColor: '#CCC',
  borderWidth: 1,
  shadow: false
},
tooltip: {
  headerFormat: '<b>{point.x}</b><br/>',
  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
  column: {
      stacking: 'normal',
      dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
  }
},
series: [{
  name: 'Male',
   data: [16001,14989,14263,13754,13365,13116]
}, {
  name: 'Female',
  data: [34046,31495,29630,28280,27200,26410]
}]
});
    Highcharts.chart('chart-age-data-third', {

   chart: {
       type: 'column'
   },

   title: {
       text: 'Estimated HIV Infection, 2015'
   },

   xAxis: {
       categories: ['0-14', '15-24', '25-49', '50+']
   },

   yAxis: {
       allowDecimals: false,
       min: 0,
       title: {
           text: 'Number of Infection',
           style: {
               fontSize: '16px'
          }
      }
   },

   tooltip: {
       formatter: function () {
           return '<b>' + this.x + '</b><br/>' +
               this.series.name + ': ' + this.y + '<br/>' +
               'Total: ' + this.point.stackTotal;
       }
   },

   plotOptions: {
       column: {
           stacking: 'normal'
       }
   },

   series: [{
       name: 'Male',
       data: [815,875,16967,5792],
       stack: 'male'
   }, {
       name: 'Female',
       data: [774,905,11328,1941],
       stack: 'female'
   },
   {
       name: 'Transgender',
       data: [0,26,62,4],
       stack: 'transgender'
   }]
});
   });

$(".gender").addClass("active");
          $(".row-all").html("<div class='col l4 col m12'><div class='section'><div id='chart-gender-data-first' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-second' class='z-depth-5 chart'></div></div></div><div class='col l4 col m12'><div class='section'><div id='chart-gender-data-third' class='z-depth-5 chart'></div></div></div>");
          Highcharts.chart('chart-gender-data-first', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Distribution of Reported HIV Cases 2015'
     },
     xAxis: {
          categories: ['FWDR', 'MWDR', 'WDR', 'CDR', 'EDR'],
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Total Infected'
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
              }
          }
     },
     legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
     },
     tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
     },
     plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: false,
                  color: 'white'
              }
          }
     },
     series: [{
          name: 'Male',
          data: [1391, 739, 1975, 3351, 1078]
     }, {
          name: 'Female',
          data: [1171,580,1468,2073,665]
     }, {
          name: 'Transgender',
          data: [6,5,6,36,17]
     }]
 });


       Highcharts.chart('chart-gender-data-second', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Intervention-Male Labour Migrants'
     },
     xAxis: {
          categories: [
              '070/071',
              '071/072',
              '072/073'
          ],
          crosshair: true
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Number'
          }
     },
     tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
     },
     plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
     },
     series: [{
          name: 'Condom Distributed',
          data: [2991704,1340286,1578039]

     }, {
          name: 'HIV Tested And Counseled',
          data: [42679,40623,103667]

     }]
 });

       Highcharts.chart('chart-gender-data-third', {
     chart: {
          type: 'column'
     },
     title: {
          text: 'Intervention-Female Sex Workers'
     },
     xAxis: {
          categories: [
              '070/071',
              '071/072',
              '072/073'
          ],
          crosshair: true
     },
     yAxis: {
          min: 0,
          title: {
              text: 'Number'
          }
     },
     tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
     },
     plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
     },
     series: [{
          name: 'Condom Distributed',
          data: [3434421,4712296,4204696]

     }, {
          name: 'HIV Tested And Counseled',
          data: [9970,10006,9765]

     }]
 });
       Highcharts.chart('chart-cure-data-first', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'ART on basis of Gender , 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    fontSize: '12px'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 52.4
        }, {
            name: 'Female',
            y: 47.3,
            sliced: true,
            selected: true
        }, {
            name: 'Transgender',
            y: 0.25
        }]
    }]
});

Highcharts.chart('chart-cure-data-second', {
              chart: {
                  type: 'column'
              },
              title: {
                  text: 'Treatment Cascade'
              },
              xAxis: {
                  categories: ['Esimated Number of PLHIV', 'Number of Alive PLHIV', 'Linked To HIV care', 'PLHIV Received ART']
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: 'Number Of People'
                  },
                  stackLabels: {
                      enabled: true,
                      style: {
                          fontWeight: 'bold',
                          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                      }
                  }
              },
              legend: {
                  align: 'right',
                  x: -30,
                  verticalAlign: 'top',
                  y: 25,
                  floating: true,
                  backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                  borderColor: '#CCC',
                  borderWidth: 1,
                  shadow: false
              },
              tooltip: {
                  headerFormat: '<b>{point.x}</b><br/>',
              },
              plotOptions: {
                  column: {
                      stacking: 'normal',
                      dataLabels: {
                          enabled: false,
                          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                      }
                  }
              },
              series: [{
                    name: 'Records',
                  data: [39397,22267, 20307, 11922]
              }]
          });

Highcharts.chart('chart-cure-data-third', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'PMTCT Statistics 2016'
    },
    xAxis: {
        categories: ['Hiv Pregnant Woman', 'Delievires', 'Mother Received ART', 'Baby Received Prophylaxis']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number Of People'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Record',
        data: [105, 77, 101, 74]
    }]
});

Highcharts.chart('chart-track-data', {

    title: {
        text: 'Trend of New infection and  Death (2000-2020) '
    },



    yAxis: {
        title: {
            text: 'Numbers'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2000
        }
    },

    series: [{
        name: 'New Infection',
        data: [9661,10328,10097,9168,7766,6227,4805,3718,2813,2078,1751,1437,1088,825,662,534,500,480,460,450,400]
    }, {
        name: 'Death',
        data: [500,800,1200,1300,1500,1550,1600,1650,1700,1751,1900,2000,2000,1900,1800,1800,1500,1000,460,350,250]
    }]
});
  });
