
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { ProjectGallery } from '@/components/ProjectGallery';
import { RecentActivity } from '@/components/RecentActivity';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <ProjectGallery />
      <Services />
      <RecentActivity />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  );
}
