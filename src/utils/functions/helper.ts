export const _class = (classString: string = '') => {
    return classString.trim().replace(/\s+/g, ' ').replace('undefined', '');
}