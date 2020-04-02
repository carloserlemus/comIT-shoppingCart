const pug = require('pug');

const home = (req, res) => {

    const printProducts = [
        {
        id: 1,
        name: "Van Gogh",
        desc: "A self portrait of Van Gogh",
        price: 2000000,
        rating: 5,
        image:'https://media.architecturaldigest.com/photos/5e82178d057a500008d1c488/16:9/w_2560%2Cc_limit/GettyImages-107875484.jpg'
        }, 
        {
        id: 2,
        name: "Cezanne",
        desc: "A self portrait of Van Gogh",
        price: 2000000,
        rating: 5,
        image:'https://images.saatchiart.com/saatchi/965701/art/3813718/2883602-BVOAIUOA-7.jpg'
        }, 
        {
        id: 3,
        name: "Monet",
        desc: "A self portrait of Van Gogh",
        price: 2000000,
        rating: 5,
        image:'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/02/1024px-Paul_Ce%CC%81zanne_107.jpg'
        }
    ]

    res.render('home', { printProducts })
}

module.exports = home;