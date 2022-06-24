export interface ICalendar {
    id: number;
    name: string;
    color: string;
}

export interface IEvents {
    id: number;
    date: string
    time?: string; //É UM CAMPO OPCIONAL - string ou undefined
    desc: string;
    calendarId: number;
}