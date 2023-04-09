import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from 'src/app/core/ui/card/card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-third-part',
  standalone: true,
  imports: [CommonModule, SwiperModule, CardComponent, MatTabsModule, MatMenuModule, MatIconModule, MatButtonModule, NgChartsModule],
  templateUrl: './third-part.component.html',
  styleUrls: ['./third-part.component.scss']
})
export class ThirdPartComponent {
  data: any[] = [];
  selectedTab: any = {};


  // Doughnut
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {

      data: [41.6, 14.6, 14.6, 14.6, 14.6],
      backgroundColor: ['#22C55E', '#009877', '#8B5CF6', '#A5B4FC', '#009877'],
      borderRadius: 5,
      spacing: 3,

    }
  ];

  public doughnutChartOptions: ChartOptions = {
    responsive: false
  };

  constructor() {
    let givenDateTime = '2020-01-01';

    let createdDate = new Date(givenDateTime);
    createdDate.setDate(1);
    let currentDate = new Date();

    this.data = [{
      date: createdDate.toLocaleString('en', { month: 'short', year: 'numeric' }),
      items: [
        { title: 'Groceries', count: '13 Transactions', price: '1500', per: '41.6', color: '#22C55E' },
        { title: 'Restaurants & Cafes', count: '13 Transactions', price: '35', per: '14.6', color: '#009877' },
        { title: 'Auto & Transport', count: '13 Transactions', price: '35', per: '14.6', color: '#8B5CF6' },
        { title: 'Travel', count: '13 Transactions', price: '35', per: '14.6', color: '#A5B4FC' },
        { title: 'Travel', count: '13 Transactions', price: '35', per: '14.6', color: '#009877' }
      ]
    }];
    this.selectedTab = this.data[0];
    while (new Date(createdDate.setMonth(createdDate.getMonth() + 1)) < currentDate) {
      this.data.push({
        date: createdDate.toLocaleString('en', {
          month: 'short', year: 'numeric'
        }), items: [
          { title: 'Groceries', count: '13 Transactions', price: '1500', per: '41.6', color: '#22C55E' },
          { title: 'Restaurants & Cafes', count: '13 Transactions', price: '35', per: '14.6', color: '#009877' },
          { title: 'Auto & Transport', count: '13 Transactions', price: '35', per: '14.6', color: '#8B5CF6' },
          { title: 'Travel', count: '13 Transactions', price: '35', per: '14.6', color: '#A5B4FC' },
          { title: 'Travel', count: '13 Transactions', price: '35', per: '14.6', color: '#009877' }
        ]
      });
    }

  }
}
