import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Fotocopia } from "./fotocopia.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string) { }

    getData(): Observable<Fotocopia[]> {
        return this.sendRequest<Fotocopia[]>("GET", this.url);
    }

    saveFotocopia(fotocopia: Fotocopia): Observable<Fotocopia> {
        return this.sendRequest<Fotocopia>("POST", this.url, fotocopia);
    }

    deleteProduct(id: number): Observable<Fotocopia> {
        return this.sendRequest<Fotocopia>("DELETE", `${this.url}/${id}`);
    }
    private sendRequest<T>(verb: string, url: string, body?: Fotocopia): Observable<T> {
        return this.http.request<T>(verb, url, {
            body: body
        });
    }
}
