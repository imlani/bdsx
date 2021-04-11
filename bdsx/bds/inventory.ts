import { abstract } from "bdsx/common";
import { NativeClass } from "bdsx/nativeclass";
import { CxxString, uint8_t } from "bdsx/nativetype";
import { CxxStringWrapper } from "bdsx/pointer";
import type { ServerPlayer } from "./player";
import { CompoundTag } from "./nbt";
import { CxxVector } from "../cxxvector";

export enum ContainerId {
    Inventory = 0,
    First = 1,
    Last = 100,
    Offhand = 119,
    Armor = 120,
    Hotbar = 122,
    FixedInventory = 123,
    UI = 124
}

export enum CreativeItemCategory {
    Construction = 1,
    Nature = 2,
    Items = 4,
    Uncategorized = 5,
}

export class Item extends NativeClass {
    allowOffhand():boolean {
        abstract();
    }
    getCommandName():string {
        abstract();
    }
    getCreativeCategory():number {
        abstract();
    }
    isDamageable():boolean {
        abstract();
    }
    isFood():boolean {
        abstract();
    }
    /**
     * Will not affect client but allows /replaceitem
     */
    setAllowOffhand(value:boolean):void {
        abstract();
    }
}

export class ComponentItem extends NativeClass {
}


export class ItemStack extends NativeClass {
    amount:uint8_t;
    protected _getItem():Item {
        abstract();
    }
    protected _setCustomLore(name:CxxVector<string>):void {
        abstract();
    }
    isBlock():boolean {
        abstract();
    }
    isNull():boolean {
        abstract();
    }
    getAmount():number {
        return this.amount;
    }
    setAmount(amount:number):void {
        this.amount = amount;
    }
    getId():number {
        abstract();
    }
    getItem():Item|null {
        if (this.isNull()) {
            return null;
        }
        return this._getItem();
    }
    getName():string {
        const item = this.getItem();
        if (item) {
            return "minecraft:" + item.getCommandName();
        }
        return "minecraft:air";
    }
    hasCustomName():boolean {
        abstract();
    }
    getCustomName(): string {
        abstract();
    }
    setCustomName(name:string):void {
        abstract();
    }
    getUserData():CompoundTag {
        abstract();
    }
    getEnchantValue(): number {
        abstract();
    }
    isEnchanted(): boolean {
        abstract();
    }
    setCustomLore(lores:string[]|string):void {
        const CxxVectorString = CxxVector.make(CxxString);
        const cxxvector = new CxxVectorString(true);
        cxxvector.construct();
        if (typeof lores === "string") {
            cxxvector.push(lores);
        } else lores.forEach((v)=>{
            cxxvector.push(v);
        });
        this._setCustomLore(cxxvector);
        cxxvector.destruct();
    }

    /**
     * Value is applied only to Damageable items
     */
    setDamageValue(value:number):void {
        abstract();
    }
    startCoolDown(player:ServerPlayer):void {
        abstract();
    }
    load(compoundTag:CompoundTag):void {
        abstract();
    }
    sameItem(item:ItemStack):boolean {
        abstract();
    }
    isStackedByData():boolean {
        abstract();
    }
    isStackable():boolean {
        abstract();
    }
    isPotionItem():boolean {
        abstract();
    }
    isPattern():boolean {
        abstract();
    }
    isMusicDiscItem():boolean {
        abstract();
    }
    isLiquidClipItem():boolean {
        abstract();
    }
    isHorseArmorItem():boolean {
        abstract();
    }
    isGlint():boolean {
        abstract();
    }
    isFullStack():boolean {
        abstract();
    }
    isFireResistant():boolean {
        abstract();
    }
    isExplodable():boolean {
        abstract();
    }
    isDamaged():boolean {
        abstract();
    }
    isDamageableItem():boolean {
        abstract();
    }
    isArmorItem():boolean {
        abstract();
    }
    isWearableItem():boolean {
        abstract();
    }
    getMaxDamage():number {
        abstract();
    }
    getComponentItem():ComponentItem {
        abstract();
    }
    getDamageValue():number {
        abstract();
    }
    getAttackDamage():number {
        abstract();
    }
}



export class PlayerInventory extends NativeClass {
    getItem(slot:number, containerId: ContainerId):ItemStack {
        abstract();
    }
}