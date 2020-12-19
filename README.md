# Angular Dependency Injection Sample

## What's Dependency Injection
Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.

## Why Dependency Injection
* Reduced Dependencies
* More Reusable Code
* More Testable Code
* More Readable Code
* Reduced Dependency Carrying

## How Dependency Injection work in Angular project
Angular's DI framework provides dependencies to a class upon instantiation. You can use Angular DI to increase flexibility and modularity in your applications.

1. Creating an injectable service. Ues `@Injectable` decoreator to mark a class as a dependency.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() { }
}
```

2. Register the injectable service in `provider`

```typescript
providers: [{provide: LoggingService}]
```

3. Inject the service in constructor
```typescript
constructor(heroService: HeroService)
```
