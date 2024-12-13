describe('¿Regalo dentro de la caja?', () => {
    function inBox(box) {
        let result = false

        for (let i = 0; i < box.length; i++) {
            const row = box[i];
            if (i === 0 || i === box.length - 1) {
                if (box[0] !== '#'.repeat(box[0].length) || box[box.length - 1] !== '#'.repeat(box[box.length - 1].length)) {
                    return result;
                }
            } else {
                if (row[0] !== '#' || row[row.length - 1] !== '#') {
                    return result;
                }
                if (row.includes('*')) {
                    result = true;
                }
            }
        }
        return result;
    };

    it('should return false if dont find a gift', () => {
        const box = [
            "###",
            "# #",
            "###"
        ];
        expect(inBox(box)).toBe(false);
    });
    it('shouldn t start without *', () => {
        const box = [ "*  #" ];
        expect(inBox(box)).toBe(false);
    });
    it('shouldn t finish without *', () => {
        const box = [ "# *" ];
        expect(inBox(box)).toBe(false);
    });
    it('should be false if the top of the box are the gift', () => {
        const box = [ "###*#" ];
        expect(inBox(box)).toBe(false);
    })
    it('should be true if the gift is inside of the box', () => {
        const box = [
            "####",
            "#* #",
            "#  #",
            "####"
        ];
        expect(inBox(box)).toBe(true);
    });
    it('should be true if the gift is inside of the box', () => {
        const box = [
            "####",
            "#*##",
            "####",
            "####"
        ];
        expect(inBox(box)).toBe(true);
    });

})
