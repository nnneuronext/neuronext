# Neuronext - AI Suite for Content Creators

## 🚀 Tecnologias

- **Frontend:** Next.js 14 + TypeScript + TailwindCSS
- **Backend:** Python 3.12 + FastAPI
- **IA:** Google Gemini API + LangChain
- **Database:** PostgreSQL + MongoDB
- **Infra:** Docker + Kubernetes + Terraform

## 📦 Setup Local

### Requisitos
- Docker e Docker Compose
- Conta Google Cloud (para API Key)

### Iniciar Aplicação

\`\`\`bash
# 1. Clonar repositório
git clone https://github.com/seuusername/neuronext.git
cd neuronext

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas chaves de API

# 3. Iniciar com Docker Compose
docker-compose up --build
\`\`\`

## 🌐 Acesso

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **Documentação:** http://localhost:8000/docs

## 🚀 Deploy

Para deploy em produção:
\`\`\`bash
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## 📚 Documentação

- [API Docs](http://localhost:8000/docs)
- [Arquitetura](./docs/ARCHITECTURE.md)
