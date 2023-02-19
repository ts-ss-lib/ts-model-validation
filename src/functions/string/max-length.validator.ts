const stringMaxLengthValidator = (value: string, length: number): boolean => {

    return value.length <= length;

};

export { stringMaxLengthValidator };