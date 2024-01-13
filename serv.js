const express = require("express");
let port = 3002;
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/title.json");
});
app.get("/2baf70d1-42bb-4437-b551-e5fed5a87abe", (req, res) => {
  res.send({
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Le chateau dans le ciel",
    original_title: "天空の城ラピュタ",
    original_title_romanised: "Tenkū no shiro Rapyuta",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
    description:
      "L'orpheline Sheeta a hérité d'un mystérieux cristal qui la relie au mythique royaume céleste de Laputa. Avec l'aide de l'ingénieux Pazu et d'une bande de pirates du ciel, elle se dirige vers les ruines de l'ancienne grande civilisation. Sheeta et Pazu doivent déjouer le maléfique Muska, qui envisage d'utiliser la science de Laputa pour devenir le maître du monde.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    running_time: "124",
    rt_score: "95",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960836",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/12cfb892-aac0-4c5b-94af-521852e46d6a", (req, res) => {
  res.send({
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Le tombeau des lucioles",
    original_title: "火垂るの墓",
    original_title_romanised: "Hotaru no haka",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
    description:
      "Dans la dernière partie de la Seconde Guerre mondiale, un garçon et sa sœur, devenus orphelins lorsque leur mère a été tuée dans l'attentat à la bombe incendiaire de Tokyo, doivent survivre seuls dans ce qui reste de la vie civile au Japon. L'intrigue suit ce garçon et sa sœur alors qu'ils font de leur mieux pour survivre dans la campagne japonaise, luttant contre la faim, les préjugés et la fierté dans leur propre combat personnel et tranquille.",
    director: "Isao Takahata",
    producer: "Toru Hara",
    release_date: "1988",
    running_time: "89",
    rt_score: "97",
    movie: "https://video.sibnet.ru/shell.php?videoid=5055326",
    vost: "https://video.sibnet.ru/shell.php?videoid=4740157",
  });
});
app.get("/58611129-2dbc-4a81-a72f-77ddfc1b1b49", (req, res) => {
  res.send({
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "Mon voisin Totoro",
    original_title: "となりのトトロ",
    original_title_romanised: "Tonari no Totoro",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
    description:
      "Deux sœurs partent à la campagne avec leur père afin de se rapprocher de leur mère hospitalisée, et découvrent que les arbres environnants sont habités par des Totoros, esprits magiques de la forêt. Lorsque la plus jeune s'enfuit de la maison, la sœur aînée demande l'aide des esprits pour la retrouver.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    running_time: "86",
    rt_score: "93",
    movie: "https://video.sibnet.ru/shell.php?videoid=4917204",
    vost: "https://video.sibnet.ru/shell.php?videoid=4740100",
  });
});
app.get("/ea660b10-85c4-4ae3-8a5f-41cea3648e3e", (req, res) => {
  res.send({
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    title: "Kiki la petite sorcière",
    original_title: "魔女の宅急便",
    original_title_romanised: "Majo no takkyūbin",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg",
    description:
      "Une jeune sorcière, au cours de son année obligatoire de vie indépendante, a du mal à s'intégrer dans une nouvelle communauté alors qu'elle subvient à ses besoins en gérant un service de courrier aérien.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1989",
    running_time: "102",
    rt_score: "96",
    movie: "https://video.sibnet.ru/shell.php?videoid=4935942",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/4e236f34-b981-41c3-8c65-f8c9000b94e7", (req, res) => {
  res.send({
    id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    title: "Souvenirs goutte à goutte",
    original_title: "おもひでぽろぽろ",
    original_title_romanised: "Omoide poro poro",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/isCrlWWI4JrdLKAUAwFb5cjAsH4.jpg",
    description:
      "Taeko, une jeune citadine de 27 ans, part en vacances à la campagne dans la famille de son beau-frère. Laissant derrière elle ses préoccupations, elle se laisse submerger par ses souvenirs d’enfance, des anecdotes survenues en 1966 alors qu’elle n’avait que 11 ans…",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1991",
    running_time: "118",
    rt_score: "100",
    movie:
      "https://vk.com/video_ext.php?oid=755747641&id=456239344&hash=99cb4ddc4efe562b",
    vost: "https://designparty.sx/e/c7n1bomkkbzs",
  });
});
app.get("/ebbb6b7c-945c-41ee-a792-de0e43191bd8", (req, res) => {
  res.send({
    id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    title: "Porco Rosso",
    original_title: "紅の豚",
    original_title_romanised: "Kurenai no buta",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/nAeCzilMRXvGaxiCpv63ZRVRVgh.jpg",
    description:
      "Dans l’entre-deux-guerres quelque part en Italie, le pilote Marco, aventurier solitaire, vit dans le repaire qu’il a établi sur une île déserte de l’Adriatique. À bord de son splendide hydravion rouge, il vient en aide aux personnes en difficulté.'",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1992",
    running_time: "93",
    rt_score: "94",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960862",
    vost: "https://vostanimee.fr/?trembed=3&trid=4875&trtype=1",
  });
});
app.get("/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c", (req, res) => {
  res.send({
    id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    title: "Pom Poko",
    original_title: "平成狸合戦ぽんぽこ",
    original_title_romanised: "Heisei tanuki gassen Ponpoko",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg",
    description:
      "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1994",
    running_time: "119",
    rt_score: "78",
    movie: "https://video.sibnet.ru/shell.php?videoid=5055341",
    vost: "https://vidmoly.to/embed-qyug1jvmoxb2.html",
  });
});
app.get("/ff24da26-a969-4f0e-ba1e-a122ead6c6e3", (req, res) => {
  res.send({
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    title: "Si tu tends l'oreille",
    original_title: "耳をすませば",
    original_title_romanised: "Mimi wo sumaseba",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/fRtaDgmj0CirvqFUG1XN48BDY1l.jpg",
    description:
      "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
    director: "Yoshifumi Kondō",
    producer: "Toshio Suzuki",
    release_date: "1995",
    running_time: "111",
    rt_score: "91",
    movie: "https://video.sibnet.ru/shell.php?videoid=5184986",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});

app.get("/0440483e-ca0e-4120-8c50-4c8cd9b965d6", (req, res) => {
  res.send({
    id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    title: "Princesse Mononoke",
    original_title: "もののけ姫",
    original_title_romanised: "Mononoke hime",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/6pTqSq0zYIWCsucJys8q5L92kUY.jpg",
    description:
      "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1997",
    running_time: "134",
    rt_score: "92",
    movie: "https://video.sibnet.ru/shell.php?videoid=4917206",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/45204234-adfd-45cb-a505-a8e7a676b114", (req, res) => {
  res.send({
    id: "45204234-adfd-45cb-a505-a8e7a676b114",
    title: "Mes voisins les Yamadas",
    original_title: "ホーホケキョ となりの山田くん",
    original_title_romanised: "Hōhokekyo tonari no Yamada-kun",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/nDOsicEg4RHDq0t23JKGSb58z6u.jpg",
    description:
      "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1999",
    running_time: "104",
    rt_score: "75",
    movie: "https://video.sibnet.ru/shell.php?videoid=5055333",
    vost: "https://video.sibnet.ru/shell.php?videoid=4754506",
  });
});
app.get("/dc2e6bd1-8156-4886-adff-b39e6043af0c", (req, res) => {
  res.send({
    id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    title: "Le voyage de Chihiro",
    original_title: "千と千尋の神隠し",
    original_title_romanised: "Sen to Chihiro no kamikakushi",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
    description:
      "Chihiro, une petite fille d'une dizaine d'années, déménage vers une nouvelle ville. Sur le chemin, ses parents décident de couper par la forêt afin de gagner du temps. Ils se retrouvent alors dans un tunnel qui débouche dans un endroit curieux, aux allures d'ancien quartier traditionnel, mais complètement inhabité. Ils sont en réalité arrivés dans le monde des esprits ",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2001",
    running_time: "124",
    rt_score: "97",
    movie: "https://video.sibnet.ru/shell.php?videoid=4917201",
    vost: "https://video.sibnet.ru/shell.php?videoid=4728974",
  });
});
app.get("/90b72513-afd4-4570-84de-a56c312fdf81", (req, res) => {
  res.send({
    id: "90b72513-afd4-4570-84de-a56c312fdf81",
    title: "Le Royaume des chats",
    original_title: "猫の恩返し",
    original_title_romanised: "Neko no ongaeshi",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/d4BTZvckFTthyhGX27LZnWxl0tl.jpg",
    description:
      "Haru est une collégienne maladroite pour qui la vie n'est pas toujours rose. Un jour, en rentrant chez elle, elle sauve un chat sur le point de se faire écraser. Mais une fois hors de danger, le chat lui fait une révérence et la remercie .Elle n'est pas au bout de ses surprises, car elle vient de sauver la vie au prince des chats...",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
    running_time: "75",
    rt_score: "89",
    movie: "https://sendvid.com/embed/urs0k7oo",
    vost: "https://video.sibnet.ru/shell.php?videoid=4729075",
  });
});
app.get("/cd3d059c-09f4-4ff3-8d63-bc765a5184fa", (req, res) => {
  res.send({
    id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    title: "Le chateau ambulant",
    original_title: "ハウルの動く城",
    original_title_romanised: "Hauru no ugoku shiro",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg",
    description:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2004",
    running_time: "119",
    rt_score: "87",
    movie: "https://video.sibnet.ru/shell.php?videoid=4930337",
    vost: "https://video.sibnet.ru/shell.php?videoid=5290436",
  });
});
app.get("/112c1e67-726f-40b1-ac17-6974127bb9b9", (req, res) => {
  res.send({
    id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
    title: "Les contes de Terremer",
    original_title: "ゲド戦記",
    original_title_romanised: "Gedo senki",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/j276noIGGmfi66EnCfewsL2OVTX.jpg",
    description:
      "L'histoire se déroule à Terremer, un monde imaginaire peuplé d'êtres humains et de dragons. Le premier film de Gorō Miyazaki, fils du célèbre Hayao Miyazaki, narre la jeunesse du prince Arren, de son initiation au mystère de la magie à la libération de son double malfaisant...",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2006",
    running_time: "116",
    rt_score: "41",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960858",
    vost: "https://video.sibnet.ru/shell.php?videoid=4754513",
  });
});

app.get("/758bf02e-3122-46e0-884e-67cf83df1786", (req, res) => {
  res.send({
    id: "758bf02e-3122-46e0-884e-67cf83df1786",
    title: "Ponyo sur la falaise",
    original_title: "崖の上のポニョ",
    original_title_romanised: "Gake no ue no Ponyo",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg",
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2008",
    running_time: "100",
    rt_score: "92",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960860",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/2de9426b-914a-4a06-a3a0-5e6d9d3886f6", (req, res) => {
  res.send({
    id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    title: "Arrietty",
    original_title: "借りぐらしのアリエッティ",
    original_title_romanised: "Karigurashi no Arietti",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oc2OB2KDmSRDMelKEAA1n4YRQL0.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/7Z7WVzJsSReG8B0CaPk0bvWD7tK.jpg",
    description:
      "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    director: "Hiromasa Yonebayashi",
    producer: "Toshio Suzuki",
    release_date: "2010",
    running_time: "94",
    rt_score: "95",
    movie: "https://video.sibnet.ru/shell.php?videoid=5055314",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/45db04e4-304a-4933-9823-33f389e8d74d", (req, res) => {
  res.send({
    id: "45db04e4-304a-4933-9823-33f389e8d74d",
    title: "La Colline aux coquelicots",
    original_title: "コクリコ坂から",
    original_title_romanised: "Kokuriko zaka kara",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rRLYX4RZIyloHSJwvZKAhphAjiB.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/xtPBZYaWQMQxRpy7mkdk5n1bTxs.jpg",
    description:
      "L'histoire se déroule dans les années soixante, plus précisément en 1963, tout juste un an avant les jeux olympiques de Tokyo. On suit ainsi le quotidien de la jeune lycéenne Matsuzaki Umi, membre du journal de son école...",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2011",
    running_time: "91",
    rt_score: "83",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960825",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/67405111-37a5-438f-81cc-4666af60c800", (req, res) => {
  res.send({
    id: "67405111-37a5-438f-81cc-4666af60c800",
    title: "Le vent se lève",
    original_title: "風立ちぬ",
    original_title_romanised: "Kaze tachinu",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/stM3jlD4nSJhlvR2DE7XnB0eN25.jpg",
    description:
      "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2013",
    running_time: "126",
    rt_score: "89",
    movie: "https://video.sibnet.ru/shell.php?videoid=4960847",
    vost: "https://video.sibnet.ru/shell.php?videoid=4754505",
  });
});

app.get("/578ae244-7750-4d9f-867b-f3cd3d6fecf4", (req, res) => {
  res.send({
    id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    title: "Le Conte de la princesse Kaguya",
    original_title: "かぐや姫の物語",
    original_title_romanised: "Kaguya-Hime no Monogatari",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mWRQNlWXYYfd2z4FRm99MsgHgiA.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/lMaWlYThCSnsmW3usxWTpSuyZp1.jpg",
    description:
      "Kaguya-hime no Monogatari est le dernier film de Isao Takahata. Celui-ci se base sur la célèbre légende nippone intitulée Taketori Monogatari, soit en français 'Le conte du coupeur de bambous'. Le mythe raconte l'histoire d'un coupeur de bambou qui, par hasard, découvre une petite fille éblouissante dans la forêt qui, plus tard, donnera une quête impossible à ses cinq prétendants au mariage.",
    director: "Isao Takahata",
    producer: "Yoshiaki Nishimura",
    release_date: "2013",
    running_time: "137",
    rt_score: "100",
    movie: "https://video.sibnet.ru/shell.php?videoid=3200557",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/5fdfb320-2a02-49a7-94ff-5ca418cae602", (req, res) => {
  res.send({
    id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    title: "Souvenir de Marnie",
    original_title: "思い出のマーニー",
    original_title_romanised: "Omoide no Marnie",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/axUX7urQDwCGQ9qbgh2Yys7qY9J.jpg",
    description:
      "Anna, fille unique de 12 ans, timide et réservée, en conflit avec ses parents adoptifs, est envoyée au bord de la mer chez de la famille pour soigner son asthme. Elle y fait la connaissance d'une mystérieuse fillette de son âge : Marnie. Alors que les deux fillettes sympathisent, Marnie disparaît soudainement. Le lendemain, une nouvelle famille emménage dans la maison où habitait son amie. Sayaka, la nouvelle occupante interpelle Anna, la confondant avec Marnie, pour lui rendre son journal intime qu'elle a découvert dans sa nouvelle chambre.Qui est réellement Marnie ?",
    director: "Hiromasa Yonebayashi",
    producer: "Yoshiaki Nishimura",
    release_date: "2014",
    running_time: "103",
    rt_score: "92",
    movie: "https://video.sibnet.ru/shell.php?videoid=5055358",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/d868e6ec-c44a-405b-8fa6-f7f0f8cfb500", (req, res) => {
  res.send({
    id: "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
    title: "La Tortue rouge",
    original_title: "レッドタートル ある島の物語",
    original_title_romanised: "Reddotātoru aru shima no monogatari",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/kjXdW5H3myRBmTMYgKayjphr2FA.jpg",
    description:
      "À travers l'histoire d'un naufragé échoué sur une île peuplée de tortues, de crabes et d'oiseaux, on suit les différentes grandes étapes de la vie d'un être humain. L'homme nouera notamment un lien d'amitié fort avec une tortue à carapace rouge, qui l'entraînera vers de fabuleuses aventures.",
    director: "Michaël Dudok de Wit",
    producer:
      "Toshio Suzuki, Isao Takahata, Vincent Maraval, Pascal Caucheteux, Grégoire Sorlat",
    release_date: "2016",
    running_time: "80",
    rt_score: "93",
    movie: "https://video.sibnet.ru/shell.php?videoid=4729074",
    vost: "https://video.sibnet.ru/shell.php?videoid=4729074",
  });
});
app.get("/790e0028-a31c-4626-a694-86b7a8cada40", (req, res) => {
  res.send({
    id: "790e0028-a31c-4626-a694-86b7a8cada40",
    title: "Earwig and the Witch",
    original_title: "アーヤと魔女",
    original_title_romanised: "Āya to Majo",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sJhFtY3eHuvvACaPpxpzdCLQqpQ.jpg",
    movie_banner:
      "https://www.themoviedb.org/t/p/original/qMxpGzmmnY1jLd4p7EhhoW43wWF.jpg",
    description:
      "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2021",
    running_time: "82",
    rt_score: "30",
    movie: "https://fusevideo.net/e/y9BVb4eOKWZ9PrE",
    vost: "https://www.youtube.com/watch?v=A2CyR65e_2k&ab_channel=Sofyan",
  });
});
app.get("/d6bd6efc-37b2-4c40-b092-367cea8c88fe", (req, res) => {
  res.send({
    id: "d6bd6efc-37b2-4c40-b092-367cea8c88fe",
    title: "The Boy and the Heron",
    original_title: "君たちはどう生きるか",
    original_title_romanised: "Kimitachi wa Dō Ikiru ka",
    image:
      "https://static.wikia.nocookie.net/studio-ghibli/images/d/d2/How_Do_You_Live_Poster_2.jpg",
    movie_banner:
      "https://sportshub.cbsistatic.com/i/2023/08/18/4ca75ce1-c0e4-4ec8-a341-2202008ea3aa/ghibli-boy-and-the-heron.jpg?width=1200",
    description:
      "The psychological growth of a teenage boy through interactions with his friends and uncle.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2023",
    running_time: "124",
    rt_score: "TBA",
    movie: "https://www.youtube.com/embed/aO6Dn81Tn5A?si=qTM5BlPBSGpA6Y3d",
    vost: "https://www.youtube.com/embed/aO6Dn81Tn5A?si=qTM5BlPBSGpA6Y3d",
  });
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
