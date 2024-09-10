import Image from "next/image";

export default function Home() {

const h1styling = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 200,
  color: 'white',
  textShadow: "2px 2px blue",
  zIndex: 10
}

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
      <div style={h1styling}>
        <h1>EIS</h1>
      </div>
      <p style={{color: 'white', textAlign: 'center', zIndex: 4, textShadow: '0.5px 0.5px blue'}}>Editorial Information System</p>
      </main>
    </div>
  );
}
