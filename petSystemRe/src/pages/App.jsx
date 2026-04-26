import { useState } from 'react';
import Login from './Login';
import CadastroPage from './Cadastro';
import TelaPrincipal from './TelaPrincipal';
import FormNewAppointment from './agenda/FormAgenda';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('agenda');
    const [appointments, setAppointments] = useState([
        { id: 1, type: 'EXAME', time: '09:00', patient: 'Mel', procedure: 'Hemograma completo', doctor: 'Dr. exemplo 1', date: '2026-04-03' },
        { id: 2, type: 'EXAME', time: '10:30', patient: 'Theo', procedure: 'Ultrassom', doctor: 'Dr. exemplo 2', date: '2026-04-03' },
        { id: 3, type: 'CIRURGIA', time: '13:00', patient: 'Pitoco', procedure: 'Castração', doctor: 'Dr. exemplo 3', date: '2026-04-03' },
    ]);

    const handleAddNewAppointment = (appointmentData) => {
        const newAppointment = {
            id: Date.now(),
            ...appointmentData,
            colorClass: appointmentData.type === 'CIRURGIA' ? 'border-red-500' : 'border-blue-500'
        };
        setAppointments([...appointments, newAppointment]);
        setCurrentScreen('telaPrincipal');
    };

    // ARRUMAR O BOTÃO DE VOLTAR PARA A TELA DE AGENDA AO INVES DA TELA PRINCIPAL

    return (
        <>
            {currentScreen === 'login' && (
                <Login
                    onGoToCadastroPage={() => setCurrentScreen('cadastro')}
                    onGoToTelaPrincipal={() => setCurrentScreen('agenda')}
                />
            )}

            {currentScreen === 'cadastro' && (
                <CadastroPage onGoToLogin={() => setCurrentScreen('login')} />
            )}

            {currentScreen === 'formAgenda' && (
                <FormNewAppointment
                    onSubmit={handleAddNewAppointment}
                    onGoToAgenda={() => setCurrentScreen('agenda')}
                />
            )}

            {currentScreen === 'agenda' && (
                <TelaPrincipal
                    onGoToLogin={() => setCurrentScreen('login')}
                    onGoToFormAgenda={() => setCurrentScreen('formAgenda')}
                    appointments={appointments}
                />
            )}
        </>
    );
}