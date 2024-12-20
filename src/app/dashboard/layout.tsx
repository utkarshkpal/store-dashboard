import DashboardNav from "./dashboardNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardNav />

      {children}
    </div>
  );
}
