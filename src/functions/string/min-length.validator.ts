const stringMinLengthValidator = (value: string, length: number): boolean => {

    return value.length >= length;

};

export { stringMinLengthValidator };