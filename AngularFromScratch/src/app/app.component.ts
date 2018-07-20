import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    apiValues: string[] = [];
    constructor(private _servce:Http) {

    }
    ngOnInit() {
        this._servce.get("/api/values").subscribe(result => {
            this.apiValues = result.json() as string[];
        })
    }
}
