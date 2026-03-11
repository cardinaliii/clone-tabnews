function Home() {
  return (
    <>
      <h1>Te amo mãe! ❤️</h1> 
      
      <iframe 
        data-testid="embed-iframe" 
        style={{ borderRadius: '12px' }} 
        src="https://open.spotify.com/embed/track/4yBiZFLXn0n9AUJ5sWO88k?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      />
    </>
  );
}

export default Home;