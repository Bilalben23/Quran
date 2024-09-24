const Quran_suras = [
  {
    id: 1,
    name: "الفاتحة",
    ayahs: 7,
  },
  {
    id: 2,
    name: "البقرة",
    ayahs: 286,
  },
  {
    id: 3,
    name: "آل عمران",
    ayahs: 200,
  },
  {
    id: 4,
    name: "النساء",
    ayahs: 176,
  },
  {
    id: 5,
    name: "المائدة",
    ayahs: 120,
  },
  {
    id: 6,
    name: "الأنعام",
    ayahs: 165,
  },
  {
    id: 7,
    name: "الأعراف",
    ayahs: 206,
  },
  {
    id: 8,
    name: "الأنفال",
    ayahs: 75,
  },
  {
    id: 9,
    name: "التوبة",
    ayahs: 129,
  },
  {
    id: 10,
    name: "يونس",
    ayahs: 109,
  },
  {
    id: 11,
    name: "هود",
    ayahs: 123,
  },
  {
    id: 12,
    name: "يوسف",
    ayahs: 111,
  },
  {
    id: 13,
    name: "الرعد",
    ayahs: 43,
  },
  {
    id: 14,
    name: "إبراهيم",
    ayahs: 52,
  },
  {
    id: 15,
    name: "الحجر",
    ayahs: 99,
  },
  {
    id: 16,
    name: "النحل",
    ayahs: 128,
  },
  {
    id: 17,
    name: "الإسراء",
    ayahs: 111,
  },
  {
    id: 18,
    name: "الكهف",
    ayahs: 110,
  },
  {
    id: 19,
    name: "مريم",
    ayahs: 98,
  },
  {
    id: 20,
    name: "طه",
    ayahs: 135,
  },
  {
    id: 21,
    name: "الأنبياء",
    ayahs: 112,
  },
  {
    id: 22,
    name: "الحج",
    ayahs: 78,
  },
  {
    id: 23,
    name: "المؤمنون",
    ayahs: 118,
  },
  {
    id: 24,
    name: "النور",
    ayahs: 64,
  },
  {
    id: 25,
    name: "الفرقان",
    ayahs: 77,
  },
  {
    id: 26,
    name: "الشعراء",
    ayahs: 227,
  },
  {
    id: 27,
    name: "النمل",
    ayahs: 93,
  },
  {
    id: 28,
    name: "القصص",
    ayahs: 88,
  },
  {
    id: 29,
    name: "العنكبوت",
    ayahs: 69,
  },
  {
    id: 30,
    name: "الروم",
    ayahs: 60,
  },
  {
    id: 31,
    name: "لقمان",
    ayahs: 34,
  },
  {
    id: 32,
    name: "السجدة",
    ayahs: 30,
  },
  {
    id: 33,
    name: "الأحزاب",
    ayahs: 73,
  },
  {
    id: 34,
    name: "سبأ",
    ayahs: 54,
  },
  {
    id: 35,
    name: "فاطر",
    ayahs: 45,
  },
  {
    id: 36,
    name: "يس",
    ayahs: 83,
  },
  {
    id: 37,
    name: "الصافات",
    ayahs: 182,
  },
  {
    id: 38,
    name: "ص",
    ayahs: 88,
  },
  {
    id: 39,
    name: "الزمر",
    ayahs: 75,
  },
  {
    id: 40,
    name: "غافر",
    ayahs: 85,
  },
  {
    id: 41,
    name: "فصلت",
    ayahs: 54,
  },
  {
    id: 42,
    name: "الشورى",
    ayahs: 53,
  },
  {
    id: 43,
    name: "الزخرف",
    ayahs: 89,
  },
  {
    id: 44,
    name: "الدخان",
    ayahs: 59,
  },
  {
    id: 45,
    name: "الجاثية",
    ayahs: 37,
  },
  {
    id: 46,
    name: "الأحقاف",
    ayahs: 35,
  },
  {
    id: 47,
    name: "محمد",
    ayahs: 38,
  },
  {
    id: 48,
    name: "الفتح",
    ayahs: 29,
  },
  {
    id: 49,
    name: "الحجرات",
    ayahs: 18,
  },
  {
    id: 50,
    name: "ق",
    ayahs: 60,
  },
  {
    id: 51,
    name: "الذاريات",
    ayahs: 60,
  },
  {
    id: 52,
    name: "الطور",
    ayahs: 49,
  },
  {
    id: 53,
    name: "النجم",
    ayahs: 62,
  },
  {
    id: 54,
    name: "القمر",
    ayahs: 55,
  },
  {
    id: 55,
    name: "الرحمن",
    ayahs: 78,
  },
  {
    id: 56,
    name: "الواقعة",
    ayahs: 96,
  },
  {
    id: 57,
    name: "الحديد",
    ayahs: 29,
  },
  {
    id: 58,
    name: "المجادلة",
    ayahs: 22,
  },
  {
    id: 59,
    name: "الحشر",
    ayahs: 24,
  },
  {
    id: 60,
    name: "الممتحنة",
    ayahs: 13,
  },
  {
    id: 61,
    name: "الصف",
    ayahs: 14,
  },
  {
    id: 62,
    name: "الجمعة",
    ayahs: 11,
  },
  {
    id: 63,
    name: "المنافقون",
    ayahs: 11,
  },
  {
    id: 64,
    name: "التغابن",
    ayahs: 18,
  },
  {
    id: 65,
    name: "الطلاق",
    ayahs: 12,
  },
  {
    id: 66,
    name: "التحريم",
    ayahs: 12,
  },
  {
    id: 67,
    name: "الملك",
    ayahs: 30,
  },
  {
    id: 68,
    name: "القلم",
    ayahs: 52,
  },
  {
    id: 69,
    name: "الحاقة",
    ayahs: 52,
  },
  {
    id: 70,
    name: "المعارج",
    ayahs: 44,
  },
  {
    id: 71,
    name: "نوح",
    ayahs: 28,
  },
  {
    id: 72,
    name: "الجن",
    ayahs: 28,
  },
  {
    id: 73,
    name: "المزمل",
    ayahs: 20,
  },
  {
    id: 74,
    name: "المدثر",
    ayahs: 56,
  },
  {
    id: 75,
    name: "القيامة",
    ayahs: 40,
  },
  {
    id: 76,
    name: "الانسان",
    ayahs: 31,
  },
  {
    id: 77,
    name: "المرسلات",
    ayahs: 50,
  },
  {
    id: 78,
    name: "النبأ",
    ayahs: 40,
  },
  {
    id: 79,
    name: "النازعات",
    ayahs: 46,
  },
  {
    id: 80,
    name: "عبس",
    ayahs: 42,
  },
  {
    id: 81,
    name: "التكوير",
    ayahs: 29,
  },
  {
    id: 82,
    name: "الإنفطار",
    ayahs: 19,
  },
  {
    id: 83,
    name: "المطففين",
    ayahs: 36,
  },
  {
    id: 84,
    name: "الإنشقاق",
    ayahs: 25,
  },
  {
    id: 85,
    name: "البروج",
    ayahs: 22,
  },
  {
    id: 86,
    name: "الطارق",
    ayahs: 17,
  },
  {
    id: 87,
    name: "الأعلى",
    ayahs: 19,
  },
  {
    id: 88,
    name: "الغاشية",
    ayahs: 26,
  },
  {
    id: 89,
    name: "الفجر",
    ayahs: 30,
  },
  {
    id: 90,
    name: "البلد",
    ayahs: 20,
  },
  {
    id: 91,
    name: "الشمس",
    ayahs: 15,
  },
  {
    id: 92,
    name: "الليل",
    ayahs: 21,
  },
  {
    id: 93,
    name: "الضحى",
    ayahs: 11,
  },
  {
    id: 94,
    name: "الشرح",
    ayahs: 8,
  },
  {
    id: 95,
    name: "التين",
    ayahs: 8,
  },
  {
    id: 96,
    name: "العلق",
    ayahs: 19,
  },
  {
    id: 97,
    name: "القدر",
    ayahs: 5,
  },
  {
    id: 98,
    name: "البينة",
    ayahs: 8,
  },
  {
    id: 99,
    name: "الزلزلة",
    ayahs: 8,
  },
  {
    id: 100,
    name: "العاديات",
    ayahs: 11,
  },
  {
    id: 101,
    name: "القارعة",
    ayahs: 11,
  },
  {
    id: 102,
    name: "التكاثر",
    ayahs: 8,
  },
  {
    id: 103,
    name: "العصر",
    ayahs: 3,
  },
  {
    id: 104,
    name: "الهمزة",
    ayahs: 9,
  },
  {
    id: 105,
    name: "الفيل",
    ayahs: 5,
  },
  {
    id: 106,
    name: "قريش",
    ayahs: 4,
  },
  {
    id: 107,
    name: "الماعون",
    ayahs: 7,
  },
  {
    id: 108,
    name: "الكوثر",
    ayahs: 3,
  },
  {
    id: 109,
    name: "الكافرون",
    ayahs: 6,
  },
  {
    id: 110,
    name: "النصر",
    ayahs: 3,
  },
  {
    id: 111,
    name: "المسد",
    ayahs: 5,
  },
  {
    id: 112,
    name: "الإخلاص",
    ayahs: 4,
  },
  {
    id: 113,
    name: "الفلق",
    ayahs: 5,
  },
  {
    id: 114,
    name: "الناس",
    ayahs: 6,
  },
];

