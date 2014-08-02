var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()

$(function () {
        $('#container').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: "Precio de la electricidad para el día " + day + "/" + month + "/" + year
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
            },
            yAxis: {
                title: {
                    text: 'Precio en Euros'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
    
            series: [{
                type: 'area',
                name: 'Tarifa (€/kWh): ',
                data: [
                    0.11621, 0.11069, 0.11134, 0.11375, 0.11511, 0.11477, 0.11713, 0.11671, 0.12329, 0.12993, 0.12876, 0.13053, 0.13029, 0.12943, 0.12486, 0.12243, 0.12663, 0.12809, 0.12834, 0.12693, 0.12620, 0.12659, 0.12758, 0.12102,
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
    

