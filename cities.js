function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city();
describe_city("Beijing", "China");
describe_city("Tokyo", "Japan");
describe_city("Kabul", "Afghanistan");
