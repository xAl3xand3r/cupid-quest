// Cupid Quest - Interactive Story Game

const storyData = {
    start: {
        character: 'Narrator',
        text: 'Welcome to Cupid Quest! You are Cupid, on a mission to deliver love and happiness. Your heart has been captured by someone special... Jermany. Will you find the courage to confess your feelings?',
        choices: [
            { text: 'Yes, let\'s start this adventure!', next: 'meetJermany' },
            { text: 'I need more time to prepare...', next: 'prepare' }
        ]
    },

    meetJermany: {
        character: 'You',
        text: 'You take a deep breath and decide to approach Jermany at the Valentine\'s Day festival.',
        choices: [
            { text: 'Give Jermany a compliment', next: 'compliment' },
            { text: 'Ask Jermany about their interests', next: 'askInterests' }
        ]
    },

    prepare: {
        character: 'You',
        text: 'You decide to gather your courage and learn more about what Jermany loves. You spend time preparing the perfect moment.',
        choices: [
            { text: 'Plan a romantic gesture', next: 'romanticGesture' },
            { text: 'Write a heartfelt letter', next: 'writeLetter' }
        ]
    },

    compliment: {
        character: 'Jermany',
        text: 'Jermany smiles warmly at your kind words. "Thank you! That\'s so sweet of you to say. I\'ve always admired your kindness too."',
        choices: [
            { text: 'Ask Jermany out on a date', next: 'dateProposal' },
            { text: 'Share your feelings about them', next: 'shareFeeling' }
        ]
    },

    askInterests: {
        character: 'Jermany',
        text: 'Jermany\'s eyes light up as they talk about their passions. "I love exploring new places, trying new foods, and spending time with people who make me laugh. What about you?"',
        choices: [
            { text: 'Share your interests and find common ground', next: 'commonGround' },
            { text: 'Ask them out to explore together', next: 'exploreDate' }
        ]
    },

    romanticGesture: {
        character: 'You',
        text: 'You arrange a beautiful picnic at sunset with Jermany\'s favorite snacks and flowers. When they arrive, their face lights up with genuine happiness.',
        choices: [
            { text: 'Tell Jermany how you feel', next: 'confession' },
            { text: 'Let the moment speak for itself', next: 'silentMoment' }
        ]
    },

    writeLetter: {
        character: 'You',
        text: 'You pour your heart into a letter, expressing all the things you admire about Jermany. You leave it for them to find...',
        choices: [
            { text: 'Wait for their response', next: 'letterResponse' },
            { text: 'Follow up with a conversation', next: 'followUpConvo' }
        ]
    },

    dateProposal: {
        character: 'Jermany',
        text: 'Jermany\'s cheeks flush with excitement. "I\'d absolutely love to! I was hoping you\'d ask."',
        choices: [
            { text: 'Plan the perfect date', next: 'perfectDate' },
            { text: 'Suggest a casual hangout', next: 'casualDate' }
        ]
    },

    shareFeeling: {
        character: 'You',
        text: 'You take a leap of faith and tell Jermany everything you\'ve been feeling. Your heart is pounding as you wait for their response...',
        choices: [
            { text: 'Wait to hear what they say', next: 'jermanyResponse' },
            { text: 'Offer them time to think', next: 'giveTime' }
        ]
    },

    commonGround: {
        character: 'You & Jermany',
        text: 'You discover you have so much in common! The conversation flows naturally, and Jermany suggests, "Maybe we should explore those places together sometime?"',
        choices: [
            { text: 'Eagerly accept and plan', next: 'planAdventure' },
            { text: 'Play it cool but interested', next: 'coolResponse' }
        ]
    },

    exploreDate: {
        character: 'Jermany',
        text: 'Jermany\'s face lights up. "I\'d love that! There\'s this amazing hiking trail I\'ve been wanting to explore. Want to go next weekend?"',
        choices: [
            { text: 'Say yes immediately', next: 'hikingDate' },
            { text: 'Suggest a different activity', next: 'altActivity' }
        ]
    },

    confession: {
        character: 'You',
        text: 'Under the stars, with the gentle breeze carrying the scent of flowers, you confess your feelings to Jermany. "I\'ve cared about you for a long time, and I wanted to tell you tonight."',
        choices: [
            { text: 'Await their response with hope', next: 'confession_response' },
            { text: 'Give them space to respond', next: 'giveResponse' }
        ]
    },

    silentMoment: {
        character: 'Jermany',
        text: 'As you sit together in the fading light, Jermany takes your hand and says softly, "I think I\'ve been waiting for this moment for a long time."',
        choices: [
            { text: 'Hold their hand tighter and smile', next: 'embrace' },
            { text: 'Express your feelings verbally', next: 'verbalConfess' }
        ]
    },

    letterResponse: {
        character: 'Jermany',
        text: 'Days later, you receive a beautiful response from Jermany. They confess that they\'ve felt the same way and were too shy to say it first. "Can we talk about this in person?" they ask.',
        choices: [
            { text: 'Meet them immediately', next: 'meeting' },
            { text: 'Suggest a special place to talk', next: 'specialPlace' }
        ]
    },

    followUpConvo: {
        character: 'You & Jermany',
        text: 'You gather courage and call Jermany to talk about the letter. When they hear your voice, they immediately say, "I got your letter. I\'ve been waiting for you to reach out to me."',
        choices: [
            { text: 'Arrange to meet', next: 'meeting' },
            { text: 'Have the conversation right then', next: 'phoneConfession' }
        ]
    },

    perfectDate: {
        character: 'You',
        text: 'You plan an evening filled with activities Jermany loves. As the night progresses, you realize this is the perfect moment to be honest about your feelings.',
        choices: [
            { text: 'Confess your feelings', next: 'confession' },
            { text: 'Ask if they feel the same way', next: 'askFeeling' }
        ]
    },

    casualDate: {
        character: 'You & Jermany',
        text: 'You decide on a casual coffee date. The conversation flows so naturally that it feels like you\'ve known each other forever. Jermany leans forward and says, "I really like spending time with you."',
        choices: [
            { text: 'Express that you feel the same', next: 'mutualInterest' },
            { text: 'Ask them to be your Valentine', next: 'beMyValentine' }
        ]
    },

    jermanyResponse: {
        character: 'Jermany',
        text: 'Jermany\'s eyes glisten as they say, "I feel the same way. I\'ve been hoping you\'d tell me because I was too nervous to say it first. Yes, a thousand times yes!"',
        choices: [
            { text: 'Kiss them (if you dare!)', next: 'firstKiss' },
            { text: 'Embrace them warmly', next: 'embrace' }
        ]
    },

    giveTime: {
        character: 'Jermany',
        text: 'Jermany appreciates your respect for their feelings. After a few days of reflection, they reach out to you: "I\'ve had time to think, and I realized I feel the same way about you."',
        choices: [
            { text: 'Plan your first official date', next: 'officialDate' },
            { text: 'Celebrate this moment together', next: 'celebration' }
        ]
    },

    planAdventure: {
        character: 'You & Jermany',
        text: 'Together, you start planning exciting adventures. As you explore the world together, your connection deepens, and it becomes clear that this is the beginning of something beautiful.',
        choices: [
            { text: 'Continue the adventure', next: 'happyEnding1' }
        ]
    },

    coolResponse: {
        character: 'You',
        text: 'You play it cool while internally buzzing with excitement. Jermany grins and says, "I like your confidence. So, are we doing this adventure?"',
        choices: [
            { text: 'Say yes and start planning', next: 'planAdventure' },
            { text: 'Suggest meeting up soon', next: 'soondMeeting' }
        ]
    },

    hikingDate: {
        character: 'You & Jermany',
        text: 'The hiking date is perfect. As you reach the summit and watch the sunset together, Jermany takes your hand and smiles. "I\'m really glad you said yes to this."',
        choices: [
            { text: 'Confess your deeper feelings', next: 'confession' },
            { text: 'Suggest making this a regular thing', next: 'regularThing' }
        ]
    },

    altActivity: {
        character: 'You',
        text: 'You suggest visiting the art gallery you\'ve been wanting to explore. Jermany\'s face lights up. "I love that idea! I didn\'t know you were into art too!"',
        choices: [
            { text: 'Spend the day exploring together', next: 'artDate' },
            { text: 'Use this as a chance to connect deeper', next: 'deeperConnection' }
        ]
    },

    confirmation_response: {
        character: 'Jermany',
        text: 'With tears of joy in their eyes, Jermany says, "I\'ve been waiting to hear you say that. I care about you too, more than you know."',
        choices: [
            { text: 'Celebrate this moment', next: 'happyEnding1' }
        ]
    },

    giveResponse: {
        character: 'Jermany',
        text: 'Jermany takes a moment, then softly says, "Thank you for being brave enough to tell me. I feel the same way about you."',
        choices: [
            { text: 'Celebrate together', next: 'happyEnding1' }
        ]
    },

    embrace: {
        character: 'You & Jermany',
        text: 'You hold each other under the stars, knowing that this moment is the beginning of your love story. Jermany whispers, "I choose you, always."',
        choices: [
            { text: 'The End - Your Love Story Begins!', next: 'happyEnding1' }
        ]
    },

    verbalConfess: {
        character: 'You',
        text: 'You tell Jermany everything you\'ve been feeling. They smile and say, "I\'ve been waiting for you to say this. I choose you, and I\'ll keep choosing you."',
        choices: [
            { text: 'Begin Your Love Story', next: 'happyEnding1' }
        ]
    },

    meeting: {
        character: 'You & Jermany',
        text: 'You meet at a beautiful, meaningful place. When you see each other, all nervousness melts away. Jermany runs toward you and says, "I\'m so glad you\'re here."',
        choices: [
            { text: 'Confess your love fully', next: 'fullConfession' }
        ]
    },

    specialPlace: {
        character: 'You',
        text: 'You suggest meeting at the place where you first met, making it extra special. When Jermany arrives, they bring flowers and a shy smile.',
        choices: [
            { text: 'Have an honest conversation about your feelings', next: 'honest_convo' }
        ]
    },

    phoneConfession: {
        character: 'You & Jermany',
        text: 'Over the phone, you both pour your hearts out. Jermany says, "I don\'t care if we\'re not in person right now. I need you to know that I\'m falling for you, and I want to see where this goes."',
        choices: [
            { text: 'Plan to meet in person soon', next: 'inPersonSoon' }
        ]
    },

    askFeeling: {
        character: 'Jermany',
        text: 'Jermany looks into your eyes and says, "I was actually wondering if you feel the same way about me."',
        choices: [
            { text: 'Admit your feelings completely', next: 'fullConfession' }
        ]
    },

    mutualInterest: {
        character: 'You & Jermany',
        text: 'Jermany\'s face glows with happiness. "I\'m so relieved to hear that. I\'ve been trying to find the right moment to tell you how I feel about you."',
        choices: [
            { text: 'Ask them to be your Valentine officially', next: 'beMyValentine' }
        ]
    },

    beMyValentine: {
        character: 'You',
        text: 'You take a deep breath and ask, "Jermany, will you be my Valentine? Not just for today, but always?"',
        choices: [
            { text: 'Wait for their answer', next: 'valentineAnswer' }
        ]
    },

    officialDate: {
        character: 'You & Jermany',
        text: 'Your first official date is magical. You both know that this is just the beginning of something wonderful. Jermany says, "I\'m so happy I found you."',
        choices: [
            { text: 'The Beginning of Your Love Story', next: 'happyEnding1' }
        ]
    },

    celebration: {
        character: 'You & Jermany',
        text: 'You celebrate this beautiful moment together. The world feels right when you\'re with Jermany. They say, "Thank you for being patient with me. I\'m all in now."',
        choices: [
            { text: 'Build Your Future Together', next: 'happyEnding1' }
        ]
    },

    regularThing: {
        character: 'Jermany',
        text: 'Jermany laughs and agrees. Over time, these adventures become your tradition, and your bond grows stronger with every moment spent together.',
        choices: [
            { text: 'Watch Your Love Grow', next: 'happyEnding1' }
        ]
    },

    artDate: {
        character: 'You & Jermany',
        text: 'Walking through the gallery together, discussing art and dreams, you realize that Jermany is your favorite work of art. They feel the same about you.',
        choices: [
            { text: 'Continue Building Your Story', next: 'happyEnding1' }
        ]
    },

    deeperConnection: {
        character: 'You & Jermany',
        text: 'The art galleries\'s beauty is nothing compared to the connection growing between you two. By the end of the day, Jermany says, "I think I\'m falling for you."',
        choices: [
            { text: 'Admit you\'re falling too', next: 'fullConfession' }
        ]
    },

    soondMeeting: {
        character: 'Jermany',
        text: 'Jermany grins. "How about this weekend? I want to spend more time with you."',
        choices: [
            { text: 'Plan your adventure', next: 'planAdventure' }
        ]
    },

    fullConfession: {
        character: 'You',
        text: 'You look into Jermany\'s eyes and say, "I love you. I\'ve been falling for you since the moment I met you, and I want to build a life with you."',
        choices: [
            { text: 'Hear their response', next: 'loveResponse' }
        ]
    },

    honest_convo: {
        character: 'You & Jermany',
        text: 'Under the soft glow of the sunset, you both confess your true feelings. Jermany takes your hand and says, "I choose you. Always."',
        choices: [
            { text: 'Your Love Story Begins', next: 'happyEnding1' }
        ]
    },

    inPersonSoon: {
        character: 'You & Jermany',
        text: 'You arrange to meet the next day. When you see each other in person, all the feelings you\'ve been expressing suddenly become real, and the kiss you share is everything you both dreamed of.',
        choices: [
            { text: 'Live Your Love Story', next: 'happyEnding1' }
        ]
    },

    valentineAnswer: {
        character: 'Jermany',
        text: '"Yes, a thousand times yes! I love you, and I want to spend every Valentine\'s Day with you, and every day in between."',
        choices: [
            { text: 'THE END - Your Love Story is Just Beginning', next: 'happyEnding1' }
        ]
    },

    loveResponse: {
        character: 'Jermany',
        text: '"I love you too. I\'ve been waiting for you to say it. You are my greatest adventure, and I want to face the world with you by my side."',
        choices: [
            { text: '💕 THE END - Your Love Story Begins 💕', next: 'happyEnding1' }
        ]
    },

    happyEnding1: {
        character: 'THE END',
        text: '💕 Congratulations! You\'ve found love! 💕\n\nYou and Jermany are starting a beautiful journey together. Your courage to be vulnerable and honest has led you to true love. This is just the beginning of your story.\n\nThank you for playing Cupid Quest! Happy Valentine\'s Day! 💖',
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

// Restart button
document.getElementById('restart-btn').addEventListener('click', () => {
    currentScene = 'start';
    updateGame();
    window.scrollTo(0, 0);
});

// Initialize game
updateGame();
