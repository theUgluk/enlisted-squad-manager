import { Injectable } from "@angular/core";

import {perks} from "../../data/perks";
import {IPerk} from "../models/perk.model";

@Injectable({
  providedIn: "root"
})
export class PerkService {
  public getPerks(soldierTypeId?: number, type?: number, level?: number): IPerk[] {
    let resultPerks: IPerk[] = [];
    resultPerks = this.getPerksBySoldierType(soldierTypeId);
    if(type !== undefined){
      resultPerks = this.filterPerksByType(resultPerks, type);
    }
    if(level !== undefined){
      resultPerks = this.filterPerksByLevel(resultPerks, level);
    }
    return resultPerks.sort((a, b) => a.order - b.order);
  }

  private filterPerksByLevel(unfilteredPerks: IPerk[], level: number): IPerk[] {
    return unfilteredPerks.filter(perk => perk.level === level);
  }

  private filterPerksByType(unfilteredPerks: IPerk[], type: number): IPerk[] {
    return unfilteredPerks.filter(perk => perk.type === type);
  }

  private getPerksBySoldierType(soldierTypeId?: number): IPerk[] {
    if(soldierTypeId == undefined){
      return perks;
    }
    return perks.filter(perk => {
      return (perk.include && perk.class.includes(soldierTypeId))
        || (!perk.include && !perk.class.includes(soldierTypeId));
    });
  }
}
