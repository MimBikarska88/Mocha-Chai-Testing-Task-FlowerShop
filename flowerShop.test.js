const flowerShop = require('./flowerShop');
const { assert, expect } = require('chai');

describe("Tests …", function() {

    it("calc price of flowers test", function() {
        expect(() => flowerShop.calcPriceOfFlowers(12, 2.99, 4)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers("rose", undefined, 4)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers("rose", 5, "four")).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers("rose", 5, 1.25)).to.throw('Invalid input!');
        let result = flowerShop.calcPriceOfFlowers("Roses", 2, 5);
        assert.equal(result, `You need $${(2*5).toFixed(2)} to buy Roses!`)
    });

    //["Rose", "Lily", "Orchid"]
    it('check flowers available', function() {

        expect(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])).to.be.equal('The Rose are available!');
        expect(flowerShop.checkFlowersAvailable("Dandilion", ["Rose", "Lily", "Orchid"])).to.be.equal(`The Dandilion are sold! You need to purchase more!`);

    });
    it('sell flowers', function() {
        expect(() => flowerShop.sellFlowers(undefined, 2)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "space")).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -2)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 14)).to.throw('Invalid input!');
        assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2), 'Rose / Lily');
    });



});