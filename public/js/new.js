const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const newPost = await response.json();
      appendPostToDashboard(newPost);
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

document.querySelector('#add-post-form').addEventListener('submit', newFormHandler);

const appendPostToDashboard = (post) => {
  const postTemplate = `
  {{> single-post post}}
  `;

  const postContainer = document.querySelector('.post-container');
  postContainer.insertAdjacentHTML('beforeend', postTemplate);
};
