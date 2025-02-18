const dogYears = (planetName, dogAgeInSeconds) => {

    const orbitalPeriods = {
        'earth': 1.0,
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132
    };

    const secondsInEarthYears = 31557600;
    const earthYears = dogAgeInSeconds / secondsInEarthYears;
    const planetYears = earthYears / orbitalPeriods[planetName];
    const dogAge = planetYears * 7;
    return Math.round(dogAge * 100) / 100;
}