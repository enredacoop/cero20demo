$(function () {
Highcharts.setOptions({
     colors: ['#3c9a5f','#008cba', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });
    $(document).ready(function () {

        // Build the chart
        $('#container1').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumo activo y en reposo en aparatos principales Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                    ['Consumo en reposo ahorrado',    276.6],
                    ['Consumo en activo',   518.3],
                    ['Consumo en reposo mantenido',       184.4]
                   
                
                ]
            }]
        });
// Build the chart
        $('#container2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumo por iluminación Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                    ['Consumo ahorrado por Led',     213,16],
                    ['Consumo eficiente en iluminación',337,9899]
                    
                
                ]
            }]
        });

// Build the chart
        $('#container3').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumo por televisores Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                    ['Consumo ahorrado',  251,424166],
                    ['Consumo eficiente',194,605]
                    
                
                ]
            }]
        });

// Build the chart
        $('#container4').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumos ordenadores Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                    ['Consumo ahorrado',    60,2250],
                    ['Consumo eficiente',473,04]
                    
                
                ]
            }]
        });

// Build the chart
        $('#container5').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumo actual Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                    ['Cocina',321,4],
                    ['Lavadora',    304,98],
                    ['Lavavajillas',     480,48],
                    ['Frigorífico',     293,3333] 
                ]
            }]
        });

// Build the chart

        $('#container6').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Consumo eficiente Kwh/año'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Consumos',
                data: [
                     ['Consumo ahorrado',   673,855716198126],
                     ['Cocina',236,6],
                    ['Lavadora', 132,977777777778],
                      ['Lavavajillas', 246,75983935743],
                    ['Frigorífico',  110] 
                ]
            }]
        });
    });

});