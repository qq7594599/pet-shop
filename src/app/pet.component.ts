import { Component, VERSION } from "@angular/core";
import { CatService } from "./pets/cat.service";
import { DogService } from "./pets/dog.service";
import { Pet } from "./pets/pet";
import { PetService } from "./pets/pet.service";

@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
  providers: [{ provide: PetService, useClass: CatService }]
})
export class PetComponent {
  public pet: Pet = null;

  constructor(private petService: PetService) {
    this.pet = this.petService.getProperties();
  }
}
