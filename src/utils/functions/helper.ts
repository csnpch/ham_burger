export const _class = (classString: string = '') => {
    return classString
        .trim()
        // @ts-ignore
        .replaceAll(/\s+/g, ' ')
        .replaceAll('undefined', '')
        .replaceAll('null', '')
        .replaceAll('false', '')
}