export const metadata = {
  title: "Parch - AI Shopping Agent",
  description: "Describe what you need. Parch hunts it down."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
