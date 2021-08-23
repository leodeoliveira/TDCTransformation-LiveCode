const taximeter = require('./taximeter.js')

test('Overnight trip should cost 35 reais', () => {
    date = new Date("2021-08-21T23:00:00");
    expect(taximeter.calculateTrip(10, date)).toBe(35);
});

test('Sunday trip should cost 30 reais', () => {
    date = new Date("2021-08-22T13:00:00");
    expect(taximeter.calculateTrip(10, date)).toBe(30);
});

test('Normal trip should cost 20 reais', () => {
    date = new Date("2021-08-21T13:00:00");
    expect(taximeter.calculateTrip(10, date)).toBe(20);
});

