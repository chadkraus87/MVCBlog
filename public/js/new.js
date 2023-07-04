const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#content').value.trim();

  if (title && body) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const newPost = await response.json();
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

document.querySelector('#add-post-form').addEventListener('submit', newFormHandler);

// const appendPostToDashboard = (post) => {
//   const postTemplate = `
//   {{> single-post post}}
//   `;

//   const postContainer = document.querySelector('.post-container');
//   postContainer.insertAdjacentHTML('beforeend', postTemplate);
// };
