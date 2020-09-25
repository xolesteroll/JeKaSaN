
    function goSound() {
        var embed = document.createElement('embed');
        document.body.append(embed);
        embed.setAttribute('src', 'audio/melody.mp3');
        embed.setAttribute('type', 'audio/mp3');
        embed.setAttribute('autostart', 'true');
        embed.style.cssText = 'position: fixed; z-index: -1;';

    }
    goSound();