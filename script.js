// CONFIGURATION: Update your links here
const links = [
    {
        title: "🎬 AI Filmmaking Bootcamp (Launch Discount)",
        url: "https://www.udemy.com/course/draft/6918779/?referralCode=DD57A5DDD1574C8A7AF2", // UPDATE THIS WITH PUBLIC LINK LATER
        style: "featured" // Options: "featured" or "standard"
    },
    {
        title: "📺 Subscribe on YouTube",
        url: "https://www.youtube.com/@SkyStudio_AI",
        style: "standard"
    },
    {
        title: "✖️ Follow on X (Twitter)",
        url: "https://x.com/thatskylu",
        style: "standard"
    },
    {
        title: "📧 Join Newsletter (Waitlist)",
        url: "#", // Add your newsletter link here later
        style: "standard"
    }
];

// LOGIC: Do not touch below this line unless you are coding
const listContainer = document.getElementById('link-list');

links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = `link-card ${link.style}`;
    a.target = "_blank"; 
    a.innerText = link.title;
    
    listContainer.appendChild(a);
});
