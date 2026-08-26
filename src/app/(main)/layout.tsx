import BottomNav from "@/components/BottomNav";
import { requireUserId } from "@/lib/auth/guards";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await requireUserId();
  return (
    <>
      <main className="mx-auto w-full max-w-md px-4 pb-28 pt-4">{children}</main>
      <BottomNav />
    </>
  );
}
