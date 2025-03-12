const { generateArticle } = require('./generate-article');

const diverseTopics = [
    // Technology
    "The Future of Quantum Computing in 2024",
    "How AI is Revolutionizing Healthcare Diagnostics",
    "Web3 Gaming: The Next Evolution of Entertainment",
    
    // Business & Finance
    "The Rise of Sustainable Investing in Global Markets",
    "Digital Transformation Success Stories in Fortune 500 Companies",
    "Cryptocurrency Adoption in Traditional Banking",
    
    // Science & Health
    "Breakthrough Discoveries in Cancer Research",
    "Space Exploration: Private Companies Leading the Way",
    "Climate Change Solutions: Innovation in Green Technology",
    
    // Entertainment & Media
    "The Evolution of Streaming Services",
    "Virtual Reality in Film Production",
    "Social Media\\'s Impact on Modern Journalism",
    
    // Lifestyle & Culture
    "The Science Behind Plant-Based Diets",
    "Remote Work Culture: Global Trends and Best Practices",
    "Sustainable Fashion: Innovation Meets Responsibility",
    
    // Education & Career
    "The Future of Online Learning Platforms",
    "Skills Gap in the Tech Industry",
    "AI-Powered Career Development Tools",
    
    // Arts & Design
    "Digital Art Revolution: NFTs and Beyond",
    "Sustainable Architecture Trends",
    "AI in Creative Industries",
    
    // Society & Politics
    "Technology\\'s Role in Modern Democracy",
    "Digital Privacy in the Age of Big Data",
    "Smart Cities: Infrastructure of Tomorrow",
    
    // Innovation & Future
    "Flying Cars: From Science Fiction to Reality",
    "Brain-Computer Interfaces: The Next Frontier",
    "Renewable Energy Breakthroughs",
    
    // Sports & Gaming
    "eSports: The Billion-Dollar Gaming Industry",
    "Technology in Professional Sports Training",
    "Virtual Reality Fitness Revolution"
];

async function generateDiverseArticles() {
    console.log('Starting to generate diverse articles...');
    
    for (const topic of diverseTopics) {
        try {
            console.log(`\nGenerating article about: ${topic}`);
            const filename = await generateArticle(topic);
            console.log(`Successfully generated: ${filename}`);
            
            // Add a longer delay between articles to avoid rate limiting
            console.log('Waiting before generating next article...');
            await new Promise(resolve => setTimeout(resolve, 5000));
            
        } catch (error) {
            console.error(`Error generating article about ${topic}:`, error);
            // Continue with next topic even if one fails
            continue;
        }
    }
    
    console.log('\nFinished generating all articles!');
}

// Run if called directly
if (require.main === module) {
    generateDiverseArticles().catch(console.error);
}

module.exports = { generateDiverseArticles }; 