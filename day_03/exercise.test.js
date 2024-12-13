describe('Organizando el inventario', () => {
    function organizeInventory(inventory) {
        const result = {};
        for (const item of inventory) {
            if(!result[item.category]) {
                result[item.category] = {};
            }
            if(!result[item.category][item.name]) {
                result[item.category][item.name] = item.quantity;
            } else {
                result[item.category][item.name] += item.quantity;
            };
        }
        return result
    }

    it('should return emtpy if the array is empty', () => {
        const inventory = [];
        expect(organizeInventory([])).toEqual({})
    });
    it('should organize inventory by category and name', () => {
        const inventory = [{ name: 'doll', quantity: 5, category: 'toys' }];
        const expected = { toys: { doll: 5 } }
        const result = organizeInventory(inventory);

        expect(result).toEqual(expected);
    });
    it('should organize inventory if there are 2 or more categorys', () => {
        const inventory = [
             {name: 'doll', quantity: 5, category: 'toys'},
             {name: 'ball', quantity: 2, category: 'sports'}
             ];
        const expected = { toys: { doll: 5}, sports: { ball: 2 } }
        const result = organizeInventory(inventory);

        expect(result).toEqual(expected);
    });

    it('should sum the quantity with the same product', () => {
        const inventory = [
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' }
        ];
        const expected = { toys: { car: 5 } };
        const result = organizeInventory(inventory);

        expect(result).toEqual(expected);
    });

    it('final test', () => {
        const inventory = [
            { name: 'doll', quantity: 5, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' },
            { name: 'ball', quantity: 2, category: 'sports' },
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'racket', quantity: 4, category: 'sports' }
          ];
        const expected = {
            toys: {
                doll: 5,
                car: 5
            },
            sports: {
                ball: 2,
                racket: 4
            }
        };
        const result = organizeInventory(inventory);

        expect(result).toEqual(expected);
    });
})