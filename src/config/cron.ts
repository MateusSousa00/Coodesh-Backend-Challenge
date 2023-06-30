import { CronJob } from "cron";

const schedule = "0 9 * * *"; //9AM

export function testFunction() {
  console.log("cron works!");
}

export const job = new CronJob(schedule, testFunction);
