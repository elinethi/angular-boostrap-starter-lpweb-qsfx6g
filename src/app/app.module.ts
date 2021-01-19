import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CarteComponent } from './carte/carte.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, HelloComponent, CarteComponent],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}
