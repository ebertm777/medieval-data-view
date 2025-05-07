# 🏰 Medieval Data View

Uma aplicação de visualização de dados históricos com tema medieval, desenvolvida em **React** e **D3.js**, que exibe uma **linha do tempo interativa** dos reinos fictícios.

![screenshot](./preview.png) <!-- opcional: coloque uma imagem da interface -->

## ✨ Funcionalidades

- Exibição visual de linhas do tempo para diferentes reinos medievais
- Interface estilizada com fontes temáticas e fundo medieval
- Componente reutilizável com dados dinâmicos
- Responsivo ao tema claro/escuro do sistema

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [D3.js](https://d3js.org/)
- [Google Fonts - MedievalSharp](https://fonts.google.com/specimen/MedievalSharp)
- CSS customizado com suporte a dark mode

## 📂 Estrutura do Projeto

/src
├── Data/
│ └── Data.js # Componente TimelineChart
├── styles/
│ └── globals.css # Estilo global com tema medieval
└── app/
└── page.js # Página principal com dados dos reinos


## 🧙 Como Executar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/medieval-data-view.git
   cd medieval-data-view

2. npm install

3. npm run dev

4. Acesse http://localhost:3000 no seu navegador.


🛠️ Personalização
Você pode adicionar novos reinos ou eventos no componente Home, alterando o array kingdoms:


🏹 Inspiração
Este projeto foi inspirado em interfaces de jogos de estratégia e RPGs medievais, combinando visualizações modernas com um tema histórico-fantástico.

📜 Licença
Este projeto está licenciado sob a MIT License.