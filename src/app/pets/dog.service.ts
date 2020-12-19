import { Injectable } from "@angular/core";
import { LoggingService } from "../logging/logging.service";
import { Pet } from "./pet";
import { PetService } from "./pet.service";

@Injectable({
  providedIn: "root"
})
export class DogService extends PetService {
  constructor(private logger: LoggingService) {
    super();
  }

  public getProperties(): Pet {
    this.logger.log("Now selling Dog");

    return {
      kind: "Dog",
      age: 7,
      skinColor: "brown",
      price: 350
    };
  }
}
