import { app } from "./index.ts";
import { logger } from "./utils/logger.ts";

const { PORT } = process.env;

app.listen(PORT, () => {
  logger.info(`🔥 Server is running at port ${PORT}`);
});