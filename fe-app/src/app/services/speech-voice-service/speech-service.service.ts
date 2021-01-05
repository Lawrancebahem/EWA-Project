import {Injectable, Injector, NgZone} from '@angular/core';
import {Router} from "@angular/router";
import * as annyang from 'annyang';

@Injectable({
    providedIn: 'root'
})

export class SpeechServiceService {

    public h1 = 50 ;
    public h2 = 30;
    public h4 =20 ;
    public p = 24;

    // colors = {'blauw': "blue", 'groen': "green", 'zwart': "black" , 'rood': "red", 'geel': "yellow",}
    public title = 'angularSpeechRecognition';
    public phrases = [];
    public languages: string [] = ['nl-NL']
    public isListening = false;
    public introduced = false;
    private synthesis = window.speechSynthesis;
    private utterance = new SpeechSynthesisUtterance("Dagje uit");
    private colorsDutch = ["zwart", "groen", "wit", "geel", "rood", "blauw"] // this is for the dutch speakers
    private colors = ["black", "green", "white", "yellow", "red", "blue"] // to apply the requested color in css
    private navigationsDutch = ['home', 'activiteiten', 'registratie', 'login', 'profiel',"matching", "mijn activiteiten", "alle activiteiten", "contact","over ons"]// navigations in Dutch
    private navigations = ['home', 'activityoverview', 'register', 'login', 'profile',"matching", "myAcitivities","activityOverview","contactUs", "aboutUs"] // navigations in English

    // commands = {
    //   'home pagina': this.getHomePage(),
    //   'activitetien pagina': this.getActivitiesPage(),
    // };
    private previousMessage: string;

    constructor(private ngZone: NgZone, private router: Router, private injector: Injector) {
        this.utterance.lang = 'nl-NL';
        if (!this.isAlreadyIntroduced()) {
            this.speak("Hello mijn naam is dagje uit, om te navigeren in de applicatie of om de kleuren " +
                "te wijzigen, kunt u gebruik maken van de spraak functie links bovenin")
            localStorage.setItem("introduced", "1");
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

    public abortListening(){
        annyang.abort();
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
        // console.log('I think the user said: ' + command);
        if (command !== "") {
            this.reactOnCommand(command)
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
                    foundWord = this.checkWordsInSentence(arrayOfWords[j], array);
                    if (foundWord !== "") {
                        return foundWord;
                    }
                }
            } else {
                foundWord = this.checkWordsInSentence(word, array);
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
     * @param arrayOfSentences
     * @private
     */
    private checkWordsInSentence(word: string, arrayOfSentences:string[]) {
        try {
            let letters = "";
            let foundWord = "";
            for (let j = 0; j < word.length; j++) {
                letters += word[j];
                foundWord = this.isWordACommand(letters, arrayOfSentences);
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
     * @param arrayOfSentences
     * @private
     */
    private isWordACommand(text: string , arrayOfSentences:string[] ): string {
        if (text === 'homepagina' || text === 'home') {
            return "home";
        } else if (text.toLowerCase() === 'activiteiten pagina' || text.toLowerCase() === 'activiteiten') {
            let foundCommand = arrayOfSentences.map((word)=>{
                if (word.indexOf("mijn") > -1 || word.indexOf("mijne") > -1){
                    return "mijn activiteiten";
                }else if (word.indexOf("alle") > -1 || word.indexOf("all") > -1){
                    return "alle activiteiten";
                }
            })
            return foundCommand[0];
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
        } else if (text.toLowerCase() === "profielpagina" || text.toLowerCase() === "profiel") {
            return "profiel";
        }else if (text.toLocaleLowerCase() === "matchingpagina" || text.toLocaleLowerCase() === "matching"){
            return "matching";
        }else if (text.toLocaleLowerCase() === "alle activiteiten"){
            return "alle activiteiten"
        }else if (text.toLocaleLowerCase() === "mijn activiteiten") {
            return "mijn activiteiten";
        }else if (text.toLocaleLowerCase() === "contact" || text.toLocaleLowerCase() === "contactpagina"){
            return "contact"
        }else if (text.toLocaleLowerCase() === "over ons" || text.toLocaleLowerCase() === "over dagje uit" || text.toLocaleLowerCase() === "over" ){
            return "over ons"
        }
        else {
            return "";
        }
    }

    /**
     * To switch between the page depending on what the user said
     * @param command
     * @private
     */
    public reactOnCommand(command: string) {
        const routerService = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);
        if (this.navigationsDutch.indexOf(command) > -1) {
            console.log(command + " command")
            let navigateTo = this.navigations[this.navigationsDutch.indexOf(command)];
            this.speak("U bent op de " + command +" pagina")
            ngZone.run(() => {
                routerService.navigate(['/' + navigateTo]);
            });
        } else if (this.colorsDutch.indexOf(command) > -1) {
            let indexColor = this.colorsDutch.indexOf(command);
            let color = this.colors[indexColor]; // get the color if the found index
            document.documentElement.style.setProperty('--color-default', color);
            this.speak("De kleur " + command + " is geactiveerd")
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


    public isAlreadyIntroduced():boolean{
        return JSON.parse(localStorage.getItem("introduced")) > -1;
    }
}
