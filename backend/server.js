import app from "./app.js";
import Config from "./config.js";

const { SERVER_PORT: port } = Config;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
