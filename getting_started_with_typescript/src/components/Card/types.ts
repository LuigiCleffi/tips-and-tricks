interface Subject {
  name: string;
  code: string;
  professor: string;
  schedule: string;
}

interface CardProps {
  subject: Subject;
}

export type { CardProps, Subject };