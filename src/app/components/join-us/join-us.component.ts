import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  mailAdress = '';
  name = '';
  complementaryInformation = '';

  constructor(private router: Router, private translateService: TranslateService) { }

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
    alert(this.translateService.instant('join.us.submission.alert'));
    this.router.navigate(['home']);
  }

}
