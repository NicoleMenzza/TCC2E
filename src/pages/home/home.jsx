import React from 'react';

export default function Home() {
  // Estilos em JavaScript para manter o design limpo, moderno e focado em sustentabilidade
  const styles = {
    wrapper: {
      margin: 0,
      padding: 0,
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: '#f4f7f5',
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#2e7d32', /* Verde Eco */
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    logo: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'opacity 0.2s',
    },
    hero: {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1350&q=80')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '450px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.2rem',
      margin: '0 0 10px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      maxWidth: '600px',
      margin: '0 0 25px 0',
      textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    },
    btn: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '25px',
      textDecoration: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, backgroundColor 0.2s',
    },
    mainContent: {
      flex: 1,
      maxWidth: '1200px',
      margin: '50px auto',
      padding: '0 20px',
    },
    gridSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    card: {
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      color: '#2e7d32',
      fontSize: '1.6rem',
      marginBottom: '15px',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '25px',
      fontSize: '1rem',
    },
    footer: {
      backgroundColor: '#1b5e20',
      color: 'white',
      textCenter: 'center',
      padding: '25px 20px',
      textAlign: 'center',
      fontSize: '0.9rem',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Navbar do EcoEra */}
      <header style={styles.header}>
        <div style={styles.logo}>🌱 EcoEra</div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#marketplace" style={styles.navLink}>Marketplace</a>
          <a href="#reciclagem" style={styles.navLink}>Reciclagem</a>
          <a href="#sobre" style={styles.navLink}>Sobre</a>
        </nav>
      </header>

      {/* Seção Hero / Banner de Boas-vindas */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Bem-vindo à EcoEra</h1>
        <p style={styles.heroSubtitle}>
          Conectando reciclagem e consumo consciente para transformar resíduos em novas oportunidades.
        </p>
        <button 
          style={styles.btn} 
          onMouseOver={(e) => e.target.style.backgroundColor = '#388e3c'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4caf50'}
        >
          Explorar o Marketplace
        </button>
      </section>

      {/* Conteúdo Central com as duas propostas principais do TCC */}
      <main style={styles.mainContent}>
        <div style={styles.gridSection}>
          
          {/* Card focado em Reciclagem */}
          <div style={styles.card}>
            <div>
              <h3 style={styles.cardTitle}>Descarte & Reciclagem</h3>
              <p style={styles.cardText}>
                Encontre cooperativas, pontos de coleta ideais perto de você e entenda como dar o destino correto aos seus materiais recicláveis.
              </p>
            </div>
            <button style={styles.btn}>Achar Pontos de Coleta</button>
          </div>

          {/* Card focado no Marketplace */}
          <div style={styles.card}>
            <div>
              <h3 style={styles.cardTitle}>Marketplace Ecológico</h3>
              <p style={styles.cardText}>
                Compre produtos feitos a partir de materiais reciclados ou venda suas criações sustentáveis diretamente para quem apoia a causa.
              </p>
            </div>
            <button style={styles.btn}>Visitar a Loja</button>
          </div>

        </div>
      </main>

      {/* Rodapé institucional */}
      <footer style={styles.footer}>
        <p>&copy; 2026 EcoEra - Projeto de Conclusão de Curso. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}