import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  headline : string,
  short : string,
  content : string,
}

@Component({
  selector: "main-comp",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="intro flex flex-row justify-center m-10">
      <div class="card w-2/3 bg-stone-300 text-stone-800">
        <div class="card-body">
          <h2 class="card-title">La Bagare en quelques mots</h2>
          <p>⏰10 min -👥 2-6 - 🃏 1 jeu de cartes classique <br/><br/>La bagarre est un jeu rapide de combat. Le but est de rester en vie ! Si c'est votre première partie, on recommande de jouer d’abord avec les règles de base, puis d’ajouter les personnages lorsque vous avez pris le jeu en main.<</p>
        </div>
      </div>
    </div>
    
    <div class="news" >
      <h1 class="text-5xl font-['AmaticSC'] m-5 flex justify-center" > News </h1>
      <div class="cards grid gap-4 grid-cols-5 m-5  " >
        <div *ngFor="let article of news; index as i; first as isFirst" [ngClass]="{'col-start-2': i % 3 == 0}" class="card bg-stone-300 text-stone-800 shadow-xl cursor-pointer" (click)="onClickArticle(article)">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              {{article.headline}}
              <div class="badge badge-primary" *ngIf="isFirst">NEW</div>
            </h2>
            <p>{{article.short}}</p>
          </div>
        </div>
      </div>
    <div>

    <dialog id="modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{currentNews.headline}}</h3>
        <p [innerHTML]="currentNews.content"></p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  `
})
export class MainComponent {
  title = 'MainComp';
  modal = document.getElementById("modal") as HTMLDialogElement;
  news = [
    {
      headline : "titre",
      short : "résumé",
      content : "lorem <i>ipsum</i>",
    },
    {
      headline : "titre",
      short : "résumé",
      content : "lorem <i>ipsum2</i>",
    },
    {
      headline : "titre",
      short : "résumé",
      content : "lorem <i>ipsum3</i>",
    },
    {
      headline : "titre",
      short : "résumé",
      content : "lorem <i>ipsum3</i>",
    },

  ] as Article[];
  ngOnInit() {
    this.modal = document.getElementById("modal") as HTMLDialogElement;
  };
  currentNews = {} as Article;
  onClickArticle(content : Article) 
  {
    this.currentNews = content;
    console.log(this.currentNews.content); 
    this.openModal();
  };
  openModal()
  {
    this.modal.showModal();
  }
}
