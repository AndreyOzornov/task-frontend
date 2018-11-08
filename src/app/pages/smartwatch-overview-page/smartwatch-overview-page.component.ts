import {Component, OnInit} from '@angular/core';
import {SmartwatchService} from '../../services/smartwatch.service';
import {Smartwatch} from '../../models/smartwatch';

@Component({
  selector: 'smartwatches',
  templateUrl: './smartwatch-overview-page.component.html',
  providers: [SmartwatchService]
})

export class SmartwatchOverviewPageComponent implements OnInit {
  smartwatches: Smartwatch[];
  title = 'Smartwatches';
  display: Smartwatch[];
  itemsPerPage = 15;
  page = 1;
  deleteSmartwatchNo = -1;

  constructor(private smartwatchService: SmartwatchService) {
  }

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    this.smartwatchService.getSmartwatches().subscribe((smartwatches: Smartwatch[]) => {
      this.smartwatches = smartwatches;
      this.generateDisplay();
    });
  }

  generateDisplay() {
    const base = (this.page - 1) * this.itemsPerPage;
    this.display = null;
    this.display = [];
    for (let i = base; i < (base + this.itemsPerPage); i++) {
      if (this.smartwatches[i] !== undefined) {
        this.display.push(this.smartwatches[i]);
      }
    }
  }

}
