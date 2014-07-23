$(function () {
        $('#container2').highcharts({
            title: {
                text: 'Tarifa electrica por horas del día Martes 15 de Julio de 2014',
                x: -20 //center
            },
            subtitle: {
                text: 'Comparación con otras tarifas y mercados',
                x: -20
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24' ]
            },
            yAxis: {
                title: {
                    text: 'FEU €/Kwh consumo'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '€/Kwh'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '(PVPC) GENERAL 2.0 A',
                data: [0.120, 0.113, 0.110, 0.113,0.115, 0.118,0.119, 0.118,0.120, 0.123,0.125, 0.123,0.124, 0.133,0.122, 0.123,0.120, 0.122,0.118, 0.119, 0.122, 0.120, 0.122,0.118, 0.119]
            }, {
                name: '(PVPC) NOCTURNA 2.0 DHA',
                data: [0.060, 0.061, 0.055, 0.058, 0.062,0.059,0.060, 0.061, 0.065, 0.068, 0.072,0.079,0.150,0.152,0.151,0.158,0.152,0.152,0.151,0.158,0.152,0.152,0.151,0.148,0.072,]
            }, {
                name: '(PVPC) ANALOGICO',
                data: [0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129,0.129]
            }, {
                name: 'Mercado Libre',
                data: []
            }]
        });
    });