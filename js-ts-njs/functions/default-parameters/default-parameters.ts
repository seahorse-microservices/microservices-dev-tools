function sendMessage(msg: string, username: string = "anonymous"): void {
  console.log(`${username} : ${msg}`);
}
sendMessage('Welcome!!!');
sendMessage('Welcome!!!', 'Pepe');

