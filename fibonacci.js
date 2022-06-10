/**
 * Recursion. Fibonacci sequence
 * fib(1) = 1
 * fib(2) = 1
 */
const { strict: assert } = require("assert");

function fib(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

assert.equal(fib(1), 1);
assert.equal(fib(2), 1);
assert.equal(fib(3), 2);
assert.equal(fib(4), 3);
assert.equal(fib(5), 5);
assert.equal(fib(6), 8);
console.log("success");

const fib2 = (n) => {
	let prev = 0,
		next = 1;
	for (let i = 0; i < n; i++) {
		let temp = next;
		next = prev + next;
		prev = temp;
	}
	return prev;
};

assert.equal(fib2(1), 1);
assert.equal(fib2(2), 1);
assert.equal(fib2(3), 2);
assert.equal(fib2(4), 3);
assert.equal(fib2(5), 5);
assert.equal(fib2(6), 8);
console.log("success");
