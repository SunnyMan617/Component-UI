export interface Component {
  id: string;
  name: string;
  description: string;
  tags: string[];
  preview: React.ReactNode;
  code: string;
}

