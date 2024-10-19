import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Toaster/>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
