const deleteFormHandler = async (event) => {
  event.preventDefault();
  console.log(event.target);

  // const title = document.querySelector('#edit-title').value.trim();
  // const body = document.querySelector('#edit-content').value.trim();
  const id = event.target.dataset.id;
  console.log(id);

  if (id) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};
