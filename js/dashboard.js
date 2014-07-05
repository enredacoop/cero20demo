$(function () {
        $('#container').highcharts({
            title: {
                text: 'Informes generados',
                x: -20 //center
            },
            subtitle: {
                text: 'Gráfica de informes generados por usuarios ',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Usuarios'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' usuarios'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'IEI+',
                data: [70, 62, 93, 144, 184, 213, 253, 263, 233, 184, 134, 9]
            }, {
                name: 'INFO2',
                data: [50, 114, 174, 224, 243, 243, 203, 143, 83, 24]
            }, {
                name: 'INF3',
                data: [30, 84, 135, 175, 185, 175, 145, 96, 35, 16,43, 50]
            }, {
                name: 'No finalizados',
                data: [63, 23, 24, 29, 14, 15, 17, 23, 14, 19, 23, 25]
            }]
        });
    });