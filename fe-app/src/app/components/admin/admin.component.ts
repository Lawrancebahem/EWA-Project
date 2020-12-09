import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {User} from "../../models/user";
// @ts-ignore
import interests from "../../json/interests.json";
import {Category} from "../../models/category";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    @ViewChild('uploadedPicture') uploadedProfile: ElementRef;
    @ViewChild('uploadedCategoryImage') uploadedCategoryImage: ElementRef;
    public userOverViewClicked: boolean;
    public activityOverview: boolean;
    public categoryOverview: boolean;
    public title: string;

    public arrayInterests: { id, name, image }[] = interests;

    constructor() {
    }

    ngOnInit(): void {

    }
}

