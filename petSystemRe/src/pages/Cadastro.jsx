import { useState } from 'react';
import Button from '../components/Button';
import InputForm from '../components/Input';
import logoVet from "../assets/logoVet .png";

const CadastroPage = ({ onGoToLogin }) => {
    const [formData, setFormData] = useState({
        clinicName: '',
        cnpj: '',
        phone: '',
        adminEmail: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#F8F9FA]">
            <div className="hidden md:flex flex-1 items-center justify-center bg-white border-r border-gray-100">

                <div className="flex flex-col items-center justify-center gap-6">

                    <img src={logoVet} alt="Logo" className="w-[200px]" />

                    <h1 className="text-[#8A2BE2] text-5xl font-extrabold tracking-tight">
                        PetSystem
                    </h1>

                </div>

            </div>
            <div className="flex-1 flex items-center justify-center p-6 md:p-16 lg:p-24 bg-[#F5F7FA]">
                <div className="w-full max-w-xl">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Painel de Cadastro</h2>
                        <p className="text-gray-500 text-sm">Registre sua clínica</p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <InputForm id="clinicName" label="Nome da clínica" type="text" value={formData.clinicName} onChange={handleChange} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputForm id="cnpj" label="CNPJ" type="text" value={formData.cnpj} onChange={handleChange} />
                            <InputForm id="phone" label="Celular de contato" type="text" value={formData.phone} onChange={handleChange} />
                        </div>
                        <InputForm id="adminEmail" label="Email do administrador" type="email" value={formData.adminEmail} onChange={handleChange} />
                        <InputForm id="password" label="Cadastrar senha" type="password" value={formData.password} onChange={handleChange} />
                        <InputForm id="confirmPassword" label="Repetir senha" type="password" value={formData.confirmPassword} onChange={handleChange} />
                        <Button type="submit">Cadastrar</Button>
                        <div className="text-center mt-4">
                            <p className="text-gray-600 text-sm">
                                Já utiliza o PetSystem?{' '}
                                <button onClick={onGoToLogin} type="button" className="text-[#8A2BE2] font-bold hover:underline">Entre</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;