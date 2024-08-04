function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentSection = document.getElementById('commentSection');

    if (commentInput.value.trim() !== "") {
        var newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        commentSection.appendChild(newComment);
        commentInput.value = "";
    }
}
