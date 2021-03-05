import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //sends cancel buttion click to the parent component
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error); 
      //displays an error message.
      this.toastr.error(error.error);    
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
