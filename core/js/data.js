/*animation : class
	pagepict = untuk gambar yang apabila dihover ada animasinya , note : tambahkan data-action
	animtime = untuk gambar yang akan di animasikan setiap 15 detik
*/
var magazinePage = [
	{
		halaman : "",
		color   : "",
		title 	: "COVER",
		page  	: "cover/front.png",
		html  	: ""
	},
	{
		halaman : "2",
		color   : "#ffffff",
		title 	: "Salam Redaksi",
		page  	: "salam/salam.png",
		html  	: "<div style='margin-left:3em;margin-top:10em;text-align:justify;width:70%;font-size:20px;'>Hai sobat..!<br><br>Disini kami mempersembahkan MeMagz Edisi Pertama. Kami membahas tentang kebudayaan tradisional di era globalisasi. Pasti pada penasarankan? Langsung saja lihat majalah kami.<br><br><br><p style='text-align:right;'>Salam, tim <b>MeMagz</b>!</p></div>"
	},
	{
		halaman : "3",
		color   : "",
		title 	: "COVER",
		page  	: "salam/daftar.png",
		html  	: ""
	},
	{
		halaman : "4",
		color   : "",
		title 	: "UNESA",
		page  	: "unesa/unesa1.png",
		html  	: ""
	},
	{
		halaman : "5",
		color   : "",
		title 	: "UNESA",
		page  	: "unesa/unesa2.png",
		html  	: "<div style='margin-top:13em;margin-left:2.3em;text-align:justify;font-size:17px;width:80%;'>Universitas Negeri Surabaya yang disingkat Unesa adalah perguruan tinggi negeri yang berada Surabaya, berdiri pada 19 Desember 1964. Saat ini Unesa memiliki 7 fakultas, 4 fakultas berada di kompleks kentintang dan 3 di kompleks Lidah Wetan. Unesa menjadi salah satu sasaran siswa di Surabaya bahkan Jawa Timur untuk meneruskan pendidikan karena kualitas pembelajaran yang sangat baik dan interaktif. Universitas ini direktori oleh Prof. Dr. Warsono, M.S.</div>"
	},
	{
		halaman : "6",
		color   : "",
		title 	: "Teknologi Pendidikan",
		page  	: "tp/tp1.png",
		html  	: ""
	},
	{
		halaman : "7",
		color   : "",
		title 	: "Teknologi Pendidikan",
		page  	: "tp/tp2.png",
		html  	: "<div style='margin-top:8.5em;margin-left:3em;text-align:justify;width:80%;'>Jurusan Kurikulum dan Teknologi Pendidikan merupakan salah satu jurusan yang menghasilkan tenaga kependidikan non guru, yakni desain sebagai (1) pengembang ilmu teknologi pendidikan yang meliputi kawasan teori dan praktek di bidang desain, pengembangan, pemanfaatan, pengelolaan, serta evaluasi proses dan sumber untuk belajar, dan (2) disiapkan sebagai tenaga yang berkualitas dan profesional dibidang teknologi pendidikan yang mampu memenuhi kebutuhan masyarakat serta tuntutan pembangunan baik pada jalur pendidikan sekolah maupun luar sekolah, termasuk di dalamnya adalah berwirausaha dalam bidang pengembangan sumber daya manusia melalui kegiatan pelatihan dan pendidikan (Diklat).</div>"
	},
	{
		halaman : "8",
		color   : "",
		title 	: "Iklan Layanan Masyarakat",
		page  	: "ilm/ilm1.png",
		html  	: ""
	},
	{
		halaman : "9",
		color   : "",
		title 	: "Iklan Layanan Masyarakat",
		page  	: "ilm/ilm2.png",
		html  	: "<img src='assets/page/ilm/tulisan.png' width='280px' height='120px' style='margin-top:24.5em;margin-left:4em;animation:pulse 1s infinite linear;'></img>"
	},
	{
		halaman : "10",
		color   : "",
		title 	: "Batik Yang Mendunia",
		page  	: "batik/batik1.png",
		html  	: "<div style='margin-top:10.5em;margin-left:3.5em;width:70%;font-size:20px;text-align:justify;color:#fff;'>Setiap orang Indonesia pasti mengenal batik, baik yang tradisionalmaupun yang telah diciptakan kembali dengan corak yang modern. Batik dihasilkan dengan cara menuliskan lilin panas keatas kain dengan menggunakan canting. Kain batik telah dikenal sejak zaman kerajaan Majapahit dan terus berkembang hingga hari ini dengan berbagai macam motif dankreasi.</div>"
	},
	{
		halaman : "11",
		color   : "",
		title 	: "Batik Yang Mendunia",
		page  	: "batik/batik2.png",
		html  	: ""
	},
	{
		halaman : "12",
		color   : "",
		title 	: "Tari Selamat Datang",
		page  	: "tari/tari1.png",
		html  	: "<div style='margin-top:7em;margin-left:2.5em;width:80%;text-align:justify;font-size:17px;color:#fff;'>Tari Sparkling Surabaya adalah kreasi tari modern, yang muncul di tengah-tengah masyarakat yang heterogen di Surabaya, dan latar belakang seni perkotaan. Gerakan tari Sparkling Surabaya membentuk gaya modern sendiri, mengacu pada gerakan tari Jawa Timur yang berkembang di Metropolis. Juga mengangkat disentuhan-sentuhan iringan musik tradisional. Tari Sparkling Surabaya terinspirasi dari tari Jawa yang dilakukan oleh kurang lebih 5-10 penari wanita. Gerakan tari Sparkling Surabaya menjadi tarian selamat datang bagi pengunjung yang datang ke Surabaya. Musik yang menyertainya adalah campuran dari musik tradisional Jawa, dengan berdebarperkusi. Itulah sebabnya musik menjadi seperti musik campur sari modern dengan unsur tradisional sangat kental.</div>"
	},
	{
		halaman : "13",
		color   : "",
		title 	: "Tari Selamat Datang",
		page  	: "tari/tari2.png",
		html  	: ""
	},
	{
		halaman : "14",
		color   : "",
		title 	: "SMK Negeri 1 Surabaya",
		page  	: "smk/smk1.png",
		html  	: "<img src='assets/page/smk/logo.png' width='95px' height='110px' style='margin-top:5em;margin-left:9.6em;animation:pulse 2s infinite linear;'></img><video style='margin-top:7em;margin-left:2.5em;' width='315' height='175' controls preload='auto'><source src='assets/video/smkn1.mp4' type='video/mp4'/></video>"
	},
	{
		halaman : "15",
		color   : "",
		title 	: "SMK Negeri 1 Surabaya",
		page  	: "smk/smk2.png",
		html  	: "<div style='margin-top:4.5em;margin-left:2.5em;width:80%;text-align:justify;font-size:17px;'><b>Sekolah Menengah Kejuruan Negeri 1 Surabaya ( SMK Negeri 1 )</b> adalah sekolah bertaraf Infomarsi Teknologi ini berada di jalan SMEA NO. 4,  WONOKROMO. Dikepalai oleh Drs. Bahrun, ST, MM sekolah ini menjadi salah satu rekomendasi sekolah SMK terbaik di kota Surabaya. Dengan memiliki 9 jurusan yakni Multimedia, Desain Komunikasi Visual, Rekayasa Perangkat Lunak, Tenik Komputer Jaringan, Teknik Penyiaran Program Pertelevisian, Administrasi Perkantoran, Akuntansi, Pemasaran, Akomodasi Perhotelan.<br><br>Sedangkan untuk ekstrakurikuler-nya yakni IT Club, Basket, Volly, Futsal (Cewek & cowok), Paskibra, Karawitan, Tari Tradisional, dan masih banyak lagi. Dengan jurusan yang beragam dan eskul yang sangat bermacam-macam ini menjadikan daya tarik tersendiri.</div>"
	},
	{
		halaman : "16",
		color   : "",
		title 	: "The Crew",
		page  	: "bio/bio1.png",
		html  	: ""
	},
	{
		halaman : "17",
		color   : "",
		title 	: "The Crew",
		page  	: "bio/bio2.png",
		html  	: ""
	},
	{
		halaman : "",
		color   : "",
		title 	: "COVER",
		page  	: "cover/backcover.png",
		html  	: ""
	},
];
