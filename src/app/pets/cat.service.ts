import { Injectable } from "@angular/core";
import { LoggingService } from "../logging/logging.service";
import { Pet } from "./pet";
import { PetService } from "./pet.service";

@Injectable({
  providedIn: "root"
})
export class CatService extends PetService {
  constructor(private logger: LoggingService) {
    super();
  }

  public getProperties(): Pet {
    this.logger.log("Now selling Cat");

    return {
      kind: "Cat",
      age: 3,
      skinColor: "gold",
      price: 500
    };
  }
}
