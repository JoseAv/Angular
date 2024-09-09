import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gifs, Search } from '../Interfaces/Gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gifs[] = []
  private _tagHistory: string[] = []


  constructor(private httpClient: HttpClient) {
    this.chargeDataGif()
  }



  saveDataGif() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }


  chargeDataGif() {
    const newTagHistory = JSON.parse(localStorage.getItem('history')!)
    if (!newTagHistory) return
    if (newTagHistory.length <= 0) return


    this._tagHistory = newTagHistory
    this.addTag(this._tagHistory[0])

  }

  getHistory() {
    return [...this._tagHistory]
  }

  addTag(tag: string) {
    tag = tag.toLocaleLowerCase()
    if (this._tagHistory.includes(tag)) {
      const newTagHitory = this._tagHistory.filter(item => item.toLowerCase() !== tag.toLowerCase())
      this._tagHistory = newTagHitory
    }

    if (this._tagHistory.length >= 10) return
    this._tagHistory.unshift(tag)

    this.httpClient.get<Search>(`https://api.giphy.com/v1/gifs/search?api_key=9FXotdO2TUV4j26FsT9S6tl8bngUsXu8&q=${tag}&limit=10`)
      .subscribe(res =>
        this.gifsList = res.data
      )
    this.saveDataGif()
  }


}
