document.addEventListener('DOMContentLoaded', (event) => {
    loadComments();
});

function addComment() {
    var nameInput = document.getElementById('nameInput');
    var commentInput = document.getElementById('commentInput');
    var commentSection = document.getElementById('commentSection');

    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        var newComment = document.createElement('p');
        newComment.innerHTML = `<strong>${nameInput.value}:</strong> ${commentInput.value}`;
        commentSection.appendChild(newComment);
        saveComment(nameInput.value, commentInput.value);
        nameInput.value = "";
        commentInput.value = "";
    }
}

function saveComment(name, comment) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name: name, comment: comment });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentSection = document.getElementById('commentSection');

    comments.forEach(comment => {
        var newComment = document.createElement('p');
        newComment.innerHTML = `<strong>${comment.name}:</strong> ${comment.comment}`;
        commentSection.appendChild(newComment);
    });
}
