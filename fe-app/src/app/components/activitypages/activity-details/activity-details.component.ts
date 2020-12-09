import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ActivityService} from "../../../services/activityService/activity.service";
import {Activity} from "../../../models/activity";
import {SpeechServiceService} from "../../../services/speech-voice-service/speech-service.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {SessionService} from "../../../services/sessionService/session.service";

@Component({
    selector: 'app-activity-details',
    templateUrl: './activity-details.component.html',
    styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

    public selectedActivityId;
    activityToShow;
    public reactionsArray: any[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private activityService: ActivityService,
                public speechRecognition: SpeechServiceService,
                private httpClient: HttpClient,
                private sessionStorage: SessionService) {
    }

    private childParamsSubscription: Subscription = null;


    ngOnInit(): void {
        Object.assign(new Activity(), event);

        this.childParamsSubscription =
            this.activatedRoute.params.subscribe((params: Params) => {
                    this.setSelectedActivityId(params['id'] || -1);
                    this.activityToShow = Activity.trueCopy(this.activityService.findById(this.selectedActivityId))
                }
            );

        this.getAllReactions();
    }

    public setSelectedActivityId(param: any) {
        this.selectedActivityId = param;
    }


    /**
     * To add new reaction based on the id of the user, with the given parameters idActivity and the text that belongs to
     * this reaction
     * @param idActivity
     * @param textReaction
     */
    public addNewReaction(idActivity: number, textReaction: string) {
        let newReaction = {idActivity: idActivity, textReaction: textReaction};
        let response = this.httpClient
            .post(`${environment.apiUrl}/reaction/new-reaction`, newReaction, {observe: "response"})
            .pipe(shareReplay(1));
        let userName = this.sessionStorage.currentUserName // to get the userName
        this.reactionsArray.push({...newReaction, idActivity: idActivity ,userName: userName})
        response.subscribe((response) => {
            console.log(response);
        }, error => {
            console.log(error);
        })
    }
    /**
     * Get all reactions from the backend, and map the values into object array
     */
    public getAllReactions() {
        let response = this.httpClient.get<any[]>(`${environment.apiUrl}/reaction/all`).pipe(shareReplay(1));

        response.subscribe((reactions) => {
            this.reactionsArray = reactions.map(reaction => {
                return {id: reaction[0], textReaction: reaction[1], activityId: reaction[2], userName: reaction[3]};
            })
            console.log(this.reactionsArray);
        }, error => {
            console.log(error);
        })

    }
}
