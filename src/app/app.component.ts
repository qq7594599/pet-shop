import { Component, VERSION } from "@angular/core";
import { Pet } from "./pets/pet";
import { PetService } from "./pets/pet.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
