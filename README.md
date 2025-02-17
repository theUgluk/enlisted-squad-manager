# TODO
- Default perks 
- Encoding URL

## Layout
- 

## Functions
- Update the soldier selector => new dropdown

## Tests
### Write tests for dynamic signals
### Write tests for state
#### SoldierState
##### AddSoldier
+ Check if soldier gets added
+ Check if type is rifleman
+ Check if soldierId is correct
#### DeleteSoldier
+ Check if soldier gets deleted
+ Check if no other soldiers are deleted
#### DeleteSoldierForSquad 
+ Check if all soldiers from squad are deleted
+ Check if any other soldiers are deleted
#### ChangeSoldierType
+ Check if soldier type has changed
+ Check if all other soldiers are unchanged
+ Check if all perks are unset
### SquadState
#### AddSquad
+ Check if a new squad is created
+ Check if other squads are unchanged
+ Check if squadId is correct
#### DeleteSquad
+ Check if squad is deleted
+ Check if deleteSoldierForSquad is called
+ Check if other squads are unchanged
#### SetSquad
- Check if squad is added
- Check if squadId is correct



## Nice-to-haves
- Update perks when changing soldier type
- Squads are shown in the order of url instead of order of ID (http://localhost:4200/0211-01d1 => squad 2 will be first)

# Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
