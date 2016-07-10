$(function () {
    $('#trends').highcharts({
        title: {
            text: 'Hiring Trends in JavaScript Frameworks',
            align: 'center',
            style: { "fontSize": "22px" }
        },
        subtitle: {
            text: 'Data compiled by Ryan Williams from Hacker News Hiring Trends',
            align: 'center',
            style: { "fontSize": "15px" }

        },
        chart: {
            backgroundColor: '#FFFFB9',
            type: 'line'
        },
        xAxis: {
            categories: ['Dec 13', 'Jan 14', 'Feb 14', 'Mar 14', 'Apr 14', 'May 14', 'Jun 14', 'Jul 14', 'Aug 14', 'Sep 14', 'Oct 14', 'Nov 14', 'Dec 14',
                         'Dec 14', 'Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15', 'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15',
                         'Jan 16', 'Feb 16', 'Mar 16', 'Apr 16', 'May 16', 'Jun 16'],
             tickInterval: 4
        },
        yAxis: {
            title: {
                text: 'Percentage of Posts'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            borderWidth: 0,
            itemStyle: {
                fontSize: '14px'
            }
        },
        series: [{
            name: 'Angular',
            data: [12.93, 14.16, 10.39, 10.4, 10.9, 11.43, 10.67, 12.56, 14.71, 13.89, 13.3, 14.48,
                   15.01, 15.33, 13.69, 11.15, 11.21, 10.5, 12.13, 11.88, 9.88, 9.81, 10.96, 9.16,
                   10.81, 9.87, 8.85, 9.55, 9.29, 10.88, 7.72]
        }, {
            name: 'Backbone',
            data: [10.27, 8.41, 6.53, 7.8, 7.9, 5.48, 5.06, 9.07, 7.55, 7.64, 7.48, 8.47,
                   8.72, 6.97, 4.75, 4.54, 4.84, 4.46, 5.67, 4.33, 4.24, 4.77, 6.09, 4.25,
                   4.59, 3.54, 2.21, 3.23, 4.01, 2.12, 1.65]
        }, {
            name: 'Ember',
            data: [1.9, 1.77, 1.78, 1.73, 1.36, 0.95, 1.4, 1.86, 3.38, 2.08, 2.77, 3.28,
                   3.04, 3.83, 2.85, 1.7, 1.66, 2.16, 2.36, 2.44, 1.65, 1.91, 2.59, 1.73,
                   1.89, 1.77, 2.06, 1.26, 2.24, 1.69, 1.27]
        }, {
            name: 'React',
            data: [0, 0, 0.59, 1.16, 1.63, 1.19, 0.84, 1.16, 1.99, 2.78, 1.66, 2.46,
                   3.65, 2.09, 3.61, 5.1, 5.22, 7.63, 8.5, 7.33, 8.24, 9.4, 10.5, 10.23,
                   13.51, 13.67, 13.72, 14.33, 14.1, 15.54, 15.32]
        }]
    });
});