import { Repository } from "typeorm";

export const columnExists = (repo: Repository<any>, column: string) => {
  if (!column) return false;
  return (
    repo?.metadata?.columns?.filter((col) => col.propertyName === column)
      .length > 0
  );
};
