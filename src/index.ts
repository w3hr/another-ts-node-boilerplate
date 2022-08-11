import StringTools from "./tools/string-tools";

export const SayHello = (name: string) => `Hello ${new StringTools(name).StringRaw}`;
export const SayHelloLower = (name: string) => `Hello ${new StringTools(name).toLower()}`;
export const SayHelloUpper = (name: string) => `Hello ${new StringTools(name).toUpper()}`;
export const SayHelloCapitalize = (name: string) => `Hello ${new StringTools(name).capitalizeFirstLetter()}`;

export { StringTools };