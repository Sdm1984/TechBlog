const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const title = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && description) {
    if (title && description) {
      const response = await fetch(`/api/tech`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/tech/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);