import { useCallback, useState } from "react";
import { CardProps } from "./types";
import Dialog from "../Dialog";

function Card({ subject }: CardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = useCallback(() => setIsDialogOpen(true), []);
  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <>
      <div
        className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 transition-transform duration-120 ease-in-out transform hover:scale-105"
        onClick={openDialog}
      >
        <div className="font-bold text-xl mb-4">{subject.name}</div>

        <span className="flex items-center text-gray-700 mb-2">
          <p className="text-base font-bold mr-2">Código:</p>
          {subject.code}
        </span>

        <span className="flex items-center text-gray-700 mb-2">
          <p className="text-base font-bold mr-2">Professor:</p>
          {subject.professor}
        </span>

        <span className="flex items-center text-gray-700">
          <p className="text-base font-bold mr-2">Horário:</p>
          {subject.schedule}
        </span>
      </div>

      {isDialogOpen ? (
        <Dialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title={subject.name}
          size="small"
        >
          <span className="text-gray-700">
            <p>Quero me matricular na disciplina: </p>
            <p className="font-bold">{subject.name}</p>
          </span>
        </Dialog>
      ) : null}
    </>
  );
}

export { Card };
