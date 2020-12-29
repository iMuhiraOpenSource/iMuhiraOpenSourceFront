import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  mailAdress = '';
  name = '';
  complementaryInformation = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Submits the form.
   * @author fnsanzabandi
   */
  submit() {
    console.log("Form submitted");
    console.log("Mail adress = " + this.mailAdress);
    console.log("Name = " + this.name);
    console.log("Complementary information = " + this.complementaryInformation);
    alert("Thank you for your interest in our activity. We will come back to you very soon.");
    this.router.navigate(['home']);
  }

}
