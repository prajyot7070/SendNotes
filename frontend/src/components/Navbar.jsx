export default function Navbar() {
    return (
      <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">SendNotes</h1>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40" 
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </nav>
    );
  }
  