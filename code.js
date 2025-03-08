
document.querySelector('#toad').addEventListener('click', submitBtn)

function submitBtn() {
    const zebra = document.querySelector('#zebra').value
    const frog = document.querySelector('#frog')

    if (zebra === "Aquarius") {
        frog.innerText = 'Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians dont like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though theyre a fixed sign, they may not necessarily believe they are the "same" people they were when they were born.'
    }else if ( zebra === "Pisces") {
        frog.innerText = 'Pisces are the dreamers of the zodiac. They are sensitive, compassionate, and deeply intuitive. Pisces are also known for their creativity and artistic abilities. They are often drawn to the arts, music, and other forms of self-expression.'
    }else if ( zebra === "Aries") {
        frog.innerText = 'Aries are the pioneers of the zodiac. They are bold, adventurous, and always ready for a challenge. Aries are also known for their leadership skills and their ability to inspire others.'
    }else if ( zebra === "Taurus") {
        frog.innerText = 'Taurus are the builders of the zodiac. They are practical, reliable, and hardworking. Taurus are also known for their love of luxury and their appreciation for the finer things in life.'
    }else if ( zebra === 'Gemini') {
        frog.innerText = 'Gemini are the communicators of the zodiac. They are curious, adaptable, and always seeking new experiences. Gemini are also known for their wit and charm.'
    }else if ( zebra === 'Cancer') {
        frog.innerText = 'Cancer are the nurturers of the zodiac. They are sensitive, caring, and deeply intuitive. Cancer are also known for their love of home and family.'
    }else if ( zebra === 'Leo') {
        frog.innerText = 'Leo are the performers of the zodiac. They are confident, charismatic, and always ready to take center stage. Leo are also known for their generosity and their love of life.'
    }else if ( zebra === 'Virgo') {
        frog.innerText = 'Virgo are the analysts of the zodiac. They are practical, detail-oriented, and always striving for perfection. Virgo are also known for their intelligence and their ability to solve problems.'
    }else if ( zebra === 'Libra') {
        frog.innerText = 'Libra are the diplomats of the zodiac. They are charming, diplomatic, and always seeking harmony. Libra are also known for their love of beauty and their appreciation for the arts.'
    }else if ( zebra === 'Scorpio') {
        frog.innerText = 'Scorpio are the detectives of the zodiac. They are intense, passionate, and always seeking the truth. Scorpio are also known for their loyalty and their ability to see through deception.'
    }else if ( zebra === 'Sagittarius') {
        frog.innerText = 'Sagittarius are the explorers of the zodiac. They are adventurous, optimistic, and always seeking new experiences. Sagittarius are also known for their love of freedom and their appreciation for the outdoors.'
    }else if ( zebra === 'Capricorn') {
        frog.innerText = 'Capricorn are the achievers of the zodiac. They are ambitious, disciplined, and always striving for success. Capricorn are also known for their practicality and their ability to overcome obstacles.'
    }
}


