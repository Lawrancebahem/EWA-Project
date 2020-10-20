import {Injectable, Injector, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as annyang from 'annyang';

@Injectable({
  providedIn: 'root'
})
export class SpeechServiceService {

  public title = 'angularSpeechRecognition';
  public phrases = [];
  public languages:string [] = ['nl-NL']
  public isListening = false;
  // commands = {
  //   'home pagina': this.getHomePage(),
  //   'activitetien pagina': this.getActivitiesPage(),
  // };

  constructor(private ngZone: NgZone, private router:Router, private injector:Injector) {}


  public listen(){
    this.isListening = true;
    annyang.addCallback('result', phrases => {
      this.printUsersSaying(phrases);
    });
    annyang.start();
  }

  private printUsersSaying(whatTheUserHasSaid: string[]) {
    this.isListening = false;
    this.ngZone.run(() => {
      this.phrases = whatTheUserHasSaid;
    });
    console.log('I think the user said: ', whatTheUserHasSaid[0]);

    this.reactOnSpeech(whatTheUserHasSaid[0])
    annyang.abort();

  }

  /**
   * To switch between the page depending on what the user said
   * @param text
   * @private
   */
  private reactOnSpeech(text:string){
    const routerService = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);
    if (text === 'homepagina' || text === 'home'){

      ngZone.run(() => {
        routerService.navigate(['/home']);
      });
    }else if (text === 'activiteiten pagina' || text === 'activiteiten'){
      ngZone.run(() => {
        routerService.navigate(['/activities']);
      });
    }else if (text === "registratiepagina" || text === "registratie"){

      ngZone.run(() => {
        routerService.navigate(['/register']);
      });
    }else if (text === "loginpagina" || text === "login"){
      ngZone.run(() => {
        // routerService.navigate(['/login'], { skipLocationChange: true });
        routerService.navigate(['/login']);
      });
    }else if (text === "zwart"){
      document.documentElement.style.setProperty('--color-default', 'black');
    }else if (text === "rood"){
      document.documentElement.style.setProperty('--color-default', 'red');
    }else if (text === "groen"){
      document.documentElement.style.setProperty('--color-default', 'green');
    }
    else if (text === "geel"){
      document.documentElement.style.setProperty('--color-default', 'yellow');
    } else if (text === "blauw"){
      document.documentElement.style.setProperty('--color-default', 'blue');
    }
  }
}
