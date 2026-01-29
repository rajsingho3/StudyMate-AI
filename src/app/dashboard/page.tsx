import StudyMateLogoIcon from "@/app/components/ui/Study";
import { getCurrentUser } from "@/lib/getCurrentUser";
import UserAvatarDropdown from "@/app/components/app/UserAvatar";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen w-full bg-[#0B061A] text-white">
      <div className="mt-4 mx-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 text-xl font-bold group">
          <StudyMateLogoIcon />
          <span>
            Study <span className="text-purple-500">Mate</span> AI
          </span>
        </div>

        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-400">Welcome back</p>
              <p className="font-semibold">{user.name}</p>
            </div>

            <UserAvatarDropdown user={user} />
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
}