const TheReciters = [
  {
    id: 1,
    riwaya: "حفص عن عاصم - مرتل",
    name: "ماهر المعيقلي",
    img: "https://mf.b37mrtl.ru/media/pics/2023.08/original/64d7ceed4236046a8c41c7e5.jpg",
    server: "https://server12.mp3quran.net/maher/",
  },
  {
    id: 2,
    name: "هشام الهراز",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://i.pinimg.com/564x/7d/8a/a5/7d8aa51615154218dc613541ac4bbe07.jpg",
    server: "https://server16.mp3quran.net/H-Lharraz/Rewayat-Warsh-A-n-Nafi/",
  },

  {
    id: 3,
    riwaya: "حفص عن عاصم - مرتل",
    name: "عبد الباسط عبد الصمد",
    img: "https://www.shorouknews.com/uploadedimages/Sections/ART/Radio-TV/original/%D8%B5%D9%8566.jpg",
    server: "https://server7.mp3quran.net/basit/",
  },
  {
    id: 4,
    name: "العيون الكوشي",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://static.suratmp3.com/pics/reciters/thumbs/13_600_600.jpg",
    server: "https://server11.mp3quran.net/koshi/",
  },
  {
    id: 5,
    name: "محمد صديق المنشاوي",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://watanimg.elwatannews.com/image_archive/original_lower_quality/15354211131611078316.jpg",
    server: "https://server10.mp3quran.net/minsh/",
  },
  {
    id: 6,
    name: "محمود خليل الحصري",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://www.aljazeera.net/wp-content/uploads/2022/09/%D8%A7%D9%84%D8%AD%D8%B5%D8%B1%D9%8A.jpg?w=770&resize=770%2C513",
    server: "https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/",
  },

  {
    id: 7,
    name: "ياسر الدوسري",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://i1.sndcdn.com/artworks-yqaFIhjTMlyQyFHL-5PmjKw-t500x500.jpg",
    server: "https://server11.mp3quran.net/yasser/",
  },
  {
    id: 8,
    name: "إبراهيم الدوسري",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://yt3.googleusercontent.com/ytc/APkrFKb65ZFkU5fM6nVAKhfIcnPkJiNCPpBOxim-PJif1A=s900-c-k-c0x00ffffff-no-rj",
    server:
      "https://server10.mp3quran.net/ibrahim_dosri/Rewayat-Warsh-A-n-Nafi/",
  },
  {
    id: 9,
    riwaya: "حفص عن عاصم - مرتل",
    name: "سعد الغامدي",
    img: "https://i1.sndcdn.com/artworks-9JG9m2FfFw6zeMuI-X1JjDA-t500x500.jpg",
    server: "https://server7.mp3quran.net/s_gmd/",
  },
  {
    id: 10,
    name: "عبد العزيز سحيم",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://i1.sndcdn.com/artworks-ZgyaMarLYbZE5qDa-bytu3Q-t500x500.jpg",
    server: "https://server16.mp3quran.net/a_sheim/Rewayat-Warsh-A-n-Nafi/",
  },
  {
    id: 11,
    name: "شيخ أبو بكر الشاطري",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://media.almashhad-alyemeni.com/img/20/03/28/15854126681034018.jpg",
    server: "https://server11.mp3quran.net/shatri/",
  },
  {
    id: 12,
    name: "فارس عباد",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://i1.sndcdn.com/avatars-000188096790-9liydp-t500x500.jpg",
    server: "https://server8.mp3quran.net/frs_a/",
  },
  {
    id: 13,
    name: "رشيد بلعالية",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiME-qrap4jG2kOy2TklQwHO0jDZjXFfh12DuhRg3hiUiQpb_pDypoW0CayD2zl5fApE&usqp=CAU",
    server: "https://server6.mp3quran.net/bl3/Rewayat-Warsh-A-n-Nafi/",
  },
  {
    id: 14,
    name: "إبراهيم الجبرين",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-XLrpYWsYRQjrELBmQnQnLAU3vuHR3bzf6_AA1YZPZsBIdelG2EgOS4kGmssZMsgitE&usqp=CAU",
    server: "https://server6.mp3quran.net/jbreen/",
  },
  {
    id: 15,
    name: "عمر القزابري",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://i1.sndcdn.com/artworks-5SnGqPg0Hcq6sFQe-EORtWQ-t500x500.jpg",
    server: "https://server9.mp3quran.net/omar_warsh/",
  },
  {
    id: 16,
    name: "عبد الرحمن السديس",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://mediaaws.almasryalyoum.com/news/verylarge/2020/09/26/1315846_0.jpg",
    server: "https://server11.mp3quran.net/sds/",
  },

  {
    id: 17,
    name: "عبد المحسن القاسم",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://media.gemini.media/img/large/2018/8/10/2018_8_10_14_41_18_717.jpg",
    server: "https://server8.mp3quran.net/qasm/",
  },
  {
    id: 18,
    name: "ياسين",
    riwaya: "ورش عن نافع - مرتل",
    img: "https://1.bp.blogspot.com/-Kmz35KMbGy0/WZNTECI5IlI/AAAAAAAAB3c/aS6xSnZPrvoJqOy2_TFrL7724UypTPwlwCLcBGAs/s1600/%25D9%258A%25D8%25A7%25D8%25B3%25D9%258A%25D9%2586%2B%25D8%25A7%25D9%2584%25D8%25AC%25D8%25B2%25D8%25A7%25D8%25A6%25D8%25B1%25D9%258A.jpg",
    server: "https://server11.mp3quran.net/qari/",
  },
  {
    id: 19,
    name: "أنس العمادي",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://i1.sndcdn.com/artworks-000227777023-wrgdqo-t500x500.jpg",
    server: "https://server16.mp3quran.net/a_alemadi/Rewayat-Hafs-A-n-Assem/",
  },
  {
    id: 20,
    name: "أحمد النفيس",
    riwaya: "حفص عن عاصم - مرتل",
    img: "https://yt3.googleusercontent.com/IK3gwd_uyJ4QIh60457Ud1iJT1QSZLeuuUowf5p7RWTZw8G-Z9EEGu2u6dV802emh7W4Uk0P=s900-c-k-c0x00ffffff-no-rj",
    server: "https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/",
  },
];

export { TheReciters, Quran_suras };
