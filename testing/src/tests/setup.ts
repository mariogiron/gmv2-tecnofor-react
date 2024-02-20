import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll } from 'vitest';
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/vitest';

const data = {
    results: [
        {
            "_id": "63740fede2c75d8744f80a4a",
            "first_name": "Mario",
            "last_name": "Girón",
            "username": "mariogiron",
            "email": "mariogiron@peticiones.online",
            "image": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
            "password": "user12345"
        }
    ]
}

const restHandlers = [
    http.get('https://peticiones.online/api/users', () => {
        return HttpResponse.json(data)
    })
]

const server = setupServer(...restHandlers);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
})

afterEach(() => {
    server.resetHandlers();
    cleanup();
});