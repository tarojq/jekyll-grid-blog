document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, fetching posts...');
    const grid = document.getElementById('post-grid');
    const postsUrl = grid.getAttribute('data-posts-url');
    
    fetch(postsUrl)
        .then(response => response.json())
        .then(posts => createNodes(posts))
        .catch(error => {
            console.error('Error loading posts:', error);
            grid.innerHTML = 'Error loading posts: ' + error.message;
        });

    // Modal code
    const modal = document.getElementById('emailModal');
    const closeButton = document.querySelector('.close');
    let inactivityTimer;

    function showModal() {
        modal.style.display = 'flex';
    }

    function resetTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showModal, 10000);
    }

    ['mousemove', 'keydown', 'scroll', 'click'].forEach(event => {
        window.addEventListener(event, resetTimer);
    });

    resetTimer();

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        clearTimeout(inactivityTimer);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            clearTimeout(inactivityTimer);
        }
    });
});

function createNodes(posts) {
    const grid = document.querySelector('.project-nodes');
    
    posts.forEach(post => {
        const node = document.createElement('div');
        node.className = 'project-node';
        node.setAttribute('data-title', post.title);
        
        // Position node based on coordinates
        const x = post.coordinates ? post.coordinates[0] * 100 : 50;
        const y = post.coordinates ? post.coordinates[1] * 100 : 50;
        
        node.style.position = 'absolute';
        node.style.left = x + '%';
        node.style.top = y + '%';
        
        node.addEventListener('click', () => {
            window.location.href = post.url;
        });
        
        grid.appendChild(node);
    });
} 