export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-black to-zinc-900">
      {children}
    </div>
  );
}
