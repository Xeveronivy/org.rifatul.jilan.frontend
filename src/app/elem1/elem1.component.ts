import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
    constructor(private formaBuild: FormBuilder,
       private masterService: MasterService, 
      private ruter:Router, 
      private activateRouter:ActivatedRoute){
        this.formAddEdit = this.formaBuild.group({
          'publisherId' : new FormControl(null,[Validators.required, Validators.min(1000)]) ,
          'publishName' :  new FormControl(null,[Validators.required, Validators.minLength(1000)]) ,
        })
      }

      
    confirm(): void {

      if(this.formAddEdit.valid){
      let publish = new Publisher();
      publish.publisherId = this.formAddEdit.controls['publisherId'].value;
      publish.publishName = this.formAddEdit.controls['publishName'].value;
      console.log("tesss")
      console.log(this.formAddEdit.controls['publisherId'].value+" : "+
      this.formAddEdit.controls['publishName'].value)
      this.masterService.savePublisher(publish).subscribe({
        next: hasil=>{
          alert(hasil.pesan);
        },error: salah =>{
          alert(salah.error)
        }
        })
        }else{
          alert("Form Wajib Dilenkapi")
        }
      }
    

        ngOnInit(): void{
          this.activateRouter.params.subscribe(param => {
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
