const app = require("express")();
const path = require("path");
const PORT = 4000 || process.env.PORT;
const http = require("http").createServer(app);
const helmet = require("helmet");
const cors = require("cors");
const io = require("socket.io")(http);
const formatMessage = require("./utils/Messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/Users");

// MW
app.use(helmet());
app.use(cors());

// Socket

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username }) => {
    // const user = userJoin(socket.id, username);
    io.emit("message", { name: "Admin", message: "Welcome to Chat!" });
    io.emit("message", {
      color: "green",
      name: "Admin",
      message: `${username} Has Joined The Chat!`,
    });
    io.emit("joinRoom", { username });
  });
  socket.on("chatMessage", ({ message, name }) => {
    io.emit("message", { name, message });
  });
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    socket.on("leaveRoom", ({ username }) => {
      io.emit("message", {
        color: "red",
        name: "Admin",
        message: `${username} Has Left The Chat `,
      });
    });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

http.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
