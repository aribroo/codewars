const fs = require('fs');
const ws = fs.createWriteStream('output.txt');

/**
 * Membuat logger yang mengumpulkan pesan log berdasarkan level minimum.
 * 
 * @param {number} minimumLogLevel - Level minimum untuk menyimpan pesan log.
 * @param {string} separator - Pemisah yang digunakan saat menggabungkan pesan log.
 * @returns {Function} - Fungsi log yang mengumpulkan dan mengembalikan pesan log.
 */
function joinedLogger(minimumLogLevel, separator) {
  const logMessages = [];

  /**
   * Menangani pesan log dan menyimpannya jika level-nya memenuhi syarat minimum.
   * 
   * @param {...Object} logArgs - Argumen pesan log dalam bentuk objek { level, text }.
   * @returns {string} - Pesan log yang digabungkan dengan separator.
   */
  return function logMessageHandler(...logArgs) {
    logArgs.forEach(logArg => {
      if (logArg.level >= minimumLogLevel) {
        logMessages.push(logArg.text);
      }
    });

    const joinedLog = logMessages.join(separator);
    return joinedLog;
  }
}

const logHandler = joinedLogger(20, '-');

logHandler({ level: 4, text: '40 foo' });
logHandler({ level: 90, text: 'bar' });
logHandler({ level: 20, text: 'baz' });
logHandler({ level: 21, text: 'bax' });

console.log(logHandler());
