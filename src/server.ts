import { app } from "./index.ts";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`🔥 Server is running at port ${PORT}`);
});