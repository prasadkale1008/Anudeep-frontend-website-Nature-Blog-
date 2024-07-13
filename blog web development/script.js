document.addEventListener('DOMContentLoaded', function() {
    const likeBtns = document.querySelectorAll('.like-btn');
    const dislikeBtns = document.querySelectorAll('.dislike-btn');

    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const post = this.dataset.post;
            const likesElement = document.getElementById(`${post}-likes`);
            let likes = parseInt(likesElement.textContent);
            likes++;
            likesElement.textContent = likes;
        });
    });

    dislikeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const post = this.dataset.post;
            const dislikesElement = document.getElementById(`${post}-dislikes`);
            let dislikes = parseInt(dislikesElement.textContent);
            dislikes++;
            dislikesElement.textContent = dislikes;
        });
    });
});