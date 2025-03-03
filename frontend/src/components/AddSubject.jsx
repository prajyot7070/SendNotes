import { useState } from "react";

export default function AddSubject({ setIsModalOpen, addSubject }) {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  const handleCreateSubject = () => {
    if (subjectName.trim() && subjectCode.trim()) {
      addSubject({ subjectName, subjectCode });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Subject</h2>
        <input
          type="text"
          placeholder="Subject Name"
          className="w-full border p-2 mb-3"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject Code"
          className="w-full border p-2 mb-3"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
        />
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateSubject}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
