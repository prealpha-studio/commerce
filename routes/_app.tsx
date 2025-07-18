import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>alpha prototype -- 2025</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-black">
        <Component />
      </body>
    </html>
  );
}
