import { Component, OnInit } from '@angular/core';
import { Reason } from 'src/app/models/Reason';
import { ReasonService } from '../../services/reason-service/reason.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayReason: Reason;

  againBtnTxt = "Start";
  hasStarted = false;
  buttonLabels = ["AGAIN", "C'mon, I can take it!", "Have at me!", "That all you got?", "Hit me with your best shot!", "Tell me again", "Get another", "Tis but a scratch!"]

  constructor(private reasonService: ReasonService) {}

  ngOnInit() {
  }

  refreshReason(){
    this.hasStarted = true;
    this.displayReason = this.reasonService.getNewReason();

    // Update button text.
    var pos = Math.floor(Math.random() * this.buttonLabels.length);
    this.againBtnTxt = this.buttonLabels[pos];
  }
}
