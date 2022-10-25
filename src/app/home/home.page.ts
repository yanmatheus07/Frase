import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  frase: string;
  autor: string;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarFrase();
  }

  solicitarFrase(){
    const url = "http://lucasreno.kinghost.net/frase";
    this.http.get(url).subscribe( resposta => {
      this.frase = resposta[0].frase;
      this.autor = resposta[0].autor;
    });
  }

}
