import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Video } from '../models/video';


@Injectable({
  providedIn: 'root'
})


export class YoutubeService {

  numRelatedRes = '20';
  regionCode = 'vn';
  apiKey = 'AIzaSyANQDIjBdY0QwIJhbPNc0QBpHdh8Gm3Hg8';
  private url = 'https://www.googleapis.com/youtube/v3/';
  private videoDetails = 'part=snippet,contentDetails,statistics';
  private feedDetails = '&chart=mostPopular';
  private defaultObject = {
    'items': [
      {
        'id': {
          'videoId': ''
        },
        'snippet': {
          'title': 'Video error',
          'thumbnails': {
            'high': {
              'url': 'https://via.placeholder.com/480x360',
              'width': 480,
              'height': 360
            },
          },
        }
      }
    ]
  };

  constructor(private http: HttpClient) {
  }

  async categories() {
    try {
      const res = await this.http
        .get(
          `${this.url}videoCategories?part=snippet&regionCode=${
          this.regionCode
          }&key=${this.apiKey}`
        )
        .pipe(map(response => response))
        .toPromise();
      return res;
    } catch {
      return {
        items: [
          {
            'id': '',
            'snippet': {
              'channelId': '',
              'title': 'Categorry error',
              'assignable': true
            }
          }
        ]
      };
    }
  }

  async relatedVideos(query: string) {
    try {
      const res = await this.http
        .get(
          `${
          this.url
          }search?part=snippet&relatedToVideoId=${query}&maxResults=${
          this.numRelatedRes
          }&type=video&key=${this.apiKey}`
        )
        .pipe(map(response => response))
        .toPromise();
      return res;
    } catch {
      return this.defaultObject;
    }
  }

  searchVideo(query: string) {
    try {
      const data = this.http
        .get(
          `${this.url}search?part=snippet&q=${query}&maxResults=${
          this.numRelatedRes
          }&type=video&regionCode=${this.regionCode}&key=${
          this.apiKey
          }`
        ).pipe(tap(res => console.log(res)), map(res => res['items']));
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }


  async getChannel(channelId) {

    try {
      const res = await this.http
        .get(
          `${this.url}channels?id=${channelId}&part=snippet&key=${
          this.apiKey
          }&order=date&maxResults=20&regionCode=${
          this.regionCode
          }`
        )
        .pipe(map(response => response))
        .toPromise();
      return res;
    } catch (error) {
      return error;
    }
  }

  getVideoDetail(videoId) {
    return this.http.get(`${this.url}part=${videoId}+snippet&id=${videoId}&key=${this.apiKey}`);
  }

}
