(function () {
  const buttons = document.querySelectorAll('[data-filter]');
  const posts = document.querySelectorAll('[data-tags]');
  const months = document.querySelectorAll('[data-month]');

  if (!buttons.length || !posts.length) return;

  function applyFilter(tag) {
    posts.forEach((post) => {
      const tags = post.dataset.tags.split('|');
      post.hidden = tag !== 'all' && !tags.includes(tag);
    });

    months.forEach((month) => {
      month.hidden = !month.querySelector('[data-tags]:not([hidden])');
    });

    buttons.forEach((button) => {
      const selected = button.dataset.filter === tag;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });
})();
