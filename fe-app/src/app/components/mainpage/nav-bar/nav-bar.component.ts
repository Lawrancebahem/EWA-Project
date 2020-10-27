import { Component, OnInit } from '@angular/core';
import {SpeechServiceService} from "../../speech-voice-service/speech-service.service";
import * as annyang from 'annyang';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    isLoggedIn: boolean;

  constructor(public speechService:SpeechServiceService) {

  }

  ngOnInit(): void {
    annyang.setLanguage(this.speechService.languages[0])



  }


}
