import HeroSection from "./components/home/HeroSection";
import AboutTeaser from "./components/home/AboutTeaser";
import SpecialtiesPreview from "./components/home/SpecialtiesPreview";
import GallerySection from "./components/home/GallerySection";
import ReviewsTeaser from "./components/home/ReviewsTeaser";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutTeaser />
      <SpecialtiesPreview />
      <GallerySection />
      <ReviewsTeaser />
      
      {/* CTA Section */}
      <section className="py-32 px-8 md:px-24 bg-latte text-matte-black text-center border-t border-matte-black/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-7xl font-serif">
            Visit Us in Hyderabad
          </h2>
          <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">
            Come and experience the cinematic essence of Ca Phe Bistro. We are open every day from 8:00 AM to 10:00 PM.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/location">
              <button className="px-12 py-5 bg-matte-black text-latte rounded-full font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                Get Directions
              </button>
            </Link>
            <Link href="https://www.google.com/maps/reserve/v/dine/c/CeAdMzRIvBU?opi=79508299&source=pa&hl=en-IN&gei=YIjOacL-GvqJqfkPkbTJiAM&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26pb%3D!1m20!1s0x3bcb95004459c9ad:0x1a74866a4a83a29b!3m12!1m3!1d57896.72907268197!2d78.348288!3d17.416192!2m3!1f0!2f0!3f0!3m2!1i1536!2i730!4f13.1!4m2!3d17.4155625!4d78.35318749999999!5e0!9e0!11s/g/11mt8n6z85!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m6!1sV4jOaZX2JJS24-EP6cjkqAo:83!2s1i:0,t:6986,p:V4jOaZX2JJS24-EP6cjkqAo:83!7e81!12e15!17sV4jOaZX2JJS24-EP6cjkqAo:88!18e3!15m110!1m28!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b0!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i730!1m6!1m2!1i1486!2i0!2m2!1i1536!2i730!1m6!1m2!1i0!2i0!2m2!1i1536!2i20!1m6!1m2!1i0!2i710!2m2!1i1536!2i730!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i773!39sCa%2BPhe%2BBistro,%2BFinancial%2BDistrict,%2BNanakramguda,%2BTelangana%26q%3DCa%2BPhe%2BBistro,%2BFinancial%2BDistrict,%2BNanakramguda,%2BTelangana">
              <button className="px-12 py-5 border-2 border-matte-black text-matte-black rounded-full font-bold hover:bg-matte-black hover:text-latte transition-all duration-300 cursor-pointer">
                Book a Table
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-latte/10 text-center">
        <p className="text-sm text-latte/40 tracking-[0.3em]">
          &copy; {new Date().getFullYear()} CA PHE BISTRO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
