import requests
import json
from typing import Dict, Any
from ..config import GEMINI_API_URL, GEMINI_API_KEY_PARAM, DEFAULT_HEADERS

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
                    "error": f"API Error: {response.status_code}",
                    "status_code": response.status_code
                }
                
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "status_code": 500
            }
