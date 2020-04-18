import { Component, OnInit } from '@angular/core';
import { ReasonGenService } from '../services/reason-gen.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayReason: string;

  constructor(private reasons: ReasonGenService) {
    this.refreshReason();
  }

  ngOnInit() {
  }

  refreshReason(){
    this.displayReason = this.reasons.getNewReason();
  }
}
