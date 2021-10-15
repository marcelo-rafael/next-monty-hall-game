import { useState } from 'react';
import Porta from '../components/Porta';
import PortaModel from '../model/porta';

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1))
  const [texto, setTexto] = useState('...')
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="text" value={texto}
      onChange={event => setTexto(event.target.value)} />
      <Porta 
        value={porta} 
        onChange={novaPorta => setPorta(novaPorta)}
        />
    </div>
  )
}
