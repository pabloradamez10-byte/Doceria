'use client';

import { useState } from 'react';
import { Cloud, FolderPlus, HardDrive, LogIn, Upload } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const configured = Boolean(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

  return <main className="shell">
    <header><div className="brand"><Cloud size={28}/><strong>Doceria Cloud</strong></div><span className="badge">MVP</span></header>
    <section className="hero">
      <div><p className="eyebrow">ARMAZENAMENTO ONLINE</p><h1>Seus arquivos seguros e acessíveis de qualquer lugar.</h1><p className="subtitle">Painel preparado para Firebase Authentication, Firestore e 10 GB gratuitos no Cloudflare R2.</p></div>
      <div className="login-card"><LogIn size={24}/><h2>Entrar na sua nuvem</h2><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="seu@email.com"/><input type="password" placeholder="Sua senha"/><button disabled={!configured}>Entrar</button><small>{configured ? 'Firebase conectado.' : 'Aguardando configuração do Firebase.'}</small></div>
    </section>
    <section className="stats"><article><HardDrive/><div><b>10 GB</b><span>capacidade inicial</span></div></article><article><Upload/><div><b>Upload seguro</b><span>direto para o R2</span></div></article><article><FolderPlus/><div><b>Pastas</b><span>organização por usuário</span></div></article></section>
    <section className="workspace"><div><h2>Meus arquivos</h2><p>Após conectar as credenciais, esta área exibirá pastas, uploads, downloads e uso do espaço.</p></div><button disabled><Upload size={18}/> Enviar arquivo</button></section>
  </main>;
}
