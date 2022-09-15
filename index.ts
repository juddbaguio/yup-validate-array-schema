import schema from "./schema";

export type Schedule = {
    day: string;
    isWorking: boolean;
}

const workingDays: Schedule[] = [{
    day: "MON",
    isWorking: false
}, {
    day: "TUE",
    isWorking: false
}, {
    day: "WED",
    isWorking: false
}, {
    day: "THU",
    isWorking: false
}, {
    day: "FRI",
    isWorking: true
}, {
    day: "SAT",
    isWorking: false
}, {
    day: "SUN",
    isWorking: false
}]

schema.validate({
    scheduleMasterList: workingDays
}).then(res => console.log(res)).
   catch(err => console.log(err.message))