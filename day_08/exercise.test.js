describe('La carrera de los renos', () => {
    function drawRace(indices, length) {
        let result = '';
        function createTrack (length) {
            const string = `${'~'.repeat(length)}` 
            return string;
        };
        const track = createTrack(length);

        for (let i = 0; i < indices.length; i++) {
            let modString = '';

            if (indices[i] > 0) {
                modString = track.slice(0, indices[i]) + 'r' + track.slice(indices[i] + 1);
            } else if (indices[i] < 0) {
                const posFromEnd = length + indices[i];
                modString = track.slice(0, posFromEnd) + 'r' + track.slice(posFromEnd + 1);            
            } else {
                modString = track;
            };

            result += ' '.repeat(indices.length - i - 1) + modString + ` /${i + 1}`;
            
            if (i < indices.length - 1) {
                result += '\n';
            };            
        };
        
        return result;
    };

    it('should return the length of the track', () => {
        const race = drawRace([0], 10);
        const expected = '~~~~~~~~~~ /1';

        expect(race).toEqual(expected);
    });

    it('should place the reindeer in a positive position', () => {
        const result = drawRace([5], 10);
        const expected = '~~~~~r~~~~ /1';
        expect(result).toEqual(expected);
    });

    it('should correctly position the reindeer with positive and negative indices', () => {
        const race = drawRace([0, 5, -3], 10);
        const expected =
            '  ~~~~~~~~~~ /1\n' +
            ' ~~~~~r~~~~ /2\n' +
            '~~~~~~~r~~ /3';

        expect(race).toEqual(expected);
    });

    it('should work with multiple mixed indexes', () => {
        const race = drawRace([2, -1, 0, 5], 8);
        const expected =
            '   ~~r~~~~~ /1\n' +
            '  ~~~~~~~r /2\n' +
            ' ~~~~~~~~ /3\n' +
            '~~~~~r~~ /4';

        expect(race).toEqual(expected);
    });

    it('should handle longer track with different indexes', () => {
        const race = drawRace([3, 7, -2], 12);
        const expected =
            '  ~~~r~~~~~~~~ /1\n' +
            ' ~~~~~~~r~~~~ /2\n' +
            '~~~~~~~~~~r~ /3';

        expect(race).toEqual(expected);
    });
});
