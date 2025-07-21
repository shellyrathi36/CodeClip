document.addEventListener('DOMContentLoaded', () => {
  // --- SAMPLE DATA ---
  const allChallenges = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', language: 'JavaScript', status: 'completed' },
    { id: 2, title: 'Reverse a String', difficulty: 'Easy', language: 'Python', status: 'in-progress' },
    { id: 3, title: 'Longest Substring', difficulty: 'Medium', language: 'JavaScript', status: 'todo' },
    { id: 4, title: 'Median of Two Arrays', difficulty: 'Hard', language: 'Java', status: 'todo' },
    { id: 5, title: 'FizzBuzz', difficulty: 'Easy', language: 'JavaScript', status: 'completed' },
    { id: 6, title: 'Valid Parentheses', difficulty: 'Medium', language: 'Python', status: 'in-progress' },
  ];

  // --- DOM ELEMENTS ---
  const searchBar = document.getElementById('search-bar');
  const difficultyFilter = document.getElementById('difficulty-filter');
  const languageFilter = document.getElementById('language-filter');
  const statusFilter = document.getElementById('status-filter');
  const resetBtn = document.getElementById('reset-filters');
  const challengesContainer = document.getElementById('challenges-container');

  // --- FILTER STATE ---
  let filters = {
    searchTerm: '',
    difficulty: 'all',
    language: 'all',
    status: 'all'
  };

  // --- RENDER FUNCTION ---
  const renderChallenges = (challenges) => {
    challengesContainer.innerHTML = '';

    if (challenges.length === 0) {
        challengesContainer.innerHTML = '<p>No challenges match your criteria.</p>';
        return;
    }

    challenges.forEach(challenge => {
      const card = document.createElement('div');
      card.className = 'challenge-card';
      card.innerHTML = `
        <h3>${challenge.title}</h3>
        <p><strong>Language:</strong> ${challenge.language}</p>
        <p><strong>Difficulty:</strong> ${challenge.difficulty}</p>
        <p><strong>Status:</strong> ${challenge.status}</p>
      `;
      challengesContainer.appendChild(card);
    });
  };

  // --- FILTERING LOGIC ---
  const applyFilters = () => {
    let filtered = [...allChallenges];

    if (filters.searchTerm) {
      filtered = filtered.filter(c => c.title.toLowerCase().includes(filters.searchTerm));
    }
    if (filters.difficulty !== 'all') {
      filtered = filtered.filter(c => c.difficulty === filters.difficulty);
    }
    if (filters.language !== 'all') {
      filtered = filtered.filter(c => c.language === filters.language);
    }
    if (filters.status !== 'all') {
      filtered = filtered.filter(c => c.status === filters.status);
    }

    renderChallenges(filtered);
  };

  // --- EVENT LISTENERS ---
  searchBar.addEventListener('input', event => {
    filters.searchTerm = event.target.value.toLowerCase();
    applyFilters();
  });

  difficultyFilter.addEventListener('change', event => {
    filters.difficulty = event.target.value;
    applyFilters();
  });

  languageFilter.addEventListener('change', event => {
    filters.language = event.target.value;
    applyFilters();
  });

  statusFilter.addEventListener('change', event => {
    filters.status = event.target.value;
    applyFilters();
  });

  resetBtn.addEventListener('click', () => {
    filters = { searchTerm: '', difficulty: 'all', language: 'all', status: 'all' };

    searchBar.value = '';
    difficultyFilter.value = 'all';
    languageFilter.value = 'all';
    statusFilter.value = 'all';
    
    applyFilters();
  });

  // --- INITIAL RENDER ---
  applyFilters();
});