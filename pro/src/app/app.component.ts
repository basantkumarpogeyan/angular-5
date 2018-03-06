import { Component } from '@angular/core'; 
import { MyServicesService } from './my-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 products: any;
 constructor(private serv: MyServicesService) {
    serv.get().subscribe((success, error) => if (success) {
		console.log(success);
	} else {
		console.log(error);
	});
  }
  
 title = ""
 public cards: Array<any> = [
    {name: 'Basant Kumar', address: 'Dadpur', pinCode: '825406'},
    {name: 'Sumit Kumar', address: 'Pathalgadda', pinCode: '825415'},
    {name: 'Rahul Kumar', address: 'Saharjaam', pinCode: '825408'}
  ];
  addNewCard(text: String) {
    this.cards.push({
        name : text,
        address: "Shibala",
        pinCode: "645322"
    });
  }
}
