import DropdownMenus from "./dropdown";
import bg from "./darkroom.jpg"

export default function Home() {

const styling = {
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  opacity: 0.8,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1
}

const h1styling = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 200,
  color: 'white',
  textShadow: "2px 2px blue"
}

  return (
    <div >
      <main className="flex min-h-screen flex-col p-6 bg-black bg-opacity-30 z-0" >    
        <div className="z-1" style={styling}></div>  
      <DropdownMenus />

      <div style={h1styling}>
        <h1>E.I.S.</h1>
      </div>
      <p style={{color: 'white', textAlign: 'center', textShadow: '0.5px 0.5px blue'}}>Editorial Information System</p>
      </main>
    </div>
  );
}
