const { Post } = require('../models');

const postdata = [
  {
    title: 'Avengers: Endgame',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    user_id: 10
  },
  {
    title: 'Morbius',
    post_url: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/morbius_onesheet_1400x2100_he.jpg?itok=-jQVkWIe',
    user_id: 8
  },
  {
    title: 'Babadook',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_.jpg',
    user_id: 1
  },
  {
    title: 'Belle',
    post_url: 'https://m.media-amazon.com/images/M/MV5BOGU2Yjc0Y2YtMDU0MS00NTFiLTlkMGMtOTcxOWIzMjhkZmZkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
    user_id: 4
  },
  {
    title: 'March of the Penguins',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTM1NDc5MDYxMl5BMl5BanBnXkFtZTcwMjMzNDAzMQ@@._V1_.jpg',
    user_id: 7
  },
  {
    title: 'Shrek',
    post_url: 'https://m.media-amazon.com/images/I/517YoTqAnQL._AC_.jpg',
    user_id: 4
  },
  {
    title: 'Pulp Fiction',
    post_url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
    user_id: 1
  },
  {
    title: 'The Gray Man',
    post_url: 'https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
    user_id: 1
  },
  {
    title: 'Chef',
    post_url: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Chef_2014.jpg',
    user_id: 9
  },
  {
    title: 'Me Time',
    post_url: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Me_Time_%28film%29.jpg',
    user_id: 5
  },
  {
    title: 'Divergent',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_FMjpg_UX1000_.jpg',
    user_id: 3
  },
  {
    title: 'White Chicks',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg',
    user_id: 10
  },
  {
    title: 'American Sniper',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg',
    user_id: 8
  },
  {
    title: 'Cinderella',
    post_url: 'https://m.media-amazon.com/images/M/MV5BZTk3ZTEzNGUtZTcwYy00NmRmLWFhMGYtZjA4NWY1ZWI4MzMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    user_id: 3
  },
  {
    title: 'Supersize Me',
    post_url: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Size_Me_Poster.jpg',
    user_id: 3
  },
  {
    title:
      'Demon Slayer: Mugen Train',
    post_url: 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
    user_id: 7
  },
  {
    title: 'Kung Fu Panda',
    post_url: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    user_id: 6
  },
  {
    title: 'Sinister',
    post_url: 'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_.jpg',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
