from fastapi import FastAPI, APIRouter, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
import requests
from typing import Dict, Any
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv()

# Configurações
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent"
GEMINI_API_KEY_PARAM = "?key=" + GOOGLE_API_KEY if GOOGLE_API_KEY else ""
DEFAULT_HEADERS = {"Content-Type": "application/json"}

# Serviço de IA
class AIService:
    @staticmethod
    async def generate_content(prompt: str) -> Dict[str, Any]:
        """Gera conteúdo usando Google Gemini API"""
        try:
            # Preparar payload
            payload = {
                "contents": [{
                    "parts": [{
                        "text": prompt
                    }]
                }]
            }
            
            # Fazer requisição
            url = GEMINI_API_URL + GEMINI_API_KEY_PARAM
            response = requests.post(
                url,
                headers=DEFAULT_HEADERS,
                json=payload,
                timeout=30
            )
            
            # Retornar resultado
            if response.status_code == 200:
                return {
                    "success": True,
                    "data": response.json(),
                    "status_code": 200
                }
            else:
                return {
                    "success": False,
                    "error": f"API Error: {response.status_code} - {response.text}",
                    "status_code": response.status_code
                }
                
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "status_code": 500
            }

# Criar app (compatível com Railway)
app = FastAPI(
    title="Neuronext API",
    description="AI Suite for Content Creators",
    version="0.1.0"
)

# Configurar CORS para produção
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, especificar domínios
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Criar router
ai_router = APIRouter(prefix="/api/ai", tags=["AI"])

@ai_router.post("/generate-content")
async def generate_content_endpoint(request: Dict[str, Any] = Body(...)):
    """Gera conteúdo usando IA"""
    prompt = request.get("prompt", "")
    
    if not prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")
    
    result = await AIService.generate_content(prompt)
    
    if result["success"]:
        return {
            "status": "success",
            "data": result["data"]
        }
    else:
        raise HTTPException(
            status_code=result["status_code"], 
            detail=result["error"]
        )

@ai_router.get("/health")
async def ai_health():
    """Verifica status da IA"""
    return {
        "service": "AI Service",
        "status": "available",
        "provider": "Google Gemini"
    }

# Incluir rotas
app.include_router(ai_router)

# Rotas principais
@app.get("/")
async def root():
    return {"message": "Neuronext API - AI Suite for Content Creators"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/api/test")
async def test_api():
    return {
        "service": "Neuronext Backend",
        "framework": "FastAPI",
        "status": "working"
    }
