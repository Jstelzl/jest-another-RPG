const Player = require('../lib/Player');

test('create a player object', () => {
    const player = new Player('Dave');


    expect(player.name).toBe('Dave');
    expect(player.health).toBeEqual(expect.any(Number));
    expect(player.strength).toBeEqual(expect.any(Number));
    expect(player.agility).toBeEqual(expect.any(Number));
});