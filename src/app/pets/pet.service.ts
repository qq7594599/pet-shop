import { Pet } from "./pet";

export class PetService {
  public getProperties(): Pet {
    return {
      kind: "unknown",
      age: 0,
      skinColor: "black",
      price: 0
    };
  }
}
