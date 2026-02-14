const storyData = {
    title: "The Adventure of Alexander",
    characters: [
        { name: "Alexander", role: "Love Interest" },
        { name: "Me", role: "Main Character" }
    ],
    scenes: [
        {
            description: "You meet Alexander on an app called Discord. As you chat, you begin to feel a connection.",
            choices: [
                { text: "Continue to get to know", nextScene: 1 },
                { text: "Leave", nextScene: 2 }
            ]
        },
        {
            description: "You and Alexander talk more about your lives and discover a shared interest in dating. You both start to feel something more than friendship.",
            choices: [
                { text: "Agree to date official", nextScene: 3 },
                { text: "Not a chance!", nextScene: 4 }
            ]
        },
        {
            description: "You leave Alexander on read. The conversation fades, and you never speak again.",
            choices: []
        },
        {
            description: "You and Alexander are overjoyed to be officially dating. As Valentine's Day approaches, Alexander proposes a fun challenge: who will ask the other to be their Valentine first?",
            choices: [
                { text: "Yes", nextScene: 5 },
                { text: "No", nextScene: 6 }
            ]
        },
        {
            description: "You decide not to pursue a relationship. You and Alexander part ways, each going on your own path.",
            choices: []
        },
        {
            description: "You accept the challenge. As you plan your move, Alexander surprises you by pulling you into a call and sending a mysterious link. You click it and see his creative Valentine’s proposal.",
            choices: [
                { text: "Yes", nextScene: 7 },
                { text: "No", nextScene: 8 }
            ]
        },
        {
            description: "You decline the challenge. Alexander respects your decision, and the moment passes quietly.",
            choices: []
        },
        {
            description: "You say yes! Alexander cheers, spamming heart emojis in the chat. On the call, he exclaims, 'YAY! I love you my beloved bunny. I wish to continue to have this relationship and life with you.'",
            choices: []
        },
        {
            description: "You say no. Alexander pauses, then quietly says, 'Oh... I see um... I'm sorry I will leave.' He ends the call and disappears from your life.",
            choices: []
        }
    ]
};

export default storyData;
