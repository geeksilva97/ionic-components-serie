import { Component, OnInit } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-take-screenshot',
  templateUrl: './take-screenshot.page.html',
  styleUrls: ['./take-screenshot.page.scss'],
})
export class TakeScreenshotPage implements OnInit {

  uri: string;

  constructor(
    private screenshot: Screenshot
  ) { }

  ngOnInit() {
  }

  save() {
    this.screenshot.save('jpg', 80, 'codesilva-demo')
      .then(data => {
        alert('Captura de tela salva!');
        alert(JSON.stringify(data,Object.getOwnPropertyNames(data)));
      }, err => {
        console.error(err);
        alert('Erro ao obter screenshot: ' + err);
      });
  }

  getURI() {
    this.screenshot.URI(50).then(data => {
      this.uri = data.URI;
    }, err => {
      console.error(err);
        alert('Erro ao obter screenshot: ' + err);
    });
  }

}
