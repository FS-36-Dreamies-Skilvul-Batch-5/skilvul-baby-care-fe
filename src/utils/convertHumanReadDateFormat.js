export function convertHumanReadDateFormat(dateString) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const parts = dateString.split("-");
  if (parts.length === 3) {
    const day = parts[2];
    const month = months[parseInt(parts[1]) - 1];
    const year = parts[0];

    return `${day} ${month} ${year}`;
  } else {
    return "Format tanggal tidak valid";
  }
}