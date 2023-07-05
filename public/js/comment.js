const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment-text').value.trim();
  const blog_id = document.querySelector('#blog-id').value;

  if (comment_text && blog_id) {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ blog_id, comment_text }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error('Failed to create comment.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to create comment.');
    }
  }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
