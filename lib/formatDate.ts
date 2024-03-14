import { formatRFC7231 } from "date-fns";
export const formatDate = (date: Date): string => {
  const months: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [weekDay, fecha, _, year] = formatRFC7231(date).split(" ");
  const day = weekDay.replace(",", "") as keyof typeof dayMap;
  const dayMap = {
    Mon: "Lunes",
    Tue: "Martes",
    Wed: "Miércoles",
    Thu: "Jueves",
    Fri: "Viernes",
    Sat: "Sábado",
    Sun: "Domingo",
  };
  return `${dayMap[day]} ${parseInt(fecha)} de ${
    months[date.getMonth()]
  } del ${year}`;
};
