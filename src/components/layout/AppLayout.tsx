import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
        <footer className="border-t border-border px-6 py-4 text-xs text-muted-foreground">
          <p>
            This platform is built by students under structured training programs. 
            <span className="ml-1 text-foreground/70">Talenciaglobal</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
