import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggingService {
  public log(message: string): void {
    console.log(message);
  }
}
