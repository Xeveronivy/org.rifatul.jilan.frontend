import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/model/publisher';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-listpublisher',
  templateUrl: './listpublisher.component.html',
  styleUrls: ['./listpublisher.component.css'],
  providers: [MasterService]
})
export class ListpublisherComponent implements OnInit {
  daftarPublisher!: Publisher[]
  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.listPublisher().subscribe(
      {
        next: hasil => {
          this.daftarPublisher = hasil
        },
        error: err =>{
          console.log(err)
        }
      }
    )
  }

}
