import { useState } from 'react';
import Porta from '../components/Porta';
import PortaModel from '../model/porta';

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1))
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Porta 
        value={porta} 
        onChange={novaPorta => setPorta(novaPorta)}
        />
    </div>
  )
}
