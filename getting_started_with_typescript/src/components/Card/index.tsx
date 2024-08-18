interface Subject {
  name: string;
  code: string;
  professor: string;
  schedule: string;
}

interface CardProps {
  subject: Subject;
}

function Card({ subject }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="font-bold text-xl mb-4">{subject.name}</div>

      <span className="flex items-center text-gray-700 mb-2">
        <p className="text-base font-bold mr-2">
          Código:
        </p>
        {subject.code}
      </span>

      <span className="flex items-center text-gray-700 mb-2">
        <p className="text-base font-bold mr-2">
          Professor:
        </p>
        {subject.professor}
      </span>

      <span className="flex items-center text-gray-700">
        <p className="text-base font-bold mr-2">
          Horário:
        </p>
        {subject.schedule}
      </span>
    </div>
  );
}

export { Card };
