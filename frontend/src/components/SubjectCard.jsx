export default function SubjectCard({ subject }) {
    return (
      <div className="w-56 h-56 p-6 bg-blue-700 text-white shadow-lg hover:shadow-xl cursor-pointer rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold text-center">{subject.subjectName}</h2>
        <p className="text-lg text-gray-300 text-center mt-2">({subject.subjectCode})</p>
      </div>
    );
  }
  