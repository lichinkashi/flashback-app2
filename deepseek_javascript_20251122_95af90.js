const localImages = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzhiMDAwMCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lbW9yeSAxPC90ZXh0Pgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMDBiOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lbW9yeSAyPC90ZXh0Pgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzhiNWMwMCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lbW9yeSAzPC90ZXh0Pgo8L3N2Zz4K'
];

let currentPhoto = 0;
let favorites = [];

document.addEventListener('DOMContentLoaded', function() {
    loadPhoto(currentPhoto);
    showStatus('Flashback загружен! 🎉');
});

function loadPhoto(index) {
    const photoElement = document.getElementById('currentPhoto');
    if (photoElement) {
        photoElement.src = localImages[index];
    }
}

function showStatus(message) {
    const statusBar = document.getElementById('statusBar');
    if (statusBar) {
        statusBar.textContent = message;
    }
}

function nextPhoto() {
    currentPhoto = (currentPhoto + 1) % localImages.length;
    loadPhoto(currentPhoto);
    showStatus('Следующее фото ➡️');
}

function prevPhoto() {
    currentPhoto = (currentPhoto - 1 + localImages.length) % localImages.length;
    loadPhoto(currentPhoto);
    showStatus('Предыдущее фото ⬅️');
}

function toggleReactions() {
    const panel = document.getElementById('reactionsPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
    }
}

function addReaction(emoji) {
    showStatus(`Реакция: ${emoji}`);
    const panel = document.getElementById('reactionsPanel');
    if (panel) {
        panel.style.display = 'none';
    }
}

function showScreen(screen) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    const screens = {
        'home': 'Главная',
        'search': 'Поиск',
        'favorites': 'Избранное',
        'timeline': 'Хронология',
        'settings': 'Настройки'
    };
    
    showStatus(`Открыт: ${screens[screen]}`);
}