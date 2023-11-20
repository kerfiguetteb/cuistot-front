import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {
 
  @Input()
  message!: boolean

  public closeMessage(): void{
    this.message = false
  }


}
