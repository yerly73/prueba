import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public chart: Chart;

  ngOnInit(): void {

    // datos
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'line' as ChartType, // tipo de la gráfica 
      data // datos 
    })

  }
}
