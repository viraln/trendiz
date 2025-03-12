const { generateArticle } = require('./generate-article');

const topics = [
  'AI in Healthcare 2024',
  'Web3 Gaming Trends',
  'Green Tech Innovations',
  'Quantum Computing Breakthroughs',
  'Future of Remote Work Tech',
  'Cybersecurity in IoT',
  'AR/VR in Education',
  'Sustainable Cloud Computing',
  'AI-Powered DevOps',
  'Tech Ethics and Privacy'
];

async function generateMultipleArticles() {
  console.log('Starting to generate multiple articles...');
  
  for (const topic of topics) {
    try {
      console.log(`\nGenerating article about: ${topic}`);
      const filename = await generateArticle(topic);
      console.log(`Successfully generated: ${filename}`);
    } catch (error) {
      console.error(`Error generating article about ${topic}:`, error);
    }
    
    // Add a delay between articles to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\nFinished generating all articles!');
}

// Run if called directly
if (require.main === module) {
  generateMultipleArticles().catch(console.error);
}

module.exports = { generateMultipleArticles }; 