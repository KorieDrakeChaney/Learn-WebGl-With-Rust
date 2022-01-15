const fs = require('fs');

const dir = 'dist';

try {
  if (fs.existsSync(dir)) {
    fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
  } else {
  }
} catch(e) {
  console.log("An error occurred.")
}



