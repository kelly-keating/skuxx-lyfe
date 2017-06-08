exports.seed = function (knex, Promise) {
  return knex('skuxxes').del()
    .then(function () {
      return Promise.all([
        knex('skuxxes').insert({id: 1, name: 'Kim Kardashian', img_url: 'http://media.npr.org/assets/img/2015/06/17/Kim%20Kardashian-8b12194250ba930485f40c0d56b0176b5f26440d-s900-c85.jpg', level: 4}),
        knex('skuxxes').insert({id: 2, name: 'Heath Ledger', img_url: 'https://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/51ce61d2e4b0d911b44a2767/1358885180033/1000w/ledgerlegacy.jpg', level: 9}),
        knex('skuxxes').insert({id: 3, name: 'Kanye', img_url: 'http://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/11/rtr_kanye_west_jc_150407_16x9_992-1.jpg', level: 7}),
        knex('skuxxes').insert({id: 4, name: 'Jennifer Aniston', img_url: 'http://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/4881/original/Jennifer-Aniston.jpg', level: 6}),
        knex('skuxxes').insert({id: 5, name: 'Brad Pitt', img_url: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/entertainment/2017/05/15/brad-pitt-talks-sober-life-post-angelina-jolie-split-ive-got-no-secrets/_jcr_content/par/featured-media/media-0.img.jpg/876/493/1494878620039.jpg?ve=1&tl=1', level: 7}),
        knex('skuxxes').insert({id: 6, name: 'Taylor Swift', img_url: 'https://assets.entrepreneur.com/content/16x9/822/20150720165857-taylor-swift.jpeg', level: 1}),
        knex('skuxxes').insert({id: 7, name: 'Matt Damon', img_url: 'http://hungarytoday.hu/wp-content/uploads/2015/10/matt-damon.jpg', level: 8}),
        knex('skuxxes').insert({id: 8, name: 'Will Smith', img_url: 'http://gazettereview.com/wp-content/uploads/2016/04/will-smith-net-worth.jpg', level: 7}),
        knex('skuxxes').insert({id: 9, name: 'Bill Murray', img_url: 'http://www.geekchicelite.com/wp-content/uploads/2016/02/o-BILL-facebook.jpg', level: 10}),
        knex('skuxxes').insert({id: 10, name: 'Angelina Jolie', img_url: 'https://beyondbreastcancer.files.wordpress.com/2014/01/angelina-jolie.jpg', level: 8}),
        knex('skuxxes').insert({id: 11, name: 'John Lennon', img_url: 'http://img.mumbaye.de/vmn/image/upload/v1477533547/lennon_l11afb.jpg', level: 5}),
        knex('skuxxes').insert({id: 12, name: 'Beyonce', img_url: 'http://ell.h-cdn.co/assets/15/43/980x490/landscape-1445435757-beyonce.jpg', level: 9}),
        knex('skuxxes').insert({id: 13, name: 'Orlando Bloom', img_url: 'https://pmchollywoodlife.files.wordpress.com/2017/02/orlando-bloom-bio3.jpg?w=620', level: 4}),
        knex('skuxxes').insert({id: 14, name: 'Meryl Streep', img_url: 'http://beyouthful.net/wp-content/uploads/2014/11/meryl-streep-giver.jpg', level: 6}),
        knex('skuxxes').insert({id: 15, name: 'Nicki Minaj', img_url: 'http://www.billboard.com/files/media/nicki-minaj-oct-27-2016-billboard-1548.jpg', level: 2}),
        knex('skuxxes').insert({id: 16, name: 'Michelle Obama', img_url: 'http://assets.vogue.com/photos/589dec800970c6fb5f135835/master/pass/00-square-michelle-obama-masterchef.jpg', level: 10}),
        knex('skuxxes').insert({id: 17, name: 'Leonardo Di Caprio', img_url: 'http://images.boomsbeat.com/data/images/full/32034/422817_original-jpg.jpg', level: 10}),
        knex('skuxxes').insert({id: 18, name: 'Emma Watson', img_url: 'https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8a6af7a7-1381-47d8-a9b8-c070e14d69e5.jpg', level: 5}),
        knex('skuxxes').insert({id: 19, name: 'Lucy Liu', img_url: 'http://pmcdeadline2.files.wordpress.com/2012/02/lucyliu__120227235747.jpg', level: 8}),
        knex('skuxxes').insert({id: 20, name: 'Miley Cyrus', img_url: 'http://ste.india.com/sites/default/files/2016/04/16/479789-miley-cyrus-newest.jpg', level: 3})
      ])
    })
}
