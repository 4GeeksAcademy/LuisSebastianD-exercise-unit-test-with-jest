const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.2617 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(8.2);
    const expected = 8.2 * 146.2617;
    expect(fromDollarToYen(8.2)).toBeCloseTo(1199.34594);
})

test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(15.7);
    const expected = 15.7 * 0.00556;
    expect(fromYenToPound(15.7)).toBeCloseTo(0.087292);
})