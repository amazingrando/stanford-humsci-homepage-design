# Stanford Humanities & Sciences Homepage

<https://humsci-home.netlify.app/>

This is a Next.js project for the Stanford Humanities & Sciences homepage, featuring multiple design rounds and a modern, responsive interface.

## Project Structure

The project follows a standard Next.js structure with some additional organization:

```
src/
├── app/              # Next.js app directory containing pages and layouts
│   ├── round-1/     # First round of design implementation
│   ├── round-2/     # Second round of design implementation
│   ├── layout.js    # Root layout component
│   └── page.js      # Homepage component
├── components/      # Reusable React components
├── data/           # Data files and content management
├── assets/         # Static assets like images and fonts
└── stories/        # Storybook stories for component documentation
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- The project uses Next.js 14 with the App Router
- Styling is handled through CSS modules and Tailwind CSS
- Component documentation is available through Storybook
- The project includes multiple design rounds in the `/app` directory for iterative development

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run storybook` - Launch Storybook for component development
- `npm run test` - Run tests using Vitest

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)

## Deployment

This project is configured for deployment on Netlify. The deployment process is automated through the Netlify platform.
