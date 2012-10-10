	if (!window.impressStarted) {
		startImpress(document, window);
		impress().init();
		console().init();
	    console().open();
	}

	$(document).ready(function() {
        $(document).on('impress:stepenter', function(e) {
            var currentSlide = $(e.target).attr('id');
            
            if (($(e.target).attr('class')).indexOf("heigher_opacity") > -1) {
            	$(".heigher_opacity").css("opacity", 0.8);
            }
            
            if (currentSlide === 'reality') {
                drawRealityChart();
            } else if (currentSlide === 'challenge') {
                drawChallengeChart();
            }
        });

        $(document).on('impress:stepenter', function(e) {
            if (("" + $(e.target).attr('class')).indexOf("bigger_opacity") == -1) {
            	//$(".impress-enabled .step").css("opacity", 0.3);
            }
        });
        
        $(document).bind('keyup',function(e){
            if (e.keyCode==77) {
            	$("#manual-testing").animate({opacity:'toggle'});
            }
        })
    });

function drawRealityChart()
{
	// Build the chart
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
	floating: true,
            text: ''
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
        	percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
		formatter: function() {return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';},
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Dev process',
            data: [
                ['Scrum rituals',       20.0],
                ['Development',       50.0],
                ['Manual testing',   15.0],
                ['Integration & Manual deployment',       15.0],
            ]
        }]
    });
}

function drawChallengeChart() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
	floating: true,
            text: ''
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
        	percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
		formatter: function() {return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';},
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Dev process',
            data: [
                ['Scrum rituals',       20.0],
                ['Development',       70.0],
                ['Integration, Testing, Deployment',       10.0],
            ]
        }]
    });	
}