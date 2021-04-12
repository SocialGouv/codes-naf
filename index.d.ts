
type CodeNafInput = {
  Code: string;
  Libellé: string;
};

type CodeNaf = {
  id: string;
  label: string;
};

declare module "@socialgouv/codes-naf" {
  const CodesNaf: CodeNaf[];
  export default CodesNaf;
}
