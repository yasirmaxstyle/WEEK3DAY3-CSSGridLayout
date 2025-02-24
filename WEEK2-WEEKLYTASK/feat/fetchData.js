// menggunakan async-await & try-catch
export async function fetchDataAsync(status) {
    try { // di blok try dimasukkan code yang berkemungkinan gagal
        await setTimeout(() => { // untuk setiap code dijalankan di async function diawali dengan await agar berjalan secara asyncronous
            if (status === true) console.log("Data berhasil diambil."); // jika berhasil (resolve) akan memunculkan pesan sukses
            else console.log("Gagal mengambil data.") // jika code gagal akan memunculkan pesan error dan dilempar ke catch
        }, 3000)
    } catch (error) { // semua code yang gagal di try akan direturn di blok catch
        console.log(error.message) // pesan yang muncul adalah dari code yang gagal di blok try
    }
}

// console.log(fetchDataAsync(true));
// jika function async ini diconsole akan muncul status promise pending, dan 3 detik kemudian (seperti yang diatur dengan setTimeout() akan muncul pesan sukses/gagal. karena ketika diconsole (yang berjalan syncronous), fungsi ini return promise, dan belum resolve, dan akan resolve dalam 3 detik karena async berjalan tidak sinkron sesuai waktu yang dibuthkan masing-masing)

// berikut contoh menggunakan metode then-catch
/*
function fetchData(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === true) resolve("Data berhasil diambil.");
            else reject("Gagal mengambil data.");
        }, 3000);
    });
}
fungsi di atas jika di panggil dengan console.log() biasa akan muncul statusnya undefined, karena fungsi yang return promise perlu dipanggil dengan then-catch (jika tidak pakai async)

console.log(fetchData(true)
    .then((successMsg) => console.log(successMsg))
    .catch((erroMsg) => console.log(erroMsg)));

dengan pemanggilan tersebut akan muncul status fungsi tersebut menjadi promise: pending alih-alih undefined. dan pesan sukses akan muncul 3 detik kemudian
*/