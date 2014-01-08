// TODO the scraper needs to export the specific functions if they want to be tested
var scraper = require('../../scraper.js');
describe('Doge logic withdraw testing', function () {
	it('tests the message arrangements are valid', function () {
		scraper.parseCoin('withdraw 3 DOGE', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(3);
		});
		scraper.parseCoin('withdraw DOGE 10', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(10);
		});
		scraper.parseCoin('DOGE 10 withdraw', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(10);
		});
		scraper.parseCoin('10 DOGE withdraw', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(10);
		});
	});
	it('tests the message correctness', function () {
		scraper.parseCoin('withdraw', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('withdraw 3', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('3 withdraw', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('withdraw 3DOGE', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
	});
	it('handles nulls and undefined', function () {
		scraper.parseCoin('withdraw null null', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('null null null', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('withdraw undefined undefined', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
		scraper.parseCoin('undefined undefined undefined', function (error, coinData) {
			expect(coinData).toBe(undefined);
			expect(error).not.toBe(null);
		});
	});
	it('handles extra words', function () {
		scraper.parseCoin('withdraw 3 DOGE null', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(3);
		});
		scraper.parseCoin('withdraw 3 DOGE watermelon', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(3);
		});
		scraper.parseCoin('withdraw 3 watermelon DOGE', function (error, coinData) {
			expect(error).toBe(null);
			expect(coinData).not.toBe(null);
			expect(coinData.coinName).toBe('DOGE');
			expect(coinData.coinAmount).toBe(3);
		});
	});
});