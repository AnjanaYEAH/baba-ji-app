import { Component } from '@angular/core';
import { QuoteService } from './quotes';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [QuoteService, Screenshot, SocialSharing]
})
export class HomePage {
  quotes: any;
  quote: String;
  mode: Boolean;
  constructor(public qService: QuoteService, public screen: Screenshot, public shareservice: SocialSharing) {
    this.screen = screen;
    this.shareservice = shareservice;
    this.mode = true;
    this.qService = qService;
    this.quotes = qService.quotes;
    let localQuotes = window.localStorage.getItem('quotes');
    if (localQuotes) {
      this.quotes = JSON.parse(localQuotes);
    }
    this.next();
  }
  share() {
    var sservice = this.shareservice;
    this.screen.URI(60).then(function(a) {
      sservice.share("Download App - https://goo.gl/caEjFB", "Download App - https://goo.gl/caEjFB", a.URI);
      console.log(a);
    }, function(err) {
      console.log(err);
    });
  }

  next() {
    let index = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[index];
  }
  /*Quotes processor for http://www.srigranth.org/servlet/gurbani.gurbani?Action=Page&g=2&h=0&r=0&t=1&p=0&k=0&Param=70*/
  processQuotes() {
    var aa = [];
    var eles = document.querySelectorAll('body > center:nth-child(10) > table > tbody > tr > td > table > tbody > tr');
    for (var i in eles) {
      var e = eles[i];
      if (e.querySelectorAll) {
        var fontse = e.querySelectorAll('font');
        aa.push({ "gur": fontse[0].innerText, "eng": fontse[1].innerText });
      }
    }
    return aa;
  }

}
