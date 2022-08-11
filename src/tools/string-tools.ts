export default class StringTools {

    constructor(public readonly StringRaw: string) { }

    toUpper(): string {
        return this.StringRaw?.toUpperCase() || '';
    }

    toLower(): string {
        return this.StringRaw?.toLowerCase() || '';
    }

    capitalizeFirstLetter(): string {
        return this.StringRaw?.charAt(0).toUpperCase() + this.StringRaw?.slice(1)?.toLowerCase() || '';
    }

    length(): number {
        return this.StringRaw?.length || 0;
    }

}