document.addEventListener('DOMContentLoaded', (event) => {
    loadComments();
});

function addComment() {
    var nameInput = document.getElementById('nameInput');
    var commentInput = document.getElementById('commentInput');

    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        var newComment = {
            name: nameInput.value,
            comment: commentInput.value,
            timestamp: Date.now()
        };
        // Simpan komentar ke Firebase
        firebase.database().ref('comments').push(newComment);
        nameInput.value = "";
        commentInput.value = "";
    }
}

function loadComments() {
    var commentSection = document.getElementById('commentSection');
    firebase.database().ref('comments').on('value', (snapshot) => {
        commentSection.innerHTML = '<h3>Komentar:</h3>';
        snapshot.forEach((childSnapshot) => {
            var comment = childSnapshot.val();
            var newComment = document.createElement('p');
            newComment.innerHTML = `<strong>${comment.name}:</strong> ${comment.comment}`;
            commentSection.appendChild(newComment);
        });
    });
}
