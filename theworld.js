var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = ["Japan", "Singapore", "Italy", "Canada", "United States Of America"];
console.log(countries);
var sortedCountries = __spreadArray([], countries, true).sort();
console.log(sortedCountries);
console.log(countries);
var ReverseSortedCountries = __spreadArray([], countries, true).sort().reverse();
console.log(ReverseSortedCountries);
console.log(countries);
countries.reverse();
console.log(countries);
countries.reverse();
console.log(countries);
countries.sort();
console.log(countries);
countries.reverse();
console.log(countries);
