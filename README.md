# SRCL

**[Live Demo](https://sacred.computer)**

SRCL is an open-source React component and style repository that helps you build web applications, desktop applications, and static websites with terminal aesthetics. Its modular, easy-to-use components emphasize precise monospace character spacing and line heights, enabling you to quickly copy and paste implementations while maintaining a clean, efficient codebase.

## Installation

```sh
npm install
npm run dev
```

Go to `http://localhost:10000` in your browser of choice.

We use [Vercel](https://vercel.com/home) for hosting.

### Scripts (Optional)

If you need to run node script without running the server, use this example to get started

```sh
npm run script example
```

### Contact

If you have questions ping me on Twitter, [@wwwjim](https://www.twitter.com/wwwjim). Or you can ping [@internetxstudio](https://x.com/internetxstudio).

## NPM Package Installation
```sh
npm install srcl
```

### Importing Components

You can import components directly from the package:

```tsx
import { Button, Card, Input, Providers } from 'srcl';

// Import base styles
import 'srcl/style.css';

// Optional: Import global styles and fonts
import 'srcl/global.css';
import 'srcl/global-fonts.css';

const MyComponent = () => (
  <Providers>
    <Card>
      <Input placeholder="Type something..." />
      <Button theme="PRIMARY">Submit</Button>
    </Card>
  </Providers>
);
```

### CSS Requirements

Make sure to import the CSS file in your main entry point (e.g., `main.tsx` or `_app.tsx`):

```tsx
import 'srcl/style.css';
import 'srcl/global.css';
import 'srcl/global-fonts.css';
```
### Building the library

To build the library for distribution:

```bash
npm run build
```

This will generate the `dist` folder containing the compiled ESM and UMD bundles, as well as the TypeScript declaration files and the bundled CSS.