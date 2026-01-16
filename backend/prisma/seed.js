import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Memulai seeding database...');

  // ===============================
  // Seed Proyek Portfolio
  // ===============================
  await prisma.proyek.deleteMany();
  const proyekData = [
    {
      nama: 'Toko Online Fashion',
      deskripsi: 'E-commerce platform untuk brand fashion lokal dengan fitur cart, payment gateway, dan admin dashboard.',
      gambar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      kategori: 'E-commerce',
      teknologi: 'Next.js, Prisma, PostgreSQL',
    },
    {
      nama: 'Company Profile PT Maju Bersama',
      deskripsi: 'Website company profile profesional dengan animasi modern dan konten dinamis.',
      gambar: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      kategori: 'Company Profile',
      teknologi: 'React.js, Express, MongoDB',
    },
    {
      nama: 'Sistem Reservasi Restoran',
      deskripsi: 'Aplikasi reservasi online dengan manajemen meja dan integrasi WhatsApp notification.',
      gambar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      kategori: 'Web App',
      teknologi: 'Laravel, MySQL, Tailwind',
    },
    {
      nama: 'Landing Page Startup Tech',
      deskripsi: 'Landing page modern dengan animasi scroll dan form lead generation.',
      gambar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      kategori: 'Landing Page',
      teknologi: 'React.js, Framer Motion',
    },
    {
      nama: 'Portal Berita Online',
      deskripsi: 'Platform berita dengan CMS custom, kategori artikel, dan sistem komentar.',
      gambar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
      kategori: 'Portal',
      teknologi: 'Next.js, Strapi, PostgreSQL',
    },
    {
      nama: 'Marketplace Jasa Freelancer',
      deskripsi: 'Platform marketplace untuk menghubungkan freelancer dengan klien, dengan fitur chat dan escrow.',
      gambar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      kategori: 'Marketplace',
      teknologi: 'Laravel, Vue.js, MySQL',
    },
  ];

  for (const proyek of proyekData) {
    await prisma.proyek.create({ data: proyek });
  }
  console.log('✅ Proyek portfolio berhasil di-seed');

  console.log('🎉 Seeding selesai!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
