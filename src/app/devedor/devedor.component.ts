import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Devedor } from '../models/devedor.model';
import { DevedorService } from '../services/devedor/devedor.service';

@Component({
  selector: 'app-devedor',
  templateUrl: './devedor.component.html',
  styleUrls: ['./devedor.component.css']
})
export class DevedorComponent implements OnInit {

  public listDevedores: Devedor[] = []


  constructor(
    public formBuilder: FormBuilder,
    public devedorService: DevedorService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  public getAll(): void {
    this.devedorService.getAllDevedor().subscribe(
      (success: any) => {
        this.listDevedores = success.Data
      },
      error => {
        this.listDevedores = []
        if(error && error.status == 403) {
          console.log(error.body)
        } else { // erro 500 ou outros ...
          console.log(error.body)
        }

        const notifications = error.error.Notifications;
        for(let i = 0; i < notifications?.length; i++){
          console.log(notifications[i].Value)
        }

      }
    )
  }

}
