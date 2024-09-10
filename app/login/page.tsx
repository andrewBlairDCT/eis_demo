import LoginForm from '@/app/ui/login-form';
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
        <Image
            className="dark:invert"
            src="/logo.png"
            alt="DC Thomson logo"
            width={180}
            height={40}
        />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}