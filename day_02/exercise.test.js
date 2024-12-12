describe('Enmarcando nombres', () => {
    function createFrame(names) {
        let maxLength = 0;
        for (const name of names) {
            if (name.length > maxLength) {
                maxLength = name.length;
            }
        }
    
        const totalLength = maxLength + 4;
        const totalRows = names.length + 2
    
        const topBottomBorder = '*'.repeat(totalLength);
        const rows = [topBottomBorder];
    
        for (const name of names) {
            const spacesNeeded = totalLength - name.length - 4;
            const paddedName = `* ${name}${' '.repeat(spacesNeeded)} *`;
            rows.push(paddedName);
        }
    
        rows.push(topBottomBorder);
        /**
         * La respuesta correcta es: 
         * return rows.join('\n');
         * 
         * Pero par que pasen todos los test es el siguiente, de esa forma fui resolviendo con tdd.
         */
        return {
            frame: rows.join('\n'),
            row: totalRows,
            columns: totalLength,
        }
    }
    it('should calculate the total number of rows including borders', () => {
        const names = ['midu', 'madeval', 'educalvolpz'];
        expect(createFrame(names).row).toEqual(5)
    });
    it('should calculate the total number of rows including borders', () => {
        const names = ['midu', 'madeval'];
        expect(createFrame(names).row).toEqual(4)
    });
    it('should calculate the total number of columns including padding', () => {
        const names = ['midu', 'madeval', 'educalvolpz'];
        expect(createFrame(names).columns).toEqual(15)
    });
    it('should calculate the total number of columns including padding', () => {
        const names = ['midu', 'madeval'];
        expect(createFrame(names).columns).toEqual(11)
    });
    it('should correctly format names with appropriate padding', () => {
        const names = ['a', 'bb', 'ccc'];
        const expected = `
*******
* a   *
* bb  *
* ccc *
*******
`.trim();
        const result = createFrame(names).frame;
    
        expect(result).toEqual(expected);
    });
    it('should generate a framed output with names', () => {
        const names = ['midu', 'madeval', 'educalvolpz'];
        const expected = `
***************
* midu        *
* madeval     *
* educalvolpz *
***************
`.trim();
        expect(createFrame(names).frame).toEqual(expected);
    });
})