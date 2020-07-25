module.exports = function() {
    var faker = require("faker")
    var lodash = require("lodash")

    return {
        people: lodash.times(100, function(n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                image: faker.image.image(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                department: lodash.sample(["Customer Support", "Software Developer", "Marketing", "Bartender"])
            }
        })
    }
}