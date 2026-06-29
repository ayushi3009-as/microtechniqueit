'use client';

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="card p-6 border border-border/50 bg-card rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Platform Configuration</h2>
        <p className="text-muted-foreground text-sm">
          Platform-wide settings and configurations will go here.
          Currently, commission rates and project assignments are handled directly on their respective pages.
        </p>
      </div>
    </div>
  );
}
