describe('El ataque del grinch', () => {
    function fixPackages(packages) {
        let stack = [];
        let chars = packages.split('');
        for (let i = 1; i < packages.length; i++) {
            if (chars[i] === '(') {
                stack.push(i);
            } else if (chars[i] === ')') {
                const start = stack.pop();
                const end = i;
                const reversed = chars.slice(start + 1, end).reverse();
                chars.splice(start, end - start + 1, ...reversed);
            }

        }
        return chars.filter(char => char !== '(' && char !== ')').join('');
    };
    it('Test 1', () => {
        const packages = 'a(bc)de';
        expect(fixPackages(packages)).toEqual('acbde');
    });
    it('Test 2', () => {
        const packages = 'a(bc(def)g)h';
        expect(fixPackages(packages)).toEqual('agdefcbh');
    });
    it('Test 3', () => {
        const packages = 'abc(def(gh)i)jk';
        expect(fixPackages(packages)).toEqual('abcighfedjk');
    });

});