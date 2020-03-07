import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  type = 0;
  title = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(p => {
      this.type = +p.get('type');
    });
    this.route.data.subscribe(q => {
      this.title = q['title'];
    });
  }

  plusOne() {
    // this.type = this.type + 1;
    this.router.navigate(['/charts'], {
      queryParams: {
        type: this.type + 1
      }
    });
  }


}
