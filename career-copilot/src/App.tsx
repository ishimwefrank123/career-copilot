import { useState } from "react";
import JobSeeker from "./pages/JobSeeker";
import Recruiter from "./pages/Recruiter";
import { Bell, User } from "lucide-react"; // icons

function App() {
  const [role, setRole] = useState<"jobseeker" | "recruiter" | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Career Copilot</h1>
        <div className="flex space-x-4 items-center">
          <Bell className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 flex flex-col items-center justify-center">
        {!role && (
          <div className="flex flex-col items-center space-y-16">
            {/* Job Seeker Option */}
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600"
                onClick={() => setRole("jobseeker")}
              >
                Job Seeker
              </button>
              <ul className="mt-4 text-gray-700 text-center space-y-1">
                <li>📄 Summarize job posts</li>
                <li>✍️ Generate applications</li>
                <li>📰 Summarize articles</li>
                <li>🌍 Translate contracts</li>
              </ul>
            </div>

            {/* Recruiter Option */}
            <div className="flex flex-col items-center">
              <button
                className="bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600"
                onClick={() => setRole("recruiter")}
              >
                Recruiter
              </button>
              <ul className="mt-4 text-gray-700 text-center space-y-1">
                <li>📊 Manage applicants</li>
                <li>⭐ Rank candidates</li>
                <li>📩 Send feedback emails</li>
                <li>📝 Keep notes</li>
              </ul>
            </div>
          </div>
        )}

        {role === "jobseeker" && <JobSeeker />}
        {role === "recruiter" && <Recruiter />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 Career Copilot | About | Contact | GitHub Repo
      </footer>
    </div>
  );
}

export default App;
