const newBlogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogTitle').value.trim();
    const body = document.querySelector('#blogBody').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/blogs/create`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog!');
      }
    } else {
        alert('Missing title or contents!');
    }
};
  
   
document
    .querySelector('#createBlogForum')
    .addEventListener('submit', newBlogHandler);

  