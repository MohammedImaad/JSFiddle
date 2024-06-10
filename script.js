function playMusic(genre) {
    switch (genre) {
        case 'Pop':
            window.open('https://www.example.com/pop-song.mp3');
            break;
        case 'Rock':
            window.open('https://www.example.com/rock-song.mp3');
            break;
        case 'Jazz':
            window.open('https://www.example.com/jazz-song.mp3');
            break;
        default:
            window.open('https://www.example.com/other-song.mp3');
    }
}
