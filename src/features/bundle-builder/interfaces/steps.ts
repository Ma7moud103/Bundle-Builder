interface ICategories {
  id: string;
  label: string;
  sortOrder: number;
}

interface ISteps {
  id: string;
  number: number;
  title: string;
  category: string;
}

export type { ICategories, ISteps };
