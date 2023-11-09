import * as dayjs from "dayjs";

export type TPalestra = {
    id: number;
    nome: string;
    descricao: string;
    horario: dayjs.Dayjs;
}
