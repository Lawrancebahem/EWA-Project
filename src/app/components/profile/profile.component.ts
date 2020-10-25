import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public editMyInterestsIsClicked = false;
    public myInterestsText = "Mijn interesses";
    public buttonInterestsText = "Wijzig mijn interesses"
    public hasChanged:boolean= false;

    constructor() {
    }

    ngOnInit(): void {
    }

    editMyInterests() {
        this.editMyInterestsIsClicked = !this.editMyInterestsIsClicked;
        if (this.editMyInterestsIsClicked){
          this.myInterestsText = "Selecteer interesses";
          this.buttonInterestsText = "Interesses opslaan"
        }else {
          this.myInterestsText = "Mijn interesses";
        this.buttonInterestsText = "Wijzig mijn interesses"
        }

    }
}
