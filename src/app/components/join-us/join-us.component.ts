import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as fs from 'fs';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  mailAdress = '';
  name = '';
  complementaryInformation = '';
  dbObject = {
    table: []
  };

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
    this.saveApplicant();
    alert(this.translateService.instant('join.us.submission.alert'));
    this.router.navigate(['home']);
  }

  saveApplicant() {

    this.dbObject.table.push(
      {
        mailAdress: this.mailAdress,
        name: this.name,
        complementaryInformation: this.complementaryInformation
      }
    );

    var json = JSON.stringify(this.dbObject);

    /* Write file to disk
    https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
    https://stackoverflow.com/questions/43048113/use-fs-in-typescript/43048371
    ''../assets/files/db.json' */

    /*
      fs.readFile(
      '../assets/files/db.json',
      'utf8',
      function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
      }
    );

    //fs.writeFile('../assets/files/db.json', json, 'utf8');

    //fs.writeFile('../assets/files/db.json', json, null);

    fs.readFile('../assets/files/db.json', 'utf8', (error, data) => {
      // ...
    })*/

    fs.readFileSync('foo.txt', 'utf8');
  }


}
