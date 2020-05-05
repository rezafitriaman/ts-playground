import type {StringValidator} from './stringValidator';

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        console.log(s.length === 5 && numberRegexp.test(s))
        return s.length === 5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator};
export {ZipCodeValidator as mainValidator};