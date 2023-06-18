const express = require('express');
let port = 3001
const cors = require('cors');
const app = express()

app.use(cors());

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/title.json')
})
app.get('/films/2baf70d1-42bb-4437-b551-e5fed5a87abe', (req, res) => {

    res.send({
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "movie": "https://uqload.co/embed-94715dskajvd.html"
    })
})
app.get('/films/12cfb892-aac0-4c5b-94af-521852e46d6a', (req, res) => {
    res.send({
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "movie": "https://video.sibnet.ru/shell.php?videoid=5055326"
    },)
})
app.get('/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49', (req, res) => {

    res.send({
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro",
        "movie": "https://uqload.co/embed-qxedgtg75mtd.html"
    },)
})
app.get('/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e', (req, res) => {

    res.send({
        "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        "title": "Kiki's Delivery Service",
        "movie": "https://uqload.co/embed-c4cewgtukvt4.html"
    },)
})
app.get('/films/4e236f34-b981-41c3-8c65-f8c9000b94e7', (req, res) => {

    res.send({
        "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
        "title": "Only Yesterday",
        "movie": "https://vk.com/video_ext.php?oid=755747641&id=456239344&hash=99cb4ddc4efe562b"
    },)
})
app.get('/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8', (req, res) => {

    res.send({
        "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
        "title": "Porco Rosso",
        "movie": "https://uqload.co/embed-fvm49e6aupnp.html"
    },)
})
app.get('/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c', (req, res) => {

    res.send({
        "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
        "title": "Pom Poko",
        "movie": "https://video.sibnet.ru/shell.php?videoid=5055341"
    },
    )
})
app.get('/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3', (req, res) => {

    res.send({
        "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        "title": "Whisper of the Heart",
        "movie": "https://archive.org/embed/Www.animated247.comWhisperOfTheHeart.eng.hd/www.animated247.com%20Whisper%20of%20The%20Heart.eng.hd.mp4"
    },)
})


app.get('/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6', (req, res) => {

    res.send({
        "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        "title": "Princess Mononoke",
        "movie": "https://uqload.co/embed-jwnmv7igjjfg.html"
    },)
})
app.get('/films/45204234-adfd-45cb-a505-a8e7a676b114', (req, res) => {

    res.send({
        "id": "45204234-adfd-45cb-a505-a8e7a676b114",
        "title": "My Neighbors the Yamadas",
        "movie": "https://video.sibnet.ru/shell.php?videoid=5055333"
    },
    )
})
app.get('/films/dc2e6bd1-8156-4886-adff-b39e6043af0c', (req, res) => {

    res.send({
        "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
        "title": "Spirited Away",
        "movie": "https://uqload.co/embed-ozut1faixec0.html"
    },)
})
app.get('/films/90b72513-afd4-4570-84de-a56c312fdf81', (req, res) => {

    res.send({
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "movie": "https://sendvid.com/embed/urs0k7oo"
    },)
})
app.get('/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa', (req, res) => {

    res.send({
        "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
        "title": "Howl's Moving Castle",
        "movie": "https://uqload.co/embed-vriascw86ivk.html"
    },)
})
app.get('/films/112c1e67-726f-40b1-ac17-6974127bb9b9', (req, res) => {

    res.send({
        "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
        "title": "Tales from Earthsea",
        "movie": "https://video.sibnet.ru/shell.php?videoid=4960858"
    },)
})


app.get('/films/758bf02e-3122-46e0-884e-67cf83df1786', (req, res) => {

    res.send({
        "id": "758bf02e-3122-46e0-884e-67cf83df1786",
        "title": "Ponyo",
        "movie": "https://fs91.myvi.tv:8092/Vg/Md/0p/1G/WU/a4/HZ/12/jQ/Mu/gQ/2/2.mp4?&s=g0btROOAfzfLbs0CEZY_7cfP430mMXqqmdq4LpCMCwR0uGpI0N6T0Uqfiq-QVI_hPxRARv59-f3ZZs11DyegSQ2&r=Ha8hzI3NlnujsoSydI5dtcWE6dsPRJXJwLO1Aj_gWHs1&do=6050&d=5445&ri=KLO3vQdY1U6DPTmcG24Tig2"
    },)
})
app.get('/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6', (req, res) => {

    res.send({
        "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
        "title": "Arrietty",
        "movie": "https://video.sibnet.ru/shell.php?videoid=5055314"
    },)
})
app.get('/films/45db04e4-304a-4933-9823-33f389e8d74d', (req, res) => {

    res.send({
        "id": "45db04e4-304a-4933-9823-33f389e8d74d",
        "title": "From Up on Poppy Hill",
        "movie": "https://video.sibnet.ru/shell.php?videoid=4960825"
    },)
})
app.get('/films/67405111-37a5-438f-81cc-4666af60c800', (req, res) => {

    res.send({
        "id": "67405111-37a5-438f-81cc-4666af60c800",
        "title": "The Wind Rises",
        "movie": "https://video.sibnet.ru/shell.php?videoid=4960847"
    },)
})




app.get('/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4', (req, res) => {

    res.send({
        "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
        "title": "The Tale of the Princess Kaguya",
        "movie": "https://video.sibnet.ru/shell.php?videoid=3200557"
    },)
})
app.get('/films/5fdfb320-2a02-49a7-94ff-5ca418cae602', (req, res) => {

    res.send({
        "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
        "title": "When Marnie Was There",
        "movie": "https://video.sibnet.ru/shell.php?videoid=5055358"
    },)
})
app.get('/films/d868e6ec-c44a-405b-8fa6-f7f0f8cfb500', (req, res) => {

    res.send({
        "id": "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
        "title": "The Red Turtle",
        "movie": "https://video.sibnet.ru/shell.php?videoid=4729074"
    },)
})
app.get('/films/790e0028-a31c-4626-a694-86b7a8cada40', (req, res) => {

    res.send({
        "id": "790e0028-a31c-4626-a694-86b7a8cada40",
        "title": "Earwig and the Witch",
        "movie": "https://fusevideo.net/e/y9BVb4eOKWZ9PrE"
    })
})



app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
})