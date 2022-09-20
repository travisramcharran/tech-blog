const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'lorem',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'test',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'asdfgbnh',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'cxbfzbv',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'vcnxcn',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'ydjdyrjdy',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'hh',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'rerg',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'uytrr',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: '345t',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'hgdrhg',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'egzhxm',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'bnjh',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'mnbvv',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'mmmmmm',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'nnnn',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'bbbb',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'vvv',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'cccc',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'xxxxxx',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
