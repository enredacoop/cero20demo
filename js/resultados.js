$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
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
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Consumo Kw/año',
            data: [
                ['Consumo en activo',   58.0],
                ['Consumo en resposo mantenido',       26.8],
                ['Consumo en resposo ahorrado',    23.2]
            ]
        }]
    });
});
    
$(function () {
    $('#container2').highcharts({
        title: {
            text: 'Combinación de electrodomésticos'
        },
        xAxis: {
            categories: ['cocina', 'lavadora', 'lavavajillas', 'fígorífico', 'Televisión', 'Ordenador']
        },
        labels: {
            items: [{
                html: 'electrodomésticos',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Consumo eficiente',
            data: [3, 2, 1, 3, 4 , 6]
        }, {
            type: 'column',
            name: 'Consumo normal',
            data: [2, 3, 5, 7, 6, 7]
        }, {
            type: 'column',
            name: 'Consumo ahorrado',
            data: [4, 3, 3, 9, 0, 7]
        }, {
            type: 'spline',
            name: 'Media de consumo',
            data: [3, 2.67, 3, 6.33, 3.33, 3.32],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumo',
            data: [{
                name: 'Consumo eficiente',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Consumo normal',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Consumo ahorrado',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
    
    $(function () {
    $('#container3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
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
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Consumo Kw/año',
            data: [
                ['Consumo en activo',   58.0],
                ['Consumo en resposo mantenido',       26.8],
                ['Consumo en resposo ahorrado',    23.2]
            ]
        }]
    });
});
    
$(function () {
    $('#container4').highcharts({
        title: {
            text: 'Combinación de electrodomésticos'
        },
        xAxis: {
            categories: ['cocina', 'lavadora', 'lavavajillas', 'fígorífico', 'Televisión', 'Ordenador']
        },
        labels: {
            items: [{
                html: 'electrodomésticos',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Consumo eficiente',
            data: [1, 2, 1, 3, 4, 3]
        }, {
            type: 'column',
            name: 'Consumo normal',
            data: [1, 2, 5, 7, 6, 3]
        }, {
            type: 'column',
            name: 'Consumo ahorrado',
            data: [4, 3, 3, 9, 0, 4]
        }, {
            type: 'spline',
            name: 'Media de consumo',
            data: [3, 2.67, 3, 6.33, 3.33, 2],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumo',
            data: [{
                name: 'Consumo eficiente',
                y: 18,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Consumo normal',
                y: 18,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Consumo ahorrado',
                y: 21,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
    

