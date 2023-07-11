const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#edit-title').value.trim();
    const body = document.querySelector('#edit-content').value.trim();
    const id = document.querySelector('#edit-id').dataset.id;
  
    if (title && content && id) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit blog');
      }
    }
  };
  
  document
    .querySelector('.edit-form')
    .addEventListener('submit', editFormHandler);
  