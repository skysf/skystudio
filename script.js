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
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfAAsM3X84xNV-SbTSgKi12t7BxZmd6UoEFYr8OYdjKOHRQiw/viewform?usp=dialog", // Add your newsletter link here later
        style: "standard"
    }
];

// LOGIC: Do not touch below this line unless you are coding
const listContainer = document.getElementById('link-list');

// LOGIC: Updated to support icons for featured links
links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = `link-card ${link.style}`;
    a.target = "_blank"; 

    // Add the fire icon ONLY if the style is 'featured'
    if (link.style === "featured") {
        a.innerHTML = `<span class="hot-icon">🔥</span>${link.title}`;
    } else {
        a.innerText = link.title;
    }
    
    listContainer.appendChild(a);
});
