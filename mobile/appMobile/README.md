# 🐾 PetSystem - App Móvel (React Native + Expo)

## 📋 Visão Geral

O **PetSystem Mobile** é um aplicativo iOS/Android desenvolvido com **React Native** e **Expo**, permitindo que tutores e profissionais da área veterinária gerenciem informações de pets, agendamentos, histórico de atividades e meta de passeios de forma prática e intuitiva.

### Funcionalidades Principais:
- ✅ **Autenticação** com diferentes roles (tutor, veterinário, gerente, admin)
- ✅ **Dashboard** com resumo de pets e meta de passeios
- ✅ **Meta de Passeios** — editar objetivo e registrar passeios com confirmação
- ✅ **Histórico** — visualizar atividades e registros do pet
- ✅ **Perfil de Usuário** — visualizar e editar dados pessoais
- ✅ **Navegação por Abas** — interface intuitiva com 5 tabs principais
- ✅ **Suporte a iOS e Android** — mesma base de código, build nativo opcional

---

## 🚀 Guia de Instalação

### Pré-requisitos

#### Obrigatório
- **Node.js** v16 ou superior ([Download](https://nodejs.org/))
- **npm** (geralmente instalado com Node.js) ou **yarn**
- **Expo CLI** instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```

#### Para Teste em Dispositivo Físico
- **Expo Go App** instalado no seu celular:
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id1054823468)
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

#### Para Teste em Emulador (Opcional)
- **Android Studio** (para emulador Android) ou **Xcode** (para simulador iOS)

### Passos para Instalação

#### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/PetSystem.git
cd PetSystem/mobile/appMobile
```

#### 2. Instalar Dependências
```bash
npm install
```

Se houver conflitos de dependências:
```bash
npm install --legacy-peer-deps
```

#### 3. Verificar Instalação
```bash
npm --version
node --version
expo --version
```

---

## 🏃 Como Rodar o Projeto

### Modo Desenvolvimento (Tunnel Mode - Recomendado)
```bash
npm start
# ou
expo start --tunnel
```

Você verá um QR Code no terminal. Abra o **Expo Go** no seu celular e escanear o QR Code para carregar o app.

**Alternativas:**

```bash
# Modo LAN (conecta via rede local)
expo start --lan

# Modo Local (apenas via USB em máquina local)
expo start --local
```

### Executar no Android
```bash
npm run android
```
Requer Android Studio com emulador configurado ou dispositivo conectado via USB.

### Executar no iOS
```bash
npm run ios
```
Requer Xcode instalado e iPhone simulador configurado (somente macOS).

### Iniciar sem Cache
```bash
npm start -- --clear
# ou
expo start --clear
```

---

## 📂 Estrutura do Projeto

```
mobile/appMobile/
├── src/
│   ├── screens/                          # Telas/Páginas da aplicação
│   │   ├── HomeScreen.jsx                # Dashboard com pets e meta de passeios
│   │   │   ├── Seletor de pet
│   │   │   ├── Banner de atendimento
│   │   │   ├── Atualizações recentes
│   │   │   ├── Meta de passeios (gamificação)
│   │   │   └── Modal de confirmação
│   │   │
│   │   ├── HistoricoScreen.jsx           # Histórico de atividades do pet
│   │   ├── MeusPetsScreen.jsx            # Gerenciar pets do usuário
│   │   ├── PerfilScreen.jsx              # Perfil do usuário
│   │   ├── AgendaScreen.jsx              # Agendamentos (opcional)
│   │   └── NotificacoesScreen.jsx        # Centro de notificações (opcional)
│   │
│   ├── components/                       # Componentes reutilizáveis
│   │   ├── PetSelector.jsx               # Selector de pet no header
│   │   ├── Loading.jsx                   # Tela de carregamento
│   │   ├── AuthExpiryHandler.jsx         # Gerencia expiração de token
│   │   └── ...outros componentes
│   │
│   ├── navigation/
│   │   └── TabNavigator.jsx              # Navegação inferior com 5 tabs
│   │       └── HomeScreen
│   │       └── Histórico
│   │       └── Meus Pets
│   │       └── Perfil
│   │       └── Notificações
│   │
│   ├── service/
│   │   ├── api.js                        # Fake API / Bridge para backend
│   │   │   ├── Autenticação
│   │   │   ├── Pets
│   │   │   ├── Meta de passeios
│   │   │   ├── Histórico
│   │   │   └── Usuário
│   │   │
│   │   ├── authService.js                # Lógica de autenticação
│   │   └── ...outros services
│   │
│   ├── context/
│   │   └── AuthContext.jsx               # Context para estado global de auth
│   │
│   ├── hooks/
│   │   ├── useAuth.js                    # Hook customizado para auth
│   │   └── ...outros hooks
│   │
│   ├── constants/
│   │   ├── colors.js                     # Paleta de cores global
│   │   └── ...outras constantes
│   │
│   ├── assets/
│   │   ├── images/                       # Imagens PNG, JPEG, SVG
│   │   └── icons/                        # Ícones (via Ionicons)
│   │
│   ├── utils/
│   │   └── ...funções utilitárias
│   │
│   └── style.css                         # Estilos globais Tailwind
│
├── app.json                              # Configuração Expo
│   ├── name, slug, version
│   ├── icon, splash screen
│   ├── bundle identifiers (iOS/Android)
│   └── plugins e assets
│
├── babel.config.js                       # Configuração Babel
├── package.json                          # Dependências e scripts
├── README.md                             # Este arquivo
└── .gitignore                            # Arquivos a ignorar no git
```

---

## 🎨 Telas Implementadas

### 1. **Home Screen** 📱
- **Descrição:** Dashboard com resumo de informações do pet selecionado
- **Componentes:**
  - Seletor de pet (dropdown no header)
  - Banner de atendimento em andamento
  - Atualizações recentes
  - Meta de passeios com gamificação (trophy icon ao completar)
  - Modal de confirmação ao registrar passeio
  - Histórico recente do pet
- **Recursos:**
  - Editar meta de passeios (inline)
  - Registrar novo passeio (um por clique)
  - Visualizar progresso em barra

### 2. **Histórico Screen** 📝
- **Descrição:** Histórico completo de atividades do pet selecionado
- **Componentes:**
  - Timestamp de cada atividade
  - Tipo de atividade (passeio, vacinação, agendamento, etc.)
  - Descrição e dados adicionais

### 3. **Meus Pets Screen** 🐾
- **Descrição:** Gerenciar lista de pets do usuário
- **Componentes:**
  - Lista de pets com cards
  - Informações básicas (nome, raça, idade)
  - Ação de selecionar/visualizar detalhe

### 4. **Perfil Screen** 👤
- **Descrição:** Visualizar e editar perfil do usuário
- **Componentes:**
  - Foto do usuário
  - Dados pessoais (nome, email, telefone, CPF)
  - Tipo de acesso (role)
  - Opção de logout

### 5. **Notificações Screen** 🔔 (Opcional)
- **Descrição:** Centro de notificações
- **Funcionalidade:** Avisos sobre agendamentos, passeios agendados, etc.

---

## 🎨 Design System

### Cores (src/constants/colors.js)
```javascript
COLORS = {
  purple:     '#7B2FBE',      // Cor primária
  pink:       '#E0489F',      // Cor secundária
  pinkLight:  '#F5C6DE',      // Pink claro para backgrounds
  white:      '#FFFFFF',
  black:      '#1A1A1A',
  gray100:    '#F5F5F5',
  gray200:    '#E8E8E8',
  gray400:    '#999999',
  gray600:    '#666666',
  gray800:    '#333333',
  ...
}
```

### Tipografia
- **Títulos:** Fonte weight 700-800, tamanho 16-22
- **Corpo:** Fonte weight 400-600, tamanho 12-14
- **Botões:** Fonte weight 700, tamanho 14-16

### Componentes
- Espaçamento: 8, 12, 16, 20, 24px
- Border Radius: 10-18px
- Shadows: elevação sutil (Android) e shadow (iOS)
- Safe Area: respeitada em todas as telas via `SafeAreaView`

---

## 🔗 Integração com Backend

### Configuração da API

O arquivo `src/service/api.js` contém um **fake API** para desenvolvimento. Para conectar ao backend real:

```javascript
// Antes (desenvolvimento local)
const API_BASE_URL = 'http://localhost:5000/api';

// Depois (backend remoto)
const API_BASE_URL = 'https://seu-api.com/api';
```

### Endpoints Esperados

Consulte [Backend - API Endpoints](../../petSystemPy/API_ENDPOINTS.md) para a lista completa.

### Exemplo: Registrar um Passeio
```javascript
// Chamada no código
const response = await api.registerPasseio(petId);

// Resposta esperada
{
  meta: {
    objetivo: 5,
    realizado: 1,
    unidade: 'por semana'
  },
  historico: {
    id: 'h123456',
    tipo: 'Passeio',
    cor: 'purple',
    hora: '14:30',
    data: '11/06/2026',
    descricao: 'Passeio registrado para Max.'
  }
}
```

---

## 🛠️ Stack Técnico

| Componente | Pacote | Versão |
|---|---|---|
| **Runtime** | React Native | 0.81.5 |
| **Framework** | Expo | 54.0 |
| **React** | react | 19.1.0 |
| **Navegação** | @react-navigation/* | 6.x |
| **Ícones** | @expo/vector-icons | 15.0 |
| **Estilização** | NativeWind (Tailwind) | 2.0 |
| **Status Bar** | expo-status-bar | 3.0 |

---

## 📱 Suporte de Plataformas

| Plataforma | Status | Mínimo |
|---|---|---|
| **iOS** | ✅ Suportado | iOS 13+ |
| **Android** | ✅ Suportado | Android 7.0+ |
| **Web** | ⚠️ Experimental | (via React Native Web) |

---

## 🐛 Troubleshooting

### "Expo command not found"
```bash
npm install -g expo-cli
# ou use diretamente
npx expo start
```

### "Metro bundler keeps crashing"
```bash
npm start -- --clear
# ou
rm -rf node_modules package-lock.json
npm install
```

### "QR Code não funciona"
1. Verifique se Expo Go está instalado no celular
2. Certifique-se que celular e computador estão na mesma rede Wi-Fi
3. Tente modo `--lan` ou `--local`:
   ```bash
   expo start --lan
   ```

### "App congela ou não carrega dados"
1. Verifique se o backend está rodando (`http://localhost:5000`)
2. Ajuste a URL da API em `src/service/api.js` se necessário
3. Limpe o cache: `npm start -- --clear`
4. Abra o console do Expo (pressione `j` no terminal) para ver logs

### "Token expirado ao mudar de tela"
O app possui um handler automático (`AuthExpiryHandler.jsx`) que redireciona para login. Verifique se há internet conectada.

---

## 📚 Documentação Adicional

- [Documentação Expo](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Guide](https://reactnavigation.org/)
- [NativeWind (Tailwind para React Native)](https://www.nativewind.dev/)
- [Backend API Endpoints](../../petSystemPy/API_ENDPOINTS.md)
- [PetSystem - Documentação Principal](../../README.md)

---

## 💡 Dicas de Desenvolvimento

### Hot Reload
Salve qualquer arquivo e o app atualizará automaticamente. Para reload completo, abra o menu de desenvolvedor:
- **Android/Expo Go:** Shake o dispositivo
- **iOS/Expo Go:** Pressione Cmd+D (simulador) ou shake o dispositivo

### Debug Console
```bash
# No terminal onde rodou npm start, pressione:
# 'j' - Abre developer tools
# 'r' - Reload app
# 'm' - Menu (toggle device menu)
# 'o' - Abre no navegador (web preview)
```

### Estrutura de Componentes
Mantenha componentes simples e focados. Use hooks para lógica:
```javascript
const [state, setState] = useState(null);
const { user } = useAuth();

useEffect(() => {
  // efeitos
}, [dependências]);
```

---

## 📞 Suporte

Para dúvidas ou issues específicas do mobile:
1. Consulte a documentação Expo/React Native
2. Verifique os logs no console do app
3. Limpe cache e reinstale dependências
4. Abra uma issue no repositório com:
   - Versão do Node.js e npm
   - SO e versão (Windows/macOS/Linux)
   - Mensagem de erro completa
   - Passos para reproduzir
