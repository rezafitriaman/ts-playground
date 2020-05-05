export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        console.log(parseInt(s).toString())
        console.log(s.length === 5 && parseInt(s).toString() === s)

        return s.length === 5 && parseInt(s).toString() === s;
    }
}

export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./zipCodeVAlidator";