import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <header class="bg-base-300 ">
      <div class="title flex h-20 justify-start xs:justify-center w-full p-2">
        <img class="p-2 hidden xs:block" src="{{ logo }}" />
        <div class="xs:hidden flex justify-self-end p-2 ">
          <div class="dropdown self-center bg-slate-100 rounded-btn ">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm bg-slate-100 text-stone-800 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <a class="btn btn-ghost text-xl" routerLink="/">Accueil</a>
              <a class="btn btn-ghost text-xl" routerLink="/rules">Règles</a>
              <a class="btn btn-ghost text-xl" routerLink="/wheel">Roue</a>
              <a class="btn btn-ghost text-xl" routerLink="/resources"
                >Ressources</a
              >
              <a class="btn btn-ghost text-xl" routerLink="/contact">Contact</a>
            </ul>
          </div>
        </div>
        <h1 class="text-5xl xs:text-7xl font-['AmaticSC'] self-center">
          {{ title }}
        </h1>
        <img class="p-2 " src="{{ logo }}" />
      </div>

      <div class="navbar hidden xs:flex flex-row justify-center w-full">
        <a class="btn btn-ghost text-xl" routerLink="/">Accueil</a>
        <a class="btn btn-ghost text-xl" routerLink="/rules">Règles</a>
        <a class="btn btn-ghost text-xl" routerLink="/wheel">Roue</a>
        <a class="btn btn-ghost text-xl" routerLink="/resources">Ressources</a>
        <a class="btn btn-ghost text-xl" routerLink="/contact">Contact</a>
      </div>
      <!-- <a routerLink="/wheel">Wheel</a>
    <a routerLink="/rules">Rules</a>-->
    </header>
    <main class="bg-base-100">
      <router-outlet />
    </main>
    <footer
      class="footer items-center p-4 bg-base-300 text-neutral-content m-t-10"
    >
      <aside class="items-center grid-flow-col  ">
        <img class="p-2 h-20" src="{{ logo }}" />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path>
          </svg>
        </a>
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path></svg
        ></a>
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path></svg
        ></a>
      </nav>
    </footer>
  `,
})
export class AppComponent {
  title = 'La Bagarre !';
  logo = '../assets/img/logo.png';
}
