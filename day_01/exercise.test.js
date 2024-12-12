describe('Primer Regalo repetido', () => {
    const gifts1 = [3, 1, 2, 3, 4, 2, 5];
    const gifts2 = [6, 5, 5, 5, 5];
    const gifts3 = [];

    function preparedGifts(gifts) {
        const cleanGifts = new Set();
        for (const gift of gifts) {
            cleanGifts.add(gift);
        }
        if (cleanGifts.size === 0) {
            console.log('No hay regalos, la lista queda vacía');
        }
        return Array.from(cleanGifts).sort((a, b) => a - b);
    }

    it('Gifts 1', () => {
        const result = preparedGifts(gifts1);
        const expected = [1, 2, 3, 4, 5];
        expect(result).toEqual(expected);
    });

    it('Gifts 2', () => {
        const result = preparedGifts(gifts2);
        const expected = [5, 6];
        expect(result).toEqual(expected);
    });

    it('Gifts 3', () => {
        expect(() => preparedGifts(gifts3)).toThrow('No hay regalos, la lista queda vacía');
    });
});
