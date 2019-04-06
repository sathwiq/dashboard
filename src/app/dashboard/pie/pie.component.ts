import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements AfterViewInit, OnInit {
  PieChart: Chart = [];
  h;
  ngOnInit() {
    this.h = [9, 7, 3, 5, 2, 10];
  }
  ngAfterViewInit() {
    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['java', 'c', 'c++', 'Node js', 'Angular', 'Vuejs'],
        datasets: [
          {
            label: '# of Votes',
            data: [9, 7, 3, 5, 2, 10],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)'
            ],
            borderColor: [
              'rgb(255,99,13)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          text: 'Attendence',
          display: true
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false // this will remove only the label
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false // this will remove only the label
              }
            }
          ]
        }
      }
    });
  }
}
