import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Formulario from "../components/Formulario";
import userEvent from '@testing-library/user-event';

describe('Formulario component', () => {

    test('se debería enviar correctamente', async () => {

        const testData = {
            title: 'Tarea de prueba', text: 'Texto de la tarea', category: 'mensual'
        }

        const mockFn = vi.fn();
        render(<Formulario creaTarea={mockFn} />);

        const inputTitle = screen.getByLabelText('Título');
        const inputText = screen.getByLabelText('Texto');
        const selectCategory = screen.getByLabelText('Categoría');
        const button = screen.getByRole('button', { name: 'Crea nueva tarea' });

        await userEvent.clear(inputTitle);
        await userEvent.type(inputTitle, testData.title);

        await userEvent.clear(inputText);
        await userEvent.type(inputText, testData.text);

        await userEvent.selectOptions(selectCategory, [testData.category]);

        await userEvent.click(button);

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith(testData);
        // expect(mockFn.mock.calls[0][0]).toMatchObject(testData)

    });

});