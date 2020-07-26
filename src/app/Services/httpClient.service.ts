import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClient: HttpClient) {
    }

    private getHttpHeaders() {
        const options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return options;
    }

    public post(url: string, body: any = {}) {
        return this.httpClient.post(url, body, this.getHttpHeaders()).pipe(
            tap(res => res)
        );
    }

    public get(url: string) {
        return this.httpClient.get(url, this.getHttpHeaders()).pipe(
            tap(res => res)
        );
    }

    public put(url: string, body: any) {
        return this.httpClient.put(url, body, this.getHttpHeaders()).pipe(
            tap(res => res)
        );
    }

    public delete(url: string) {
        return this.httpClient.delete(url, this.getHttpHeaders()).pipe(
            tap(res => res)
        );
    }
}
