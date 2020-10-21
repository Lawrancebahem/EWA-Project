import {Injectable, Injector, NgZone} from '@angular/core';
import {Router} from "@angular/router";
import * as annyang from 'annyang';

@Injectable({
    providedIn: 'root'
})
export class SpeechServiceService {

    public title = 'angularSpeechRecognition';
    public phrases = [];
    public languages: string [] = ['nl-NL']
    public isListening = false;
    // commands = {
    //   'home pagina': this.getHomePage(),
    //   'activitetien pagina': this.getActivitiesPage(),
    // };

    constructor(private ngZone: NgZone, private router: Router, private injector: Injector) {
    }


  /**
   * When clicking on the mic, fire up this method
   */
  public listen() {
        this.isListening = true;
        annyang.addCallback('result', phrases => {
            this.printUsersSaying(phrases);
        });
        annyang.start();
    }

  /**
   * Once the user stop talking stop listening and give the said phrases back
   * @param whatTheUserHasSaid
   * @private
   */
    private printUsersSaying(whatTheUserHasSaid: string[]) {
        this.isListening = false;
        this.ngZone.run(() => {
            this.phrases = whatTheUserHasSaid;
        });
        let command = this.checkPhrase(this.phrases);
        console.log('I think the user said: ' + command);

        this.reactOnSpeech(command)
        annyang.abort();

    }


    /**
     * loop through the letters and check if there is a word among that refers to do something
     * @param array
     * @private
     */
    private checkPhrase(array: string []): string {
        for (let i = 0; i < array.length; i++) {
            let word = array[i];
            let foundWord = "";
            if (word.indexOf(" ") > -1) {
                let arrayOfWords = word.split(" ");
                for (let j = 0; arrayOfWords.length; j++) {
                    foundWord = this.checkWordsInSentence(arrayOfWords[j]);
                    if (foundWord !== "") {
                        return foundWord;
                    }
                }
            }else {
              foundWord = this.checkWordsInSentence(word);
              if (foundWord !== "") {
                return foundWord;
              }
            }
        }
        return "";
    }


  /**
   * if a certain index of the returned array consists of more than one word,
   * then we need to loop through the characters of that
   * word to check if these characters kind of a command
   * @param word
   * @private
   */
    private checkWordsInSentence(word: string) {
        let letters = "";
        let foundWord = "";
        for (let j = 0; j < word.length; j++) {
            letters += word[j];
            foundWord = this.isWordACommand(letters);
            if (foundWord !== "") {
                return foundWord;
            }
        }
        return "";
    }

    /**
     * To check if a certain word a command of the user
     * @param text
     * @private
     */
    private isWordACommand(text: string): string {
        if (text === 'homepagina' || text === 'home') {
          return "home";
        } else if (text.toLowerCase() === 'activiteiten pagina' || text === 'activiteiten') {
            return "activiteiten"
        } else if (text === "registratiepagina" || text === "registratie") {
            return "registratie"
        } else if (text.toLowerCase() === "loginpagina" || text === "login") {
            return "login"
        } else if (text.toLowerCase() === "zwart") {
            return "zwart"
        } else if (text.toLowerCase() === "rood") {
            return "rood"
        } else if (text.toLowerCase() === "groen") {
            return "groen"
        } else if (text.toLowerCase() === "geel") {
            return "geel"
        } else if (text.toLowerCase() === "blauw") {
            return "blauw"
        } else {
            return "";
        }
    }

    /**
     * To switch between the page depending on what the user said
     * @param text
     * @private
     */
    private reactOnSpeech(text: string) {
        const routerService = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);
        if (text === 'homepagina' || text === 'home') {

            ngZone.run(() => {
                routerService.navigate(['/home']);
            });
        } else if (text === 'activiteiten pagina' || text === 'activiteiten') {
            ngZone.run(() => {
                routerService.navigate(['/activities']);
            });
        } else if (text === "registratiepagina" || text === "registratie") {

            ngZone.run(() => {
                routerService.navigate(['/register']);
            });
        } else if (text === "loginpagina" || text === "login") {
            ngZone.run(() => {
                // routerService.navigate(['/login'], { skipLocationChange: true });
                routerService.navigate(['/login']);
            });
        } else if (text === "zwart") {
            document.documentElement.style.setProperty('--color-default', 'black');
        } else if (text === "rood") {
            document.documentElement.style.setProperty('--color-default', 'red');
        } else if (text === "groen") {
            document.documentElement.style.setProperty('--color-default', 'green');
        } else if (text === "geel") {
            document.documentElement.style.setProperty('--color-default', 'yellow');
        } else if (text === "blauw") {
            document.documentElement.style.setProperty('--color-default', 'blue');
        }
    }
}
