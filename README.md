# @avinash995/mfe-design-system

Shared React UI primitives for the NovaMart micro frontends. The theme is the
same one used by `mfe-shell`, so remotes rendered inside the shell match it
without any extra configuration.

Built on [Base UI](https://base-ui.com/) primitives with
[Tailwind CSS v4](https://tailwindcss.com/) tokens.

## Installation

```bash
npm install @avinash995/mfe-design-system
```

`react` and `react-dom` (v19+) are peer dependencies and must be provided by the
consuming app.

## Usage

Import the stylesheet once, at the entry point of the app or remote:

```ts
import "@avinash995/mfe-design-system/styles.css";
```

Then use the components:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@avinash995/mfe-design-system";

export function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aurora Headphones</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Add to cart</Button>
      </CardContent>
    </Card>
  );
}
```

### Exports

`Button`, `buttonVariants`, `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
`CardAction`, `CardContent`, `CardFooter`, `Input`, `Label`, `Badge`,
`badgeVariants`, `Separator`, and the `cn` class-merging helper.

## Typography

The theme's font stack is `"DM Sans", ui-sans-serif, system-ui, sans-serif`. The
font is intentionally **not** bundled, to avoid shipping a duplicate copy to
every remote — `mfe-shell` already loads it. A standalone app should load it
itself, for example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
  rel="stylesheet"
/>
```

Without it the stack falls back to the system UI font; nothing breaks.

## Theming

Colours, radii and fonts are exposed as CSS custom properties on `:root`, so a
consumer can override any of them after importing the stylesheet:

```css
:root {
  --primary: oklch(0.45 0.14 250);
  --radius: 0.625rem;
}
```

Dark mode is applied by adding the `dark` class to an ancestor element
(typically `<html>`).

## Local development

The Vite app in `src/App.tsx` is the component showcase. Run it when developing
components to review their variants, sizes, and theme behavior together.

```bash
npm run dev        # open the component showcase
npm run lint       # run static analysis
npm run build      # emit dist/index.js, dist/index.css and dist/index.d.ts
npm run pack:check # verify the files included in the npm package
```
