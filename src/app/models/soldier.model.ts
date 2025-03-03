import { perks } from "../../data/perks";
import { soldierTypes } from "../../data/soldierTypes";
import Util from "../util";
import {soldierType} from "./class.model";
import {PerkPointsPerSoldierType} from "./perk-points-per-soldiertype.model";

export class Soldier {
  public id: number;
  public squadId: number;
  public soldierTypeId = 13;
  public soldierTypeLevel =1;
  public hash = "";
  public perks: {perkId: number, amount: number}[] = [];
  public maxMobility = 0;
  public maxVitality = 0;
  public maxHandling = 0;

  constructor(
    id: number,
    squadId: number,
    soldierTypeId?: number,
    soldierTypeLevel?: number,
    perksToAdd?: {perkId: number, amount: number}[]
  ) {
    this.id = id;
    this.squadId = squadId;
    if(soldierTypeId){
      this.soldierTypeId = soldierTypeId;
      if(soldierTypeLevel){
        this.soldierTypeLevel = soldierTypeLevel;
      }
    }
    if(perksToAdd){
      this.perks = perksToAdd;
    }
    this.calculateMaxPerkPoints();
    this.calculateHash();
  }

  private calculateMaxPerkPoints(){
    const perkPoints: PerkPointsPerSoldierType = <PerkPointsPerSoldierType>this.getSoldierType().perkPoints
      .get(this.soldierTypeLevel);
    this.maxVitality = perkPoints.vitality + 12;
    this.maxHandling = perkPoints.handling + 12;
    this.maxMobility = perkPoints.mobility + 12;
  }

  //@TODO Make this better in the HTML
  public getPerkPointsSpend(): {
    mobility: number,
    vitality: number,
    weaponHandling: number,
  }{
    const values = {
      mobility: 0,
      vitality: 0,
      weaponHandling: 0,
    }
    this.perks.forEach((soldierPerk) => {
      const thisPerk = perks.find(perk => perk.id === soldierPerk.perkId);
      if(thisPerk) {
        switch (thisPerk.type) {
          case 0:
            values.mobility += thisPerk.cost * soldierPerk.amount;
            break;
          case 1:
            values.vitality += thisPerk.cost * soldierPerk.amount;
            break;
          case 2:
            values.weaponHandling += thisPerk.cost * soldierPerk.amount;
            break;
        }
      }
    })
    return values;
  }

  public setSoldierTypeId(id: number) {
    this.soldierTypeId = id;
    const foundType = soldierTypes.find(type => type.id === id);
    if(foundType){
      this.setSoldierTypeLevel(foundType.minLevel);
      this.perks = [];
      this.calculateMaxPerkPoints();
      this.calculateHash();
    }
  }

  public setSoldierTypeLevel(level: number) {
    this.soldierTypeLevel = level;
    this.calculateMaxPerkPoints();
    this.calculateHash();
  }

  public getPerkPointsPerSoldierType() {
    return this.getSoldierType().perkPoints.get(this.soldierTypeLevel);
  }

  public getMaxPerkPoints(type: "mobility" | "vitality" | "handling"){
    const perkPointsPerSoldierType = this.getPerkPointsPerSoldierType();
    if(perkPointsPerSoldierType){
      return perkPointsPerSoldierType[type] + 12;
    }
    return 0;
  }

  public addPerk(perkId: number){
    const perkIndex = this.perks.findIndex((perk) => perk.perkId === perkId);
    if(perkIndex > -1){
      const foundPerk = perks.find(perk => perk.id === perkId);
      const localPerk = this.perks[perkIndex];
      if(foundPerk && foundPerk.maxLevel > localPerk.amount){
        this.perks[perkIndex].amount++;
      }
    } else {
      this.perks = [...this.perks, {
        perkId: perkId,
        amount: 1
      }];
    }
    this.calculateHash();
  }

  public getSoldierType(): soldierType {
    return <soldierType>soldierTypes.find(type => type.id === this.soldierTypeId);
  }

  public removePerk(perkId: number){
    const perkIndex = this.perks.findIndex((perk) => perk.perkId === perkId);
    if(perkIndex > -1){
      const localPerk = this.perks[perkIndex];
      if(localPerk.amount <= 1){
        this.perks.splice(perkIndex, 1);
      } else {
        this.perks[perkIndex].amount--;
      }
    }
    this.calculateHash();
  }

  private calculateHash(){
    //	[##]	 [#]	  [#]		[##]     [#]    [#]
    // squadId-classId-classLevel-[perkId-perkAmount]
    this.hash =
      Util.makeMinLength(this.squadId.toString(36), 2)
      + Util.makeMinLength(this.soldierTypeId.toString(36), 1)
      + Util.makeMinLength(this.soldierTypeLevel.toString(36), 1);


    this.hash =
      Util.encodeNumber(this.squadId)
      + Util.encodeNumber(this.soldierTypeId)
      + Util.encodeNumber(this.soldierTypeLevel);

    this.perks.forEach(perk => {
      this.hash += Util.encodeNumber(perk.perkId)
      + Util.encodeNumber(perk.amount)
    });
  }

  public removeAllPerks(){
    this.perks = [];
  }
}

