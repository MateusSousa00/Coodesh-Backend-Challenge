import { CronJob } from "cron";
import { Request, Response } from "express";
import os from "os";

export class DefaultController {
  constructor(private job: CronJob) {}

  async handle(req: Request, res: Response) {
    try {
      let lastCronRun;
      if (this.job.running) {
        lastCronRun = this.job.lastDate();
      } else {
        lastCronRun = "Job has not executed yet";
      }

      const uptime = await this.formatUptime(os.uptime());
      const memoryUsage = process.memoryUsage();

      const response = {
        message: "Coodesh backend challenge 2023 Details!",
        lastTimeCronUsed: lastCronRun,
        uptime,
        memoryUsage,
      };

      return res.status(200).json({
        data: response,
      });
    } catch (error) {
      console.error(`Error in DefaultController: ${error}`);
      return res.status(500).json({
        data: null,
        message: "Internal server error",
        error_code: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async formatUptime(uptime: number): Promise<string> {
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
