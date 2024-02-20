import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import TextBox from "../components/TextBox";

describe('TextBox component', () => {

    let article: HTMLElement;
    let button: HTMLElement;
    beforeEach(() => {
        render(<TextBox />);
        article = screen.getByRole('article', { name: 'parrafo principal' });
        button = screen.getByRole('button', { name: 'Pulsa para modificar' });
    })

    test('La caja de texto se encuentra en el documento', () => {
        expect(article).toBeInTheDocument();
    });

    test('La caja de texto tiene un color de fondo', () => {
        expect(article).toHaveStyle({
            'background-color': 'rgb(75, 0, 130)'
        });
        // expect(article.style.backgroundColor).toBe('indigo')
    });

    test('Si pulso en el botón cambia el color de fondo', () => {
        fireEvent.click(button);
        expect(article.style.backgroundColor).toBe('tomato');
    });

});