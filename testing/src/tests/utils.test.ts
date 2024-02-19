import { describe, expect, test } from "vitest";
import { titleCase, mayorDeEdad } from '../utils';

describe('titleCase', () => {

    test('debe retornar un string', () => {
        const result = titleCase('hola mundo');
        expect(result).toBeTypeOf('string');
    });

    test('debe retornar el string correcto', () => {
        expect(titleCase('hola mundo')).toBe('Hola Mundo');
    });

    test('debe retornar string vacío si recibe igual un string vacío', () => {
        expect(titleCase('')).toBe('');
    });

});

describe('mayorDeEdad', () => {

    test('debe retornar true si es mayor de edad', () => {
        expect(mayorDeEdad(21)).toBeTruthy();
    });

    test('debe retornar false si no es mayor de edad', () => {
        expect(mayorDeEdad(2)).toBeFalsy();
    })

})