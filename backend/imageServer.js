import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.get('/api/images', (req, res) => {
    // res.send('this is working.')
    const images = [
        {
            'id': "1",
            'name': "Monkey D. Luffy",
            'imageURL': "https://th.bing.com/th/id/OIP.UQm6HPcmQrb2ijXzdJGzQAHaEo?rs=1&pid=ImgDetMain",
            'content': "I am gonna be the King of the Pirates!",
            'role': "Captain"
        },
        {
            'id': "2",
            'name': "Roronoa Zoro",
            'imageURL': "https://th.bing.com/th/id/OIP.ALdrIL9V_J4MCOUL1dejXQHaEQ?rs=1&pid=ImgDetMain",
            'content': "Nothing happened.",
            'role': "Swordsman"
        },
        {
            'id': "3",
            'name': "Nami",
            'imageURL': "https://i.pinimg.com/736x/f3/c6/7a/f3c67a895875a39527ef89bfd3d422e8--one-piece-nami-manga-anime.jpg",
            'content': "I am the Cat Burglar, Nami!",
            'role': "Navigator"
        },
        {
            'id': "4",
            'name': "Ussopp",
            'imageURL': "https://staticg.sportskeeda.com/editor/2023/08/24b3a-16916871672381-1920.jpg",
            'content': "I am the great Captain Usopp, brave warrior of the sea!",
            'role': "Sniper"
        },
        {
            'id': "5",
            'name': "Sanji",
            'imageURL': "https://th.bing.com/th/id/OIP.AJaFmYA52UxsSAGzb9ddBAHaFa?rs=1&pid=ImgDetMain",
            'content': "I am the love cook, and I will protect my crew with my life!",
            'role': "Cook"
        },
        {
            'id': "6",
            'name': "Tony-Tony Chopper",
            'imageURL': "https://th.bing.com/th/id/R.52abad61bfde510fdcdae296de3abbcc?rik=dRQDFYFcByuEtA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1973928.jpg&ehk=JYJGW125mDsW6fTzdOe7i4SpiKAWOgc0mRexKPLsNCg%3d&risl=&pid=ImgRaw&r=0",
            'content': "I am not a raccoon! I am a reindeer!",
            'role': "Doctor"
        },
        {
            'id': "7",
            'name': "Nico Robin",
            'imageURL': "https://th.bing.com/th/id/OIP.f-jSFn6yY70FedCjcHz-KwHaEK?rs=1&pid=ImgDetMain",
            'content': "I want to live! Take me to the sea!",
            'role': "Archaeologist"
        },
        {
            'id': "8",
            'name': "Franky",
            'imageURL': "https://th.bing.com/th/id/OIP.aqJAo8uoUVECyBxGXUwXbAHaE-?rs=1&pid=ImgDetMain",
            'content': "Superrrrrrr!",
            'role': "Shipwright"
        },
        {
            'id': "9",
            'name': "Brook",
            'imageURL': "https://th.bing.com/th/id/OIP.tSFyiU298jC8AdiDUKKJ2wHaEK?rs=1&pid=ImgDetMain",
            'content': "Yohohoho! Skull joke! Can I see your panties?",
            'role': "Musician"
        },
        {
            'id': "10",
            'name': "Jinbe",
            'imageURL': "https://wallpapercave.com/wp/wp3813539.png",
            'content': "I will lay down my life for Luffy if need be!",
            'role': "Helmsman"
        },
    ]
    res.send(images)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on server: http://localhost:${port}`);
})