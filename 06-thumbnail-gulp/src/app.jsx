var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 8,
    header: 'Learn React',
    description: 'React is a fantastic new front end librabry for rendering',
    imageUrl:
    'https://raw.githubusercontent.com/facebook/react/gh-pages/img/logo_og.png'
  },
  {
    title: 'Show Courses',
    number: 12,
    header: 'Learn Gulp',
    description: 'Gulp is a fantastic new automation and build tool',
    imageUrl:
    'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
