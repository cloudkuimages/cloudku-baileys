const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(`
   _____ _                 _ _          ______       _ _                
  / ____| |               | | |        |  ____|     (_) |               
 | |    | | ___  _   _  __| | | ___   -| |__   _ __  _ | | ___  _   _ ___ 
 | |    | |/ _ \\| | | |/ _\` | |/ / | | |  __| | '_ \\| | |/ _ \\| | | / __|
 | |____| | (_) | |_| | (_| |   <| |_| | |____| | | | | | (_) | |_| \\__ \\
  \\_____|_|\\___/ \\__,_|\\__,_|_|\\_\\\\__,_|______|_| |_|_|_|\\___/ \\__, |___/
                                                              __/ |    
                                                             |___/     

                         CLOUDKU-BAILEYS v3.0.0
                      WhatsApp Baileys Modified AlfiDev
                      
                Web: https://cloudkuimages.guru
                Info: https://cloudkuimages.guru/ch

    ERROR: This package requires Node.js 20+ to run reliably.
    You are using Node.js ${process.versions.node}.
    Please upgrade to Node.js 20+ to proceed.
  `);
  process.exit(1);
}