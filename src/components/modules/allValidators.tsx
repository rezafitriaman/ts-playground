export * from "./stringValidator"; // exports 'StringValidator' interface
export * from "./zipCodeVAlidator";  // exports 'ZipCodeValidator' and const 'numberRegexp' class
export * from "./parseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
                                                 // and re-exports 'RegExpBasedZipCodeValidator' as alias
                                                 // of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
                                                 // module.