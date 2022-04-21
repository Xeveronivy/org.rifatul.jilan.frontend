import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/model/publisher';
import { MasterService } from 'src/app/services/master.service';
import { Author } from 'src/app/model/author';

@Component({
  selector: 'app-listpublisher',
  templateUrl: './listpublisher.component.html',
  styleUrls: ['./listpublisher.component.css'],
  providers: [MasterService]
})
export class ListpublisherComponent implements OnInit {
  daftarPublisher!: Publisher[]
  daftarAuthor!: Author[]
  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.listAuthor().subscribe(
      {
        next: hasil => {
          this.daftarAuthor = hasil
        },
        error: err =>{
          console.log(err)
        }
      }
    )
  }

}
