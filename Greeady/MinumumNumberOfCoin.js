// Math

// Given a value of V Rs and an infinite supply of each of the denominations {1, 2, 5, 10, 20, 50, 100, 500, 1000}
// valued coins/notes, The task is to find the minimum number of coins and/or notes needed to make the change?

let Deno = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

let n = Deno.length;

function findMinCoin(v) {
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    while (v >= Deno[i]) {
      v -= Deno[i];
      ans.push(Deno[i]);
    }
  }
  return ans;
}

// Time Complexity: O(V).
// Auxiliary Space: O(V).
