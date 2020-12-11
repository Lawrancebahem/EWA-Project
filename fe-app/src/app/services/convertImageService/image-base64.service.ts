import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageBase64Service {

  constructor() { }


  /**
   * To convert an image to base64
   * if the file is undefined it will give an empty callback, otherwise it will give
   * @param uploadedPicture
   * @param callback
   */
  public convertToBase64(uploadedPicture, callback){
    if (uploadedPicture != undefined || uploadedPicture != null){ // if there is file uploaded convert the image
      const reader = new FileReader();
      reader.addEventListener('load',() => {
        callback(reader.result);
      })
      reader.readAsDataURL(uploadedPicture);
    }else {
      return callback(()=>{

      })
    }
  }
}
