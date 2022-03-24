import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/thread'
import { DashboardService } from '../services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    threads= [];
    finalData=[];
    constructor(private dashboardService: DashboardService) {
        this.threads = []
    }

    ngOnInit() {
        this.getThreads();
    }

    getThreads(): void {
        this.dashboardService.getThreads().subscribe(res => {
            this.threads = res.data.children;
            this.threads.map(res =>{
                this.finalData.push(res['data'])
            })
            console.log(this.finalData);
            
        })
    }

    

}
