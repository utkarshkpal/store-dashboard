export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-brandlight p-4">
        <h1 className="text-2xl font-bold">Layout</h1>
      </div>
      {children}
    </div>
  );
}
