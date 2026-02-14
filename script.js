// Cupid Quest - Interactive Story Game

const storyData = {
    start: {
        character: 'You',
        text: 'You meet Alexander on an app called Discord. The two of you start chatting—sharing memes, talking about your day, and slowly getting to know each other. There\'s something about this connection that feels special.',
        choices: [
            { text: 'Continue to get to know', next: 'getToKnowMore' },
            { text: 'Leave', next: 'leaveOnRead' }
        ]
    },

    leaveOnRead: {
        character: 'The End',
        text: 'You leave the conversation behind. The messages go unanswered. Slowly, the chat grows cold. You and Alexander leave each other on read and never talk again. The connection fades into nothing.',
        choices: [
            { text: 'Play Again?', next: 'start' }
        ]
    },

    getToKnowMore: {
        character: 'You & Alexander',
        text: 'You keep talking day after day. The conversation shifts to dating—what you both look for, your dream relationships, the little things that matter. You discover you have so much in common. Before long, you both feel that spark. The question hangs in the air: do you want to make this official?',
        choices: [
            { text: 'Agree to date official', next: 'officialCouple' },
            { text: 'Not a chance!', next: 'notAChance' }
        ]
    },

    notAChance: {
        character: 'You',
        text: 'You decide not to take that step. The energy between you shifts. Things aren\'t the same anymore. You and Alexander slowly drift apart, each going your separate ways.',
        choices: [
            { text: 'Play Again?', next: 'start' }
        ]
    },

    officialCouple: {
        character: 'You & Alexander',
        text: 'You both say yes! Joy floods through you as you become official. Your long-distance relationship blooms—late-night calls, voice messages, and countless Discord chats. You notice Valentine\'s Day is coming up. Alexander grins and asks, "Want to do a challenge? Whoever asks the other to be their Valentine first wins. What do you say?"',
        choices: [
            { text: 'Yes', next: 'acceptChallenge' },
            { text: 'No', next: 'declineChallenge' }
        ]
    },

    declineChallenge: {
        character: 'You & Alexander',
        text: 'You pass on the challenge. You and Alexander continue your happy relationship without the competition and not asking for being each valentines—just love, support, and endless chats.',
        choices: [
            { text: 'The End - Your Story Continues', next: 'happyEnding1' }
        ]
    },

    acceptChallenge: {
        character: 'You',
        text: 'You\'re in! You start planning your move—but Alexander is one step ahead. Your phone buzzes. Alexander has pulled you into a call and sent you a link. "Click it," they say. You do. The link opens to a beautiful surprise: Alexander\'s own way of asking you to be their Valentine. Your heart races. What will you say?',
        choices: [
            { text: 'Yes', next: 'valentineYes' },
            { text: 'No', next: 'valentineNo' }
        ]
    },

    valentineYes: {
        character: 'Alexander',
        text: 'Alexander\'s screen fills with emojis—hearts, bunnies, sparkles. Over the call, their voice bursts with joy: "YAY! I love you my beloved bunny. I wish to continue to have this relationship and life with you." You\'ve found something real.',
        choices: [
            { text: '💕 THE END - Your Love Story Begins 💕', next: 'happyEnding1' }
        ]
    },

    valentineNo: {
        character: 'Alexander',
        text: 'Alexander goes quiet. "Oh.. I see um... I\'m sorry, I will leave." The call ends. You watch them leave. No more messages. No responses. Alexander has gone, and you go your separate ways.',
        choices: [
            { text: 'Play Again?', next: 'start' }
        ]
    },

    happyEnding1: {
        character: 'THE END',
        text: '💕 Congratulations! You\'ve found love! 💕\n\nYou and Alexander are starting a beautiful journey together—chatting on Discord, falling in love from afar, and choosing each other. This is just the beginning of your story.\n\nThank you for playing Cupid Quest! Happy Valentine\'s Day! 💖',
        choices: [
            { text: 'Play Again?', next: 'start' }
        ]
    }
};

let currentScene = 'start';

function updateGame() {
    const scene = storyData[currentScene];
    
    // Update character name
    const characterInfo = document.getElementById('character-info');
    characterInfo.textContent = `${scene.character}:`;

    // Update story text
    const storyText = document.getElementById('story-text');
    storyText.textContent = scene.text;

    // Update choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-choice';
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.next;
            updateGame();
            window.scrollTo(0, 0);
        };
        choicesDiv.appendChild(button);
    });
}

// Restart button and initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('restart-btn').addEventListener('click', () => {
        currentScene = 'start';
        updateGame();
        window.scrollTo(0, 0);
    });
    updateGame();
});
