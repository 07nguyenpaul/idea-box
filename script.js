var titleInput = $('.title');
var bodyInput = $('.body');

$('.save').on('click', function(){
  addIdea();
});

function addIdea(){
  var title = $('.title').val();
  var body = bodyInput.val();
  return $('.ideacontainer ul').prepend("<li>" +
                                    "<article>" +
                                       "<p>" + title + "</p>" +
                                       "<p>"+ body + "</p>" +
                                       "<input class = 'thumbsup' type = 'image' src='images/upvote.svg' width = 20 height = 20>" +
                                       "<input class = 'thumbsdown' type = 'image' src='images/downvote.svg' width = 20 height = 20>" +
                                       "<div class = 'ranking'>ranking: swill</div>" +
                                     "</article>" +
                                   "</li>");
}
