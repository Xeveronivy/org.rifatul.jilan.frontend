import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../model/author';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-elem1',
  templateUrl: './elem2.component.html',
  styleUrls: ['./elem2.component.css'],
  providers: [MasterService]
})
export class Elem2Component implements OnInit {
    id! : string;
    formAddEdit!: FormGroup;
  
    constructor(private formaBuild: FormBuilder,
       private masterService: MasterService, 
      private ruter:Router, 
      private activateRouter:ActivatedRoute){
        this.formAddEdit = this.formaBuild.group({
          'authorId' : new FormControl(null,[Validators.required, Validators.min(1000)]) ,
          'authorName' :  new FormControl(null,[Validators.required, Validators.minLength(1000)]) ,
        })
      }

      
    confirm(): void {

      if(this.formAddEdit.valid){
      let author = new Author();
      author.authorId = this.formAddEdit.controls['authorId'].value;
      author.authorName = this.formAddEdit.controls['authorName'].value;
      console.log("tesss")
      console.log(this.formAddEdit.controls['authorId'].value+" : "+
      this.formAddEdit.controls['authorName'].value)
      this.masterService.saveAuthor(author).subscribe({
        next: hasil=>{
          alert(hasil.pesan);
        },error: salah =>{
          alert(salah.error)
        }
        })
        }else{
          alert("Form Wajib Dilengkapi")
        }
      }
    

        ngOnInit(): void{
          this.activateRouter.params.subscribe(param => {
            this.id = param['id']
            if(this.id){
              this.masterService.getAuthor(parseInt(this.id))
              .subscribe({
                next: value =>{
                  this.formAddEdit.controls["authorID"].setValue(value.authorId)
                  this.formAddEdit.controls["authorName"].setValue(value.authorName)
                }
              })
            }
          })
        }
      }