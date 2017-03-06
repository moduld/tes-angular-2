interface Room {
    breackfast: string;
    choosen: boolean;
    prise: number;
    type: string;
    room_id: any;
}

export class Hotel {
    hotel_id: any;
    name: string;
    rating: number;
    rooms: Room[];
    toggled?: boolean;
    choosen?: boolean;
}