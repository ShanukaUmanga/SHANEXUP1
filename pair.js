sock.ev.on('connection.update', async (update) => {
                const { connection, lastDisconnect } = update;
                if (connection === 'open') {
                    await delay(5000);
                    console.log("Pairing Connected successfully!");
                    // process.exit(0);  <--- මේක සම්පූර්ණයෙන්ම ඉවත් කරන්න!
                } else if (connection === 'close') {
                    let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
                    if (reason === DisconnectReason.connectionClosed) {
                        console.log("Connection closed, reconnecting...");
                        ShanexPairCode();
                    } else if (reason === DisconnectReason.loggedOut) {
                        removeFile('./session');
                    }
                }
            });
