require('dotenv').config();
const { Telegraf } = require('telegraf');
const fs = require('fs');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply("Selamat datang! Gunakan perintah:\n/update [nama_file] [kode]\n\nContoh:\n/update index.html <kode baru>");
});

bot.command('update', (ctx) => {
    const message = ctx.message.text.split(' ');

    if (message.length < 3) {
        return ctx.reply("Format salah! Gunakan: /update [nama_file] [kode]");
    }

    const fileName = message[1].trim();
    const newCode = message.slice(2).join(' ');

    // Pastikan hanya file tertentu yang bisa diperbarui
    if (!['index.html', 'style.css', 'script.js'].includes(fileName)) {
        return ctx.reply("❌ File tidak valid! Hanya bisa update: index.html, style.css, script.js");
    }

    // Tulis ulang file dengan kode baru
    fs.writeFile(fileName, newCode, (err) => {
        if (err) {
            return ctx.reply(`❌ Gagal memperbarui ${fileName}: ${err.message}`);
        }
        ctx.reply(`✅ File ${fileName} berhasil diperbarui!`);
    });
});

bot.launch();
console.log("✅ Bot Telegram berjalan...");