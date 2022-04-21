import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publisher } from '../model/publisher';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-elem1',
  templateUrl: './elem1.component.html',
  styleUrls: ['./elem1.component.css'],
  providers: [MasterService]
})
export class Elem1Component implements OnInit {
    id! : string;
    formAddEdit!: FormGroup;
  
    constructor(private formBuild: FormBuilder,
       private masterService: MasterService, 
      private ruter:Router, 
      private activateRoute:ActivatedRoute){
        this.formAddEdit = this.formBuild.group({
          'publisherId' : [null],
          'publishName' : [null],
        })
      }

      
    confirm(): void {
      let publish = new Publisher();
      publish.publisherId = this.formAddEdit.controls['publisherId'].value;
      publish.publishName = this.formAddEdit.controls['publishName'].value;
      console.log("tesss")
      console.log(this.formAddEdit.controls['publisherId'].value+" : "+
      this.formAddEdit.controls['publishName'].value)
      this.masterService.savePublisher(publish).subscribe({
        next: hasil =>{
          alert(hasil.pesan);
        },error: salah =>{
          alert(salah.error)
        }
        })
        }
    

        ngOnInit(): void{
          this.activateRoute.params.subscribe(param => {
            this.id = param['id']
            if(this.id){
              this.masterService.getPublisher(parseInt(this.id))
              .subscribe({
                next: value =>{
                  this.formAddEdit.controls["publisherID"].setValue(value.publisherId)
                  this.formAddEdit.controls["publisherName"].setValue(value.publisherName)
                }
              })
            }
          })
        }
      }
