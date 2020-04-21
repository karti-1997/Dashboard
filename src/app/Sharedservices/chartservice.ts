import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({ providedIn: 'root' })
export class ChartService {
    public data = [];
    public label =[];
    constructor(private http: HttpClient) { }
    createbooktotaldata(): number[] {
        this.http.get<{ message: string, list1: [], list2: [] }>('http://localhost:3000/api/counts/book_total')
        .subscribe((res) => {
            console.log(res.message);
            console.log(res.list1);
            console.log(res.list2);
            this.data.length=0;
            for (var i = 0; i < res.list1.length; i++)
                this.data.push(res.list1[i]);
            console.log(this.data);
        });
        console.log(this.data);
        return this.data;
    }
    createbooktotallabel(): string[] {
        this.http.get<{ message: string, list1: [], list2: [] }>('http://localhost:3000/api/counts/book_total')
        .subscribe((res) => {
            console.log(res.message);
            console.log(res.list1);
            console.log(res.list2);
            this.label.length=0;
            for (var i = 0; i < res.list2.length; i++)
                this.label.push(res.list2[i]);
            console.log(this.label);
        });
        console.log(this.label);
        return this.label;
    }
}
