import { IReferenceString } from "src/app/model/IReferenceTechnology";

export const referencesTechnologies: () => IReferenceString[] = () => {
  const technologies: IReferenceString[] =  ['Angular','Backend','Banco de dados','Html','Javascript','Node','React','Vue', 'Outros'] as IReferenceString[];
  return technologies;
}
