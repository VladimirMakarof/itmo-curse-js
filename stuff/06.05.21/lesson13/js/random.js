class Random {
    static getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
}
export { Randoms }