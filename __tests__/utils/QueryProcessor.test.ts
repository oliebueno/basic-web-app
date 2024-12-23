import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom';

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    // Actualiza tu USB ID a continuación
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response = QueryProcessor(query);
        expect(response).toBe("15-10192");
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response = QueryProcessor(query);
        expect(response).toBe("Oliver");
    });

    test('should return the result of addition', () => {
        const query = "What is 22 plus 72?";
        const response = QueryProcessor(query);
        expect(response).toBe("94");
    });
    
});
