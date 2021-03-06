$saveButton.on('click', createIdea());

function createIdea (){
  new Idea($titleInput, Date.now(), 'swill', $bodyInput);
  prependIdea();
}

function prependIdea(){
  $ideaList.prepend("<li>" +
                                      "<article class='template'>" +
                                         "<input class = 'deleteButton' type = 'image' src='images/delete.svg' width = 20 height = 20>" +
                                         "<p>" + this.$titleInput + "</p>" +
                                         "<p>"+ this.$bodyInput + "</p>" +
                                         "<input class = 'thumbsUp' type = 'image' src='images/upvote.svg' width = 20 height = 20>" +
                                         "<input class = 'thumbsDown' type = 'image' src='images/downvote.svg' width = 20 height = 20>" +
                                         "<div class = 'ranking'>ranking: swill</div>" +
                                       "</article>" +
                                     "</li>");
}

function store(){
    localStorage.setItem('ideaStore', JSON.stringify(ideaStore));
}

function retrieve(){
  var retrieveIdeas = JSON.parse(localStorage.getItem('ideaStore'));
    if (retrieveIdeas)
      for(var i = 0; i < retrieveIdeas; i++){
        var idea = retrieveIdeas[i];
        ideaStore.push(new Idea(idea.name, idea.id, idea.quality, idea.body));
      }
}

//
// $(document).ready(function() {
//     var displayObject = JSON.parse(localStorage.getItem("ideaStore"));
//     if (displayObject) {
//       ideaStore = displayObject;}
//     loadIdeas();
// });
//
// function loadIdeas(){
//   for (var i = 0; i < ideaStore.length; i++) {
//     var storedIdea = ideaStore[i];
//
//     $("ul").append(
//       "<li>" +
//       "<article class='template'>" +
//       "<input class = 'deleteButton' type = 'image' src='images/delete.svg' width = 20 height = 20>" +
//       "<p>" + storedIdea.title + "</p>" +
//       "<p>"+ storedIdea.body + "</p>" +
//       "<input class = 'thumbsUp' type = 'image' src='images/upvote.svg' width = 20 height = 20>" +
//       "<input class = 'thumbsDown' type = 'image' src='images/downvote.svg' width = 20 height = 20>" +
//       "<div class = 'ranking'>ranking: swill</div>" +
//       "</article>" +
//       "</li>");
//     }
//   }
//
//
// function addIdea(){
//   var title = $titleInput;
//   var body = $bodyInput;
//   var creativeThought = new Idea();
//   ideaStore.push(creativeThought);
//   return $('.ideacontainer ul').prepend("<li>" +
//                                     "<article class='template'>" +
//                                        "<input class = 'deleteButton' type = 'image' src='images/delete.svg' width = 20 height = 20>" +
//                                        "<p>" + title + "</p>" +
//                                        "<p>"+ body + "</p>" +
//                                        "<input class = 'thumbsUp' type = 'image' src='images/upvote.svg' width = 20 height = 20>" +
//                                        "<input class = 'thumbsDown' type = 'image' src='images/downvote.svg' width = 20 height = 20>" +
//                                        "<div class = 'ranking'>ranking: swill</div>" +
//                                      "</article>" +
//                                    "</li>");
// }
//
// function Idea(title, body, id) {
//   this.title = $('.title').val();;
//   this.body = $('.body').val();
//   this.id = Date.now();
// }
//
// $('.save').on('click', function(){
//   addIdea();
//   commitToLocalStorage();
//   clearInputs();
// });
//
// function clearInputs() {
//   $('.title').val('');
//   $('.body').val('');
// }
//
// function commitToLocalStorage() {
//   localStorage.setItem("ideaStore", JSON.stringify(ideaStore)); }
//
//   $('.ideacontainer ul').on('click', '.deleteButton', function() {
//       $(this).parents('.template').remove();
// });


    // for (i=0; i<ideaStore.length;i++){
    //   $('.ideacontainer ul').prepend("<li>" +
    //                                     "<article>" +
    //                                        "<input class = 'deleteButton' type = 'image' src = 'images/delete.svg' width = 20 height = 20>" +
    //                                        "<p>" + title + "</p>" +
    //                                        "<p>"+ body + "</p>" +
    //                                        "<input class = 'thumbsup' type = 'image' src='images/upvote.svg' width = 20 height = 20>" +
    //                                        "<input class = 'thumbsdown' type = 'image' src='images/downvote.svg' width = 20 height = 20>" +
    //                                        "<div class = 'ranking'>ranking: swill</div>" +
    //                                      "</article>" +
    //                                    "</li>");
    // }


        // function thumbsUp {
        //     var
        // }
        //
        // $('.thumbsUp').on('click', function() {
        //
        // })
