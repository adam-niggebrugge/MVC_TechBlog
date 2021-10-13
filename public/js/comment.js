const newCommentHandler = async (event) => {
    event.preventDefault();

    const passedbody = document.querySelector('#comment').value.trim();
    const passAtt = document.querySelector("#title").getAttribute("data-id");

    if (passedbody && passAtt) {
      const response = await fetch(`/api/comment/create`, {
        method: 'POST',
        body: JSON.stringify({ body:passedbody, att: passAtt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogs/${passAtt}`);
      } else {
        alert('Server failed to record comment.');
      }
    } else {
        alert('No comment given, nothing to submit!');
    }
  };
  
   
document
    .querySelector('#comment-form')
    .addEventListener('submit', newCommentHandler);

  