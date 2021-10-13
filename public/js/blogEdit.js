const editBlogHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#blogTitle').value.trim();
    const change = document.querySelector('#blogTitle').getAttribute("data-id");
    const body = document.querySelector('#blogBody').value.trim();

    if(event.submitter.name === "editBlog"){
        if (title && body) {
        const response = await fetch(`/api/blogs/edit/${change}`, {
            method: 'PUT',
            body: JSON.stringify({ title, body }),
            headers: {
            'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit blog!');
        }
        } else {
            alert('Missing title or contents!');
        }
    } else if (event.submitter.name === "deleteBlog"){
        if(window.confirm("Do you really want to DELETE this blog?"))
        {
            const response = await fetch(`/api/blogs/delete/${change}`, {
                method: 'DELETE',
            });
        
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to delete blog!');
            }
        }
    }
};
 
document
    .querySelector('#editBlogForum')
    .addEventListener('submit', editBlogHandler);


  