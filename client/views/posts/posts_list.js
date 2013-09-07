var postsData = [
  {
    title: "Introducing Telescope",
    author: "Sacha Greif",
    url: "http://sachagreif.com/introducing-telescope/"
  },
  {
    title: "Meteor",
    author: "Tome Coleman",
    url: "http://meteor.com"
  },
  {
    title: "The Meteor Book",
    author: "Tome Coleman",
    url: "http://themeteorbook.com"
  }
];
Template.postsList.helpers({
  posts: postsData
});
