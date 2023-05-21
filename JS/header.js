export function initializeHeader() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-inp');
    const closeBtn = document.getElementById('close-btn');

    searchBtn.addEventListener('click', toggleSearch);
    closeBtn.addEventListener('click', toggleSearch);
}

function toggleSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-inp');
    const closeBtn = document.getElementById('close-btn');

    searchBtn.style.display = searchBtn.style.display === 'none' ? 'block' : 'none';
    searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
    closeBtn.style.display = closeBtn.style.display === 'block' ? 'none' : 'block';
}


/*const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-inp');
const closeBtn = document.getElementById('close-btn');

searchBtn.addEventListener('click', toggleSearch);
closeBtn.addEventListener('click', toggleSearch);

function toggleSearch() {
    searchBtn.style.display = searchBtn.style.display === 'none' ? 'block' : 'none';
    searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
    closeBtn.style.display = closeBtn.style.display === 'block' ? 'none' : 'block';
}

// eski kod

searchBtn.addEventListener('click', () => {
    searchBtn.style.display = 'none';
    searchInput.style.display = 'block';
    closeBtn.style.display = 'block'
    searchInput.style.transition = 'visibility 0s linear 0.33s, opacity 0.33s linear';

});

closeBtn.addEventListener('click', () => {
    if (closeBtn.style.visibility == 'block') {
        searchBtn.style.display = 'block';
        searchInput.style.display = 'none';
        closeBtn.style.display = 'none'
    }
})
*/
