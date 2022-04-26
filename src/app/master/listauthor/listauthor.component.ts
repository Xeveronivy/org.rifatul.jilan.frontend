import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import { MasterService } from 'src/app/services/master.service';


@Component({
  selector: 'app-listauthor',
  templateUrl: './listauthor.component.html',
  styleUrls: ['./listauthor.component.css'],
  providers: [MasterService]
})
export class ListauthorComponent implements OnInit {

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
