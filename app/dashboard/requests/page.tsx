export default function Page() {
    return (
    <div>
      <main className="flex min-h-screen flex-col p-6 bg-white bg-opacity-70" >  
      <p style={{color: 'white', textAlign: 'center', zIndex: 4, textShadow: '0.5px 0.5px blue'}}>Requests Page</p>
      <br />
        <div className="rounded-lg" style={{backgroundColor: 'white', color: 'black', textAlign: 'center', zIndex: 4}}>
          <h2>Content</h2>
          <h2>Goes</h2>
          <h2>Here</h2>
        </div> 
      </main>
    </div>
    )
  }