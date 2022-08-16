import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private baseUrl = environment.urlApi + '/todos';

    constructor(private _http: HttpClient) { }

    public findAll() {
        return this._http.get<Todo[]>(this.baseUrl);
    }

    public findById(id: string) {
        return this._http.get<Todo>(this.baseUrl + '/' + id);
    }

}