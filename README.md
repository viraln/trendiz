# Trendiz

A modern tech and lifestyle trends blog powered by AI, featuring dynamic content generation and a sleek user interface.

## Features

- AI-powered article generation
- Dynamic image fetching from Unsplash
- Integrated Google AdSense
- SEO optimized pages
- Mobile-responsive design
- Comment system with upvoting
- Article reactions

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/viraln/trendiz.git
cd trendiz
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your environment variables to `.env`

5. Run the development server:
```bash
yarn dev
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To deploy manually:

1. Build the site:
```bash
yarn build
```

2. The static files will be in the `out` directory

## Environment Variables

- `NEXT_PUBLIC_ADSENSE_CLIENT`: Your Google AdSense client ID
- `OPENROUTER_API_KEY`: API key for OpenRouter (article generation)
- `UNSPLASH_ACCESS_KEY`: API key for Unsplash (images)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 