import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import UserList from "../components/UserList";

describe('UserList component', () => {

    test('deberían cargarse las imágenes', async () => {

        render(<UserList />);

        const imgs = await screen.findAllByRole('img');
        expect(imgs).toHaveLength(1);

        const title = await screen.findByText('Mario');
        expect(title).toBeInTheDocument();
    });

});