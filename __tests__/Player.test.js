const Postion = require('../lib/Postion');

jest.mock('../lib/Potion');

console.log(new Postion());

const Player = require('../lib/Player');

test('create a player object', () => {
    const player = new Player('Dave');

    expect(Player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );


    expect(player.name).toBe('Dave');
    expect(player.health).toBeEqual(expect.any(Number));
    expect(player.strength).toBeEqual(expect.any(Number));
    expect(player.agility).toBeEqual(expect.any(Number));
});