import SubjectCard from "./SubjectCard";

export default function HomePage({ subjects, setIsModalOpen }) {
  return (
    <div className="flex-1 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject} />
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-56 h-56 flex justify-center items-center bg-blue-600 text-white text-4xl rounded-lg shadow-lg hover:bg-blue-700"
        >
          +
        </button>
      </div>
    </div>
  );
}
