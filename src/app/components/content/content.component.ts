import { Component } from '@angular/core';
import { Reason } from 'src/app/models/Reason';
import { ReasonService } from 'src/app/services/reason-service/reason.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  displayReason?: Reason;
  hasStarted = false;

  constructor(private reasonService: ReasonService) {}

  refreshReason() {
    this.hasStarted = true;
    this.displayReason = this.reasonService.getNewReason();
  }
}
