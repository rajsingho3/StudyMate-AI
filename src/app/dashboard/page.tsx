"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  MessageSquare, Upload, Flame, Clock, Folder, Database, Cpu, Network, GitBranch, Plus, Search, LayoutDashboard, Library, FileUp, Settings } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B061A] text-white">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col justify-between bg-linear-to-b from-[#0F0824] to-[#0B061A]">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="h-9 w-9 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center">🎓</div>
              StudyAI
            </div>

            <nav className="space-y-2">
              <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
              <SidebarItem icon={<MessageSquare size={18} />} label="AI Chat" />
              <SidebarItem icon={<Library size={18} />} label="Library" />
              <SidebarItem icon={<FileUp size={18} />} label="Uploads" />
            </nav>
          </div>

          <div className="space-y-4">
            <Separator className="bg-white/10" />
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">Alex Morgan</div>
                <div className="text-white/60 text-xs">Premium Plan</div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-8">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
            <div>
              <p className="text-white/50 text-sm">FALL SEMESTER 2024</p>
              <h1 className="text-3xl font-bold mt-1">Welcome back, Alex</h1>
              <p className="text-white/60 mt-1">Ready to study? Your knowledge base is synced and ready for queries.</p>
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
              <Input
                className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                placeholder="Search across notes & textbooks..."
              />
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard title="Total Documents" value="48" icon={<Folder />} gradient="from-purple-600/30 to-indigo-600/30" />
            <StatCard title="Study Streak" value="5 Days" icon={<Flame />} gradient="from-emerald-600/30 to-teal-600/30" />
            <StatCard title="Recent Queries" value="15" icon={<Clock />} gradient="from-amber-500/30 to-orange-500/30" />
          </div>

          {/* SUBJECTS */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Your Subjects</h2>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">View All →</Button>
          </div>

          <ScrollArea className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SubjectCard
                title="DBMS"
                subtitle="Database Management Systems"
                icon={<Database />}
                badge="14 Docs"
                badgeColor="bg-blue-500/20 text-blue-400"
                status="Synced just now"
              />
              <SubjectCard
                title="OS"
                subtitle="Operating Systems"
                icon={<Cpu />}
                badge="8 Docs"
                badgeColor="bg-orange-500/20 text-orange-400"
                status="Synced 2h ago"
              />
              <SubjectCard
                title="CN"
                subtitle="Computer Networks"
                icon={<Network />}
                badge="21 Docs"
                badgeColor="bg-purple-500/20 text-purple-400"
                status="High activity"
              />
              <SubjectCard
                title="DSA"
                subtitle="Data Structures & Algo"
                icon={<GitBranch />}
                badge="5 Docs"
                badgeColor="bg-emerald-500/20 text-emerald-400"
                status="Needs upload"
              />
            </div>
          </ScrollArea>

          {/* CREATE NEW */}
          <div className="mt-12">
            <button className="w-full border border-dashed border-white/20 rounded-2xl py-10 flex items-center justify-center gap-3 text-white/60 hover:border-purple-500 hover:text-purple-400 transition">
              <Plus /> Create New Subject Notebook
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SidebarItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition 
      ${active ? "bg-purple-600/20 text-purple-400" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value, icon, gradient }: { title: string; value: string; icon: React.ReactNode; gradient: string }) {
  return (
    <Card className="bg-white/5 border-white/10 relative overflow-hidden">
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} blur-2xl`} />
      <CardHeader className="relative">
        <CardTitle className="text-sm text-white/60">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative flex items-center justify-between">
        <div className="text-3xl font-bold">{value}</div>
        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">{icon}</div>
      </CardContent>
    </Card>
  );
}

function SubjectCard({
  title,
  subtitle,
  icon,
  badge,
  badgeColor,
  status,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  status: string;
}) {
  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition group">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="h-12 w-12 rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
          {icon}
        </div>
        <Button variant="ghost" size="icon" className="text-white/50 hover:text-white">⋮</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <Badge className={`${badgeColor}`}>{badge}</Badge>
          <span className="text-xs text-white/50">{status}</span>
        </div>

        <div className="flex gap-3 pt-2">
          <Button size="sm" className="bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90">
            <Upload size={16} /> Upload
          </Button>
          <Button size="sm" variant="secondary" className="bg-white/10 border-white/10 hover:bg-white/20">
            <MessageSquare size={16} /> Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
