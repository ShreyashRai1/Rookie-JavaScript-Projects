const comment_ = {
    postit: function() {
        var input = document.getElementById('inp').value;
        if(input.trim() !== '') { // Check if the input is not empty or contains only spaces
            var newComment = document.createElement('h1');
            newComment.textContent = input;
            document.getElementById('comments').appendChild(newComment);
            document.getElementById('inp').value = ''; // Clear input after posting comment
        }
    },

    deleteit: function() {
        var commentsDiv = document.getElementById('comments');
        var lastComment = commentsDiv.lastElementChild;
        if(lastComment) { // Check if there's a comment to delete
            commentsDiv.removeChild(lastComment);
        }
    }
};

// Project 1 code modified vvvvvvvvvvvvvvvvvvvv

const txtmethods = {
    identifyvowel: function() {
        var input = document.getElementById('inp').value;
        var len = input.length;
        var characters = {};
        for (let i = 0; i < len; i++) {
            characters["char" + i] = input.charAt(i);
        }
        for (const key in characters) {
            console.log(characters[key]);
            if (characters[key] === 'a' || characters[key] === 'e' || characters[key] === 'i' || characters[key] === 'o' || characters[key] === 'u') {
                var input = "yes it has a vowel in "+" "+ key;
                var newComment = document.createElement('h1');
                newComment.textContent = input;
                document.getElementById('comments').appendChild(newComment);
                document.getElementById('inp').value = '';
            }
            else()=>{
                var input = "No it has no vowel";
                var newComment = document.createElement('h1');
                newComment.textContent = input;
                document.getElementById('comments').appendChild(newComment);
                document.getElementById('inp').value = '';
            }
        }
    }
};