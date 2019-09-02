import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';
import { TablaService } from './services/tabla.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private config: ConfigService, private service: TablaService ) {}
  title = this.config.settings.titulo;
  titleForm = 'Comision P2M';
  info: object;
  pagina( data ) {
    console.log('llega: ', data);
    // Hace la Consulta debida para cada paginador
  }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data) => {
        console.log('llega: ', data);
        let attr = Object.keys( data[0] );
        this.info = {attr, data};
      }
    );
  }
}
