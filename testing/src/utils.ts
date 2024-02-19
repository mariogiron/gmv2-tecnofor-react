export function titleCase(text: string) {

    if (text === '') return '';

    const arr = text.split(' ');
    const result = [];
    for (const elem of arr) {
        result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase());
    }
    return result.join(' ');
}

export function mayorDeEdad(age: number) {
    if (age < 0) return null;
    return (age >= 18) ? true : false;
}