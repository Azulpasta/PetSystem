import { useState } from 'react';
import Login from './Login';
import CadastroPage from './Cadastro';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <>
      {currentScreen === 'login' ? (
        <Login onGoToCadastroPage={() => setCurrentScreen('cadastro')} />
      ) : (
        <CadastroPage onGoToLogin={() => setCurrentScreen('login')} />
      )}
    </>
  );
}