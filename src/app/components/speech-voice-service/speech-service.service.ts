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
    public introduced = false;
    private synthesis = window.speechSynthesis;
    private utterance = new SpeechSynthesisUtterance("Dagje uit");

    // commands = {
    //   'home pagina': this.getHomePage(),
    //   'activitetien pagina': this.getActivitiesPage(),
    // };
    private previousMessage: string;

    constructor(private ngZone: NgZone, private router: Router, private injector: Injector) {
        this.utterance.lang = 'nl-NL';
        if (!this.introduced) {
            this.speak("Hello mijn naam is dagje uit, om te navigeren in de applicatie of om de kleuren " +
                "te wijzigen, kunt u gebruik maken van de spraak functie links bovenin")
            this.introduced = true;
        }
    }


    /**
     * When clicking on the mic, fire up this method
     */
    public startListening() {
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
        if (command !== "") {
            this.reactOnSpeech(command)
            annyang.abort();
        }
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
            if (word.length > 0 && word.indexOf(" ") > -1) {
                let arrayOfWords = word.split(" ");
                for (let j = 0; arrayOfWords.length; j++) {
                    foundWord = this.checkWordsInSentence(arrayOfWords[j]);
                    if (foundWord !== "") {
                        return foundWord;
                    }
                }
            } else {
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
        try {
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
        } catch (err) {

        }
    }

    /**
     * To check if a certain word a command of the user
     * @param text
     * @private
     */
    private isWordACommand(text: string): string {
        if (text === 'homepagina' || text === 'home') {
            return "home";
        } else if (text.toLowerCase() === 'activiteiten pagina' || text.toLowerCase() === 'activiteiten') {
            return "activiteiten"
        } else if (text === "registratiepagina" || text.toLowerCase() === "registratie") {
            return "registratie"
        } else if (text.toLowerCase() === "loginpagina" || text.toLowerCase() === "login" || text.toLowerCase() === "inlog") {
            return "login"
        } else if (text.toLowerCase() === "zwart") {
            return "zwart"
        } else if (text.toLowerCase() === "rood" || text.toLowerCase() === "rode") {
            return "rood"
        } else if (text.toLowerCase() === "groen") {
            return "groen"
        } else if (text.toLowerCase() === "geel" || text.toLowerCase() === "gele") {
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
            this.speak("U bent op de homepagina")
            ngZone.run(() => {
                routerService.navigate(['/home']);
            });

        } else if (text === 'activiteiten pagina' || text === 'activiteiten') {
            this.speak("U bent op de activitetienpagina")
            ngZone.run(() => {
                routerService.navigate(['/activities']);
            });

        } else if (text === "registratiepagina" || text === "registratie") {
            this.speak("U bent op de registratiepagina")
            ngZone.run(() => {
                routerService.navigate(['/register']);
            });
        } else if (text === "loginpagina" || text === "login") {
            this.speak("U bent op de login pagina")
            ngZone.run(() => {
                // routerService.navigate(['/login'], { skipLocationChange: true });
                routerService.navigate(['/login']);
            });

        } else if (text === "zwart") {
            document.documentElement.style.setProperty('--color-default', 'black');
            this.speak("De kleur zwart is geactiveerd")
        } else if (text === "rood") {
            document.documentElement.style.setProperty('--color-default', 'red');
            this.speak("De kleur rood is geactiveerd")
        } else if (text === "groen") {
            document.documentElement.style.setProperty('--color-default', 'green');
            this.speak("De kleur groen is geactiveerd")
        } else if (text === "geel") {
            document.documentElement.style.setProperty('--color-default', 'yellow');
            this.speak("De kleur geel is geactiveerd")
        } else if (text === "blauw") {
            document.documentElement.style.setProperty('--color-default', 'blue');
            this.speak("De kleur blauw is geactiveerd")
        } else {
            this.speak("Ik begrijp niet helemaal wat u bedoelt")
        }
    }

    /**
     * To say something to the user based on the message
     * @param message
     */
    public speak(message: string) {
        if (message === this.previousMessage) return;
        // const englishLanguage = "'en-US'";
        this.utterance.text = message;
        this.previousMessage = message;
        this.synthesis.speak(this.utterance);
        // this.synthesis.cancel();
    }
}
