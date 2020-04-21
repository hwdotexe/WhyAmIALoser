import { Component, OnInit } from '@angular/core';
import { ReasonGenService } from '../services/reason-gen.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayReason: {
    text: string,
    user: string
  };

  buttonLabels: string[];
  againBtnTxt: string;

  constructor(private reasons: ReasonGenService) {
    this.buttonLabels = ["AGAIN", "C'mon, I can take it!", "Have at me!", "That all you got?", "Hit me with your best shot!", "Tell me again", "Get another", "Tis but a scratch!"];
    this.refreshReason();
    this.againBtnTxt = "Start";
  }

  ngOnInit() {
  }

  refreshReason(){
    this.displayReason = this.reasons.getNewReason();

    // Update button text
    var pos = Math.floor(Math.random()*this.buttonLabels.length);
    this.againBtnTxt = this.buttonLabels[pos];
  }
}
