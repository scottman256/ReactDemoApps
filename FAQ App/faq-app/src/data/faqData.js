const faqData = [
  {
    id: 1,
    question: 'What is Tailwind CSS?',
    answer:
      'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. It allows for rapid UI development without leaving your HTML, making it incredibly fast to build and maintain websites.',
  },
  {
    id: 2,
    question: "What's new in Tailwind CSS v4.0?",
    answer:
      "Tailwind CSS v4.0 introduces lightning-fast build times, simplified configuration, improved developer experience, and enhanced customization options. It features a completely rewritten engine that's up to 10x faster, improved container queries, and a redesigned CLI for a better development workflow.",
  },
  {
    id: 3,
    question: 'How do I install Tailwind CSS in my project?',
    answer:
      "You can install Tailwind CSS via npm by running 'npm install -D tailwindcss' and then initializing it with 'npx tailwindcss init'. Then configure your template paths in the tailwind.config.js file and add the Tailwind directives to your CSS file.",
  },
  {
    id: 4,
    question: 'Is Tailwind CSS compatible with React?',
    answer:
      "Yes, Tailwind CSS works perfectly with React and other JavaScript frameworks. You can use Tailwind's utility classes directly in your JSX elements. For React projects, you might want to use the @tailwindcss/postcss7-compat version if you're using Create React App without ejecting.",
  },
  {
    id: 5,
    question: 'Can I customize the default theme in Tailwind CSS?',
    answer:
      'Absolutely! Tailwind CSS is designed to be customizable. You can extend or override the default theme by modifying the theme section in your tailwind.config.js file. This includes colors, spacing, breakpoints, fonts, and more to match your design requirements.',
  },
  {
    id: 6,
    question: 'How does Tailwind handle responsive design?',
    answer:
      "Tailwind uses a mobile-first approach with responsive modifiers like sm:, md:, lg:, xl:, and 2xl: that can be added to any utility class. For example, 'md:flex' will apply flex only on medium screens and above. This makes creating responsive layouts intuitive and straightforward.",
  },
  {
    id: 7,
    question: 'Does Tailwind increase my final bundle size?',
    answer:
      "While Tailwind's development build is large, it uses PurgeCSS in production to scan your template files and remove unused CSS. This results in very small file sizes in production. With Tailwind v4.0, the bundling process is even more efficient, resulting in smaller CSS output.",
  },
]

export default faqData
