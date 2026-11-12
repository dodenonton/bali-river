/**
 * ============================================================================
 * GOOGLE APPS SCRIPT - BALI RIVER ADVENTURE BOOKING INTEGRATION
 * ============================================================================
 * Target Domain : baliriveradventure.com
 * Powered by    : Dewa Bike Tour
 * Notif Email   : dewabiketour@gmail.com
 *
 * CARA MEMASANG (3 MENIT):
 * 1. Buka https://sheets.google.com -> Buat Spreadsheet Baru.
 * 2. Beri nama: "Bali River Adventure Bookings".
 * 3. Di baris 1 (Header), buat kolom:
 *    A: Timestamp | B: Booking Ref | C: Package | D: Date | E: Session | F: Guests | G: Pickup Area | H: Guest Name | I: Phone/WA | J: Hotel/Notes | K: Total Price | L: Status
 * 4. Klik menu: Extensions (Ekstensi) > Apps Script.
 * 5. Hapus kode yang ada, copy-paste seluruh isi kode di bawah ini ke editor.
 * 6. Klik tombol "Deploy" (Terapkan) di kanan atas > "New deployment" (Penerapan baru).
 * 7. Pilih tipe: "Web app" (Aplikasi web).
 * 8. Konfigurasi:
 *    - Description: Bali River Adventure API
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja, bahkan anonim)  <-- PENTING!
 * 9. Klik "Deploy" -> Authorize access (Izinkan akses akun Google).
 * 10. Copy "Web app URL" (format: https://script.google.com/macros/s/.../exec).
 * 11. Paste URL tersebut ke file app.js pada variabel GOOGLE_SCRIPT_WEBAPP_URL.
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Cegah race condition bila ada multi-booking bersamaan

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var timestamp = new Date();
    var refCode   = data.refCode || 'BRA-' + Math.floor(100000 + Math.random() * 900000);
    var pkgName   = data.pkgName || '-';
    var tourDate  = data.date || '-';
    var session   = data.session || '-';
    var guests    = data.guests || '1';
    var pickup    = data.pickup || '-';
    var name      = data.name || '-';
    var phone     = data.phone || '-';
    var hotel     = data.hotel || '-';
    var total     = data.total || '-';
    var status    = 'New / Pending Confirmation';

    // 1. Simpan baris baru ke Google Sheets
    sheet.appendRow([
      timestamp,
      refCode,
      pkgName,
      tourDate,
      session,
      guests,
      pickup,
      name,
      phone,
      hotel,
      total,
      status
    ]);

    // 2. Kirim Notifikasi Email Otomatis ke dewabiketour@gmail.com
    var recipientEmail = "dewabiketour@gmail.com";
    var emailSubject   = "🚨 NEW BOOKING: " + refCode + " - " + pkgName + " (" + name + ")";
    
    var emailHtmlBody = 
      "<div style='font-family: Arial, sans-serif; line-height: 1.6; color: #111C18; max-width: 600px; border: 1px solid #13382B; border-radius: 8px; padding: 20px;'>" +
        "<div style='background-color: #0B241C; color: #D4AF37; padding: 15px; border-radius: 6px; text-align: center;'>" +
          "<h2 style='margin: 0; font-size: 20px;'>BALI RIVER ADVENTURE</h2>" +
          "<p style='margin: 4px 0 0; font-size: 12px; color: #F4EFE6;'>Powered by Dewa Bike Tour • New Booking Notification</p>" +
        "</div>" +
        
        "<h3 style='color: #13382B; border-bottom: 2px solid #C87D4B; padding-bottom: 8px; margin-top: 20px;'>Rincian Reservasi (" + refCode + ")</h3>" +
        "<table style='width: 100%; border-collapse: collapse; font-size: 14px;'>" +
          "<tr><td style='padding: 8px 0; width: 38%; font-weight: bold;'>Paket Wisata:</td><td>" + pkgName + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Tanggal Tur:</td><td>" + tourDate + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Sesi Waktu:</td><td>" + session + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Jumlah Tamu:</td><td>" + guests + " Orang</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Total Biaya:</td><td style='font-size: 16px; font-weight: bold; color: #C87D4B;'>" + total + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Area Penjemputan:</td><td>" + pickup + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Hotel / Catatan:</td><td>" + hotel + "</td></tr>" +
        "</table>" +

        "<h3 style='color: #13382B; border-bottom: 2px solid #C87D4B; padding-bottom: 8px; margin-top: 20px;'>Kontak Tamu</h3>" +
        "<table style='width: 100%; border-collapse: collapse; font-size: 14px;'>" +
          "<tr><td style='padding: 8px 0; width: 38%; font-weight: bold;'>Nama Tamu:</td><td>" + name + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>WhatsApp / HP:</td><td><a href='https://wa.me/" + phone.replace(/[^0-9]/g, '') + "' style='color: #1FAF5A; font-weight: bold;'>" + phone + "</a></td></tr>" +
        "</table>" +

        "<div style='margin-top: 25px; padding: 12px; background-color: #F4EFE6; border-radius: 6px; font-size: 12px; color: #5E726A;'>" +
          "Data ini telah otomatis tercatat di Google Sheets Anda. Harap segera hubungi tamu via WhatsApp untuk konfirmasi penjemputan." +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: recipientEmail,
      subject: emailSubject,
      htmlBody: emailHtmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', refCode: refCode }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
