describe('Decorando el árbol de Navidad', () => {
    function createXmasTree(height, ornament) {
        let result = '';
        if (height < 1 || height > 100) {
            throw Error("La altura del árbol debe ser un entero entre el 1 y 100");
        };
        const totalWidth = 1 + (height - 1) * 2;
        for(let i = 0; i < height; i++ ) {
            const ornamentPerRow = ornament.repeat(1 + i * 2);
            const spacesNeeded = (totalWidth - ornamentPerRow.length) / 2;
            const rows = `${'_'.repeat(spacesNeeded)}${ornamentPerRow}${'_'.repeat(spacesNeeded)}`
            result += rows + '\n';
        }
        for (let i = 0; i < 2; i++) {
            result += `${'_'.repeat((totalWidth - 1) / 2)}#${'_'.repeat((totalWidth - 1) / 2)}\n`;
        }
        
        return result.trim();
    };

    it('should be error if the height is more than 100', () => {
        expect(() => createXmasTree(101, '*')).toThrow("La altura del árbol debe ser un entero entre el 1 y 100")
    });
    it('should print the ornament in scale', () => {
        const expected = 
`____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;
        const tree = createXmasTree(5, '*');
        expect(tree).toEqual(expected);
    });
    it('should print the ornament in scale', () => {
        const expected = 
`__+__
_+++_
+++++
__#__
__#__`;
        const tree = createXmasTree(3, '+');
        expect(tree).toEqual(expected);
    });
    it('should print the ornament in scale', () => {
        const expected = 
`_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`;
        const tree = createXmasTree(6, '@');
        expect(tree).toEqual(expected);
    });

})
