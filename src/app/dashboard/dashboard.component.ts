import { Component, OnInit } from '@angular/core';
import { Envelopeitem } from '../envelopes/envelopeitem';
import { EnvelopesService } from '../services/envelopes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  envelopes: Envelopeitem[];
  error: any;

  constructor(private envelopeService: EnvelopesService) { }

  ngOnInit() {
    this.envelopeService.getEnvelopes().subscribe( envelopes => this.envelopes = envelopes )
  }

}
