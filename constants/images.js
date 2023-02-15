const images = {
    logo: require('../assets/images/logo.png'),

};

// instagram images
for (let i = 0; i < 8; i++) {
    images['instagram' + (i + 1)] = require(`../assets/images/instagram_${i + 1}.png`)
};

export default images;