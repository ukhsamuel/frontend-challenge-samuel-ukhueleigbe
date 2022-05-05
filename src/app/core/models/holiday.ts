export class Holiday {
    country_code: string;
    date: string;
    local_name: string;
    name: string;
    regions: [];
    types: [];
}

export class HolidayPayload{
    country_code: string;
    year: number;
}
