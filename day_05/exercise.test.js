describe('Emparejando botas', () => {
    function organizeShoes(shoes) {
        const counts = {};
        for (const { type, size } of shoes) {
            if (!counts[size]) {
                counts[size] = { I: 0, R: 0 };
            }
            counts[size][type]++;
        };
        const result = [];
        for (const size in counts) {
            const pairs = Math.min(counts[size].I, counts[size].R); // Encuentra los pares posibles
            for (let i = 0; i < pairs; i++) {
                result.push(Number(size)); // Agrega el tamaño por cada par encontrado
            };
        };
        return result;
    };

    it('should take all de sizes', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ];
        const result = organizeShoes(shoes);
        const expected = [38, 42];

        expect(result).toEqual(expected);
    });
    it('should take all de sizes', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 }
          ];
        const result = organizeShoes(shoes);
        const expected = [38, 38];

        expect(result).toEqual(expected);
    });
    it('should take all de sizes', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 43 }
          ];
        const result = organizeShoes(shoes);
        const expected = [];

        expect(result).toEqual(expected);
    });
})