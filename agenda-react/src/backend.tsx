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

//FUNÇÕES PARA FAZER CHAMADAS AO BACKEND
export function getCalendarsEndpoint() {
//export function getCalendarsEndpoint(): Promise<ICalendar[]> {
    fetch("http://localhost:9090/calendars").then(resp =>{
        return resp.json(); //retorno da promisse
    });
}

export function getEventsEndpoint(){
//export function getEventsEndpoint(): Promise<IEvents[]> {
    fetch("http://localhost:9090/calendars").then(resp =>{
        return resp.json(); //retorno da promisse
    });
}