# Acesso Livre

Aplicação web do **Acesso Livre**, uma plataforma que busca eliminar barreiras de comunicação e promover inclusão digital por meio de recursos como interpretação em Libras, transcrição em tempo real e áudio descrição.

> "Comunicação acessível para todos, sem exceção."

## Sumário

- [Sobre](#sobre)
- [Recursos da plataforma](#recursos-da-plataforma)
- [Stack](#stack)
- [Pré-requisitos](#pré-requisitos)
- [Como executar](#como-executar)
- [Scripts disponíveis](#scripts-disponíveis)
- [Organização do projeto](#organização-do-projeto)
- [Como tudo se conecta](#como-tudo-se-conecta)
- [Convenção de imports](#convenção-de-imports)
- [Rotas](#rotas)
- [Temas (claro/escuro)](#temas-claroescuro)

## Sobre

O Acesso Livre é um projeto front-end desenvolvido em React que apresenta os pilares, recursos e canais de contato de uma iniciativa voltada à acessibilidade. A interface é responsiva, suporta alternância entre tema claro e escuro, e foi construída com foco em legibilidade e usabilidade.

## Recursos da plataforma

- **Intérprete instantâneo com VLibras** — tradução automática de textos e áudios para Libras.
- **Transcrição em tempo real** — conversão de fala em texto.
- **Áudio descrição** — narração automática de elementos visuais.

## Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [styled-components 6](https://styled-components.com/)
- [React Bootstrap](https://react-bootstrap.netlify.app/) + [Bootstrap 5](https://getbootstrap.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- ESLint (configuração flat)

## Pré-requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+

## Como executar

```bash
# 1. Entre na pasta do projeto
cd AcessoLivre

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O Vite irá expor a aplicação em [http://localhost:5173](http://localhost:5173) por padrão.

## Scripts disponíveis

| Script            | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Sobe o servidor de desenvolvimento com HMR.            |
| `npm run build`   | Gera o build de produção em `dist/`.                   |
| `npm run preview` | Serve localmente o conteúdo gerado pelo `build`.       |
| `npm run lint`    | Executa o ESLint sobre o código-fonte.                 |

## Organização do projeto

```
Front-AcessoLivre-main/
└── AcessoLivre/                    ← raiz do projeto Vite
    ├── index.html                   ← HTML raiz com <div id="root">
    ├── package.json                 ← dependências (React, styled-components, etc.)
    ├── vite.config.js               ← config do bundler Vite
    ├── eslint.config.js             ← regras de lint
    └── src/                         ← todo código-fonte
        ├── main.jsx                 ← entrypoint: monta o React no DOM
        ├── index.css                ← reset CSS mínimo
        ├── App/
        │   └── App.jsx              ← layout geral + rotas (React Router)
        ├── Public/                  ← assets estáticos (logo, ilustrações, paleta)
        ├── Components/              ← componentes React (.jsx)
        │   ├── ThemeContext/        ← contexto de tema (claro/escuro)
        │   ├── Header/              ← navbar + toggle dark/light
        │   ├── Hero/                ← seção "Comunicação Acessível"
        │   ├── HowItWorks/          ← 3 círculos coloridos
        │   ├── Testimonials/        ← cards + carrossel mobile
        │   ├── Footer/              ← rodapé
        │   └── Pages/               ← páginas das rotas
        │       ├── Home.jsx
        │       ├── Sobre.jsx
        │       ├── Recursos.jsx
        │       ├── Blog.jsx
        │       ├── Contato.jsx
        │       ├── Comecar.jsx
        │       └── NotFound.jsx
        └── Styles/                  ← styled-components (.js)
            ├── themes.js            ← paletas light/dark
            ├── GlobalStyle.js       ← estilos globais
            ├── HeaderStyles.js
            ├── HeroStyles.js
            ├── HowItWorksStyles.js
            ├── TestimonialsStyles.js
            ├── FooterStyles.js
            ├── PageStyles.js
            └── ContatoStyles.js
```

## Como tudo se conecta

### 1. [`main.jsx`](src/main.jsx) — ponto de entrada

- Importa o CSS do Bootstrap.
- Envolve o app em `ThemeProvider` (contexto de tema) e `BrowserRouter` (roteamento).
- Aplica `GlobalStyle` (reset + transições).
- Renderiza `<App />`.

### 2. [`App.jsx`](src/App/App.jsx) — layout + rotas

- Sempre renderiza `<Header />` e `<Footer />`.
- No meio, `<Routes>` troca o conteúdo conforme a URL:
  - `/` → **Home** (Hero + HowItWorks + Testimonials)
  - `/sobre`, `/recursos`, `/blog`, `/contato`, `/comecar` → páginas
  - `*` → **NotFound**

### 3. `Components/` — apenas lógica e JSX

Cada subpasta tem um único `.jsx` sem CSS junto. O componente importa seus estilos de `Styles/`. Exemplo em [`Hero.jsx`](src/Components/Hero/Hero.jsx):

```jsx
import { HeroSection, HeroTitle, ... } from '../../Styles/HeroStyles';
```

### 4. `Styles/` — apenas styled-components

Cada arquivo exporta os componentes estilizados de uma feature. Todos consomem o tema atual via `theme.colors.*`, definido em [`themes.js`](src/Styles/themes.js).

### 5. `ThemeContext` — chave do dark/light mode

[`ThemeContext.jsx`](src/Components/ThemeContext/ThemeContext.jsx) expõe `useThemeToggle()`. O botão no `Header` chama `toggleTheme()`, que alterna entre `lightTheme` e `darkTheme`, salva a escolha em `localStorage` e reaplica automaticamente em todos os styled-components via `ThemeProvider`.

## Convenção de imports

- **Componentes:** `Components/<Feature>/<Feature>.jsx`
- **Estilos:** `Styles/<Feature>Styles.js`

Os arquivos `.jsx` ficam limpos (só estrutura e lógica); todo CSS mora em `Styles/`.

## Rotas

| Caminho     | Página       |
| ----------- | ------------ |
| `/`         | Home         |
| `/sobre`    | Sobre        |
| `/recursos` | Recursos     |
| `/blog`     | Blog         |
| `/contato`  | Contato      |
| `/comecar`  | Começar      |
| `*`         | NotFound 404 |

## Temas (claro/escuro)

A alternância de tema é controlada pelo `ThemeProvider` em [`ThemeContext.jsx`](src/Components/ThemeContext/ThemeContext.jsx), que combina o `ThemeProvider` do `styled-components` com um contexto próprio. A preferência do usuário é persistida em `localStorage` sob a chave `acesso-livre-theme`.

---

Projeto desenvolvido com fins educacionais e de promoção da acessibilidade digital.
