import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PetComponent } from "./pet.component";
import { LoggingService } from "./logging/logging.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PetComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: LoggingService }]
})
export class AppModule {}
