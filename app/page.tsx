import Image from "next/image";
import styles from '@/app/ui/home.module.css'
import Link from 'next/link';

export default function Home() {

  return (
    <div >
      <main className="flex min-h-screen flex-col p-6 bg-white bg-opacity-70" >    
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="DC Thomson logo"
        width={180}
        height={40}
      />
      </div>
      <div className={styles.h1styling}>
       EIS
      </div>
      <p style={{color: 'white', textAlign: 'center', zIndex: 4, textShadow: '0.5px 0.5px blue'}}>Editorial Information System</p>
      <br />
      <div style={{display: 'flex', justifyContent: 'center', zIndex: 4}}>
      <Link 
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 z-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
      </Link>
      </div>
      </main>
    </div>
  );
}
