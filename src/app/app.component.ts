import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuoteService } from '../pages/home/quotes';

import { HomePage } from '../pages/home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  providers: [QuoteService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public qService: QuoteService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loader: LoadingController, public http: Http, ) {
    this.http = http;
    this.qService = qService;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  sync() {
    let url = "https://gist.githubusercontent.com/apuravchauhan/2cc6cf8e222d638fa3be954cbfb13cba/raw/261efcebd69961fd064453935e70a4605e3b3922/gurbani-quotes.json";
    this.http.get(url)
      .toPromise()
      .then(response => {
        let newQuotes = response.json();
        let quotes = [...newQuotes, ...this.qService.quotes];
        window.localStorage.setItem('quotes', JSON.stringify(quotes));
      })
      .catch(error => {
        console.log(error.json())
      });
  }
}
