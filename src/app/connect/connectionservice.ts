import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { connecteddb } from './connect.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({providedIn: 'root'})
export class ConnectionService{
private connections=[];
constructor(private http:HttpClient){}
createdbconnection(db: connecteddb){
    console.log(db.tablename)
    this.http.get<{message:string}>('http://localhost:3000/api/getdata/'+db.tablename).subscribe((res)=>{
        console.log(res.message);
        alert(res.message);
    });
}
connecteddatabases():string[]{
        this.http.get<{message:string,list1:[]}>('http://localhost:3000/api/getdata/collection').subscribe((res)=>{
        console.log(res.message);
        console.log(res.list1);
        res.list1.forEach(element=>
            this.connections.push(element));
    });
    console.log(this.connections);
    return this.connections;
}
fieldlist(collectionname:string){
    console.log("fields available in collection name");
    this.http.get<{message:string,count:number}>('http://localhost:3000/api/getdata/fieldlist'+collectionname).subscribe((res)=>{
        console.log(res.message);
        console.log(res.count);
    })
}
}